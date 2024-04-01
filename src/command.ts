import clargs from 'command-line-args'
import clusage from 'command-line-usage'
// @ts-expect-error needed for dual-bundling
import chalk from 'chalk'
import inquirer from 'inquirer'

import {
  CommandInterface,
  CommandArgumentInterface,
  CommandOptionInterface,
} from './command.types'
import { CommandParser } from './command-help'
import { rainbow } from './convert'

/**
 * Command class
 */
export class Command {
  command: string
  title?: string = ''
  description?: string = ''
  version?: string

  help: string
  additionalHelp: string
  hidden: boolean

  arguments: CommandArgumentInterface
  options: CommandOptionInterface[] = []

  subcommands = []

  prompts = []
  promptTypes = {}

  fun = true

  _arguments = []
  _options = []
  _commandStack = []
  _subcommands = {}
  _type = 'command'

  /**
   * Command constructor
   *
   * @param {object} cfg  Configuration object
   * @returns {Command} Command instance (for chainability)
   */
  constructor(cfg: CommandInterface) {
    this.init(cfg)

    return this
  }

  /**
   * Initialization method (called by constructor)
   *
   * @param {object} cfg  Configuration object
   * @returns {Command}   Command instance (for chainability)
   */
  init(cfg: CommandInterface) {
    Object.entries(cfg).forEach(([key, value]) => {
      this[key] = value
    })

    this._commandStack.push(cfg.command)

    // parse the help string
    const usage = CommandParser.parseUsage(cfg.usage)

    const opts = [].concat(usage, cfg.options, [
      {
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: 'Display help',
        group: '_system',
      },
    ])
    opts.forEach(o => this.option(o))

    // throw error if both subcommands & arguments exist
    if (cfg.arguments && cfg.subcommands)
      throw new Error('Commands with subcommands cannot have arguments')

    if (cfg.arguments) this.argument(cfg.arguments)

    this.getSubcommands()

    // register any prompts
    Object.entries(this.promptTypes).forEach(([k, v]) => {
      inquirer.registerPrompt(k, v)
    })

    return this
  }

  /**
   * Parse the command-line arguments
   *
   * @param {array} argv  Argv stack
   * @returns {Command}   Command instance (for chainability)
   */
  async parse(argv?: string[]) {
    if (!argv) argv = process.argv

    const argMix = [].concat(this._arguments, this._options)
    const primaryParse = clargs(argMix, {
      argv,
      stopAtFirstUnknown: true,
      camelCase: true,
    })
    const args = primaryParse._args || {}

    const all = Object.assign({}, primaryParse._all || primaryParse)

    Object.keys(primaryParse._args || []).forEach(e => delete all[e])
    const etc = {
      argv: primaryParse._unknown || [],
      opts: primaryParse,
      data: {},
    }
    const fnargs: [any, any, any] = [args, all, etc]

    if (all.help === true) return this.generateHelp()
    if (this._arguments.length > 0) {
      if (primaryParse._args.subcommand) {
        const cmd = this._subcommands[primaryParse._args.subcommand]
        cmd.parse(etc.argv)
        return cmd
      }
    }

    await this.validateOptions(etc.opts._all)

    if (this.prompts.length > 0) {
      const answers = await inquirer.prompt(this.prompts, etc.opts._all)
      etc.data = answers
    }

    await this.action(...fnargs)

    return this
  }

  /**
   * Validate any arguments or options that have a `validate` property
   * @param {object} data   Data object to validate against
   * @returns {boolean}     True if successful
   */
  async validateOptions(data) {
    const options = this._options
    for (let i = 0; i < options.length; i++) {
      const { name, validate } = options[i]
      // check option has a validation property and a value has been sent
      if (typeof validate === 'function' && data[name]) {
        // run validation
        let validation = validate(data[name])
        // if validation is async, await response
        if (validation instanceof Promise) validation = await validation

        if (validation === false)
          return this.error(null, `Invalid value for '${name}': ${data[name]}`)
        else if (typeof validation === 'string')
          return this.error(null, validation)
      }
    }
    return true
  }

  /**
   * Add an argument
   *
   * @param {object} arg  Argument object
   * @returns
   */
  argument(arg: CommandArgumentInterface) {
    arg = {
      ...{
        name: arg.name,
        subcommand: false,
        defaultOption: true,
        multiple: false,
        group: '_args',
      },
      ...arg,
    }

    this._arguments.push(arg)

    return this
  }

  /**
   * Add an option
   *
   * @param {object} opt  Option object
   * @returns {Command}   Command instance (for chainability)
   */
  option(opt: CommandOptionInterface) {
    if (!opt.name) throw new Error('Options require name') // throw error if no name provided

    // check if the named option already exists
    const match = this._options.findIndex(({ name }) => name === opt.name)

    if (match !== -1) {
      this._options[match] = { ...this._options[match], ...opt } // update existing option
    } else {
      this._options.push(opt) // add as a new option
    }

    return this
  }

  /**
   * Add a subcommand
   *
   * @param {Command} command Subcommand instance
   * @returns {Command} Command instance (for chainability)
   */
  subcommand(command: Command) {
    command._commandStack = [].concat(this._commandStack, command._commandStack)
    this._subcommands[command.command] = command
    return this
  }

  /**
   * Retrieve the list of commands
   *
   * @returns {array}   Array of commands in command stack
   */
  getCommandStack() {
    return this._commandStack
  }

  /**
   * Retrieve the list of available subcommands
   *
   * @returns {array}   Array of subcommands
   */
  getSubcommands() {
    if (this.subcommands.length === 0) return []

    // create an argument specifically for subcommands
    this.argument({
      name: 'subcommand',
      subcommand: true,
      defaultOption: true,
    })
    const subcommands = []

    // add each subcommand
    this.subcommands.forEach(subcommand => this.subcommand(subcommand))

    return subcommands
  }

  /**
   * Method to trigger once processed
   *
   * @param {object} args   Arguments
   * @param {object} opts   Options
   * @param {object} etc    Complete object of parsed data
   */
  async action(args, opts, etc) {
    // if action isn't overwritten, output help
    this.generateHelp()
  }

  /**
   * Generate and output help
   */
  generateHelp() {
    const sections = []
    let content = this.description
    const additionalHelp = this.additionalHelp
      ? '\n\n' + this.additionalHelp
      : ''

    if (this.help) {
      // help is already provided, so use that
      content += '\n' + this.help + additionalHelp
      sections.push({
        header: this.title || `Command: ${this.command}`,
        content,
      })
    } else {
      content += additionalHelp
      sections.push({
        header: this.title || `Command: ${this.command}`,
        content,
      })

      const argStr = CommandParser.generateArgString(
        this._commandStack,
        this._arguments,
      )
      sections.push({ header: 'Usage', content: argStr })

      if (this._options.length > 0)
        sections.push({ header: 'Options', optionList: this._options })

      if (this.subcommands.length > 0)
        sections.push({
          header: 'Commands',
          content: CommandParser.generateCommandList(this._subcommands),
        })
    }
    console.log(clusage(sections))
    process.exit()
  }

  style(styles) {
    let call = chalk
    if (styles) {
      if (typeof styles === 'string') styles = styles.split('.')
      styles.forEach(style => {
        if (chalk[style]) call = call[style]
      })
    }
    return call
  }

  log(msg: any, opts = {}) {
    const xopts = { styles: null, type: 'log', ...opts }
    console[xopts.type](this.style(xopts.styles)(msg))
  }

  out = (msg: any, opts = {}) => this.log(msg, opts)

  error(err?, msg?, exit = true) {
    const cfg = { type: 'error', styles: ['red'] }
    if (msg) this.log(msg, cfg)

    if (err && err.toString) this.log(err.toString(), { type: 'error' })

    this.spacer()
    if (exit) process.exit()
  }

  spacer = () => console.log()

  rainbow = (text: string) => rainbow(text)

  heading(msg, opts = {}) {
    const xopts = { styles: 'bold', ...opts }
    if (new Date().getMonth() === 5 && this.fun === true)
      msg = this.rainbow(msg)
    msg = this.style(xopts.styles)(msg)
    this.out(`\n${msg}\n`)
  }
}

export default Command
