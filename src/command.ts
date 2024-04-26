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
  name: string
  command?: string
  description?: string = ''
  version?: string

  helpTitle?: string = ''
  helpText: string
  addedHelp: string

  arguments: CommandArgumentInterface
  options: CommandOptionInterface[] = []

  subcommands: any = []

  prompts = []
  promptTypes = {}

  fun: boolean = true
  silent: boolean = false
  hidden: boolean = false
  autoHelp: boolean = true

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
    // generate command from name if it isn't provided
    if (!cfg.command) cfg.command = cfg.name
    // set each provided value
    Object.entries(cfg).forEach(([key, value]) => (this[key] = value))

    // add the command to the command stack
    this._commandStack.push(cfg.command)

    // parse the help string
    const usage = CommandParser.parseUsage(cfg.usage)

    const opts = [].concat(usage, cfg.options || [])
    // add help option
    if (this.autoHelp)
      opts.push({
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: 'Display help',
        group: '_system',
      })
    // register options
    opts.forEach(o => this.option(o))

    // throw error if both subcommands & arguments exist
    if (cfg.arguments && cfg.subcommands)
      throw new Error('Commands with subcommands cannot have arguments')

    // register argument
    if (cfg.arguments) this.argument(cfg.arguments)

    // register subcommands
    const subcommands = cfg.subcommands
    if (Array.isArray(subcommands)) {
      subcommands.forEach(subcmd => this.subcommand(subcmd))
    } else if (typeof subcommands === 'object') {
      Object.entries(subcommands).forEach(([k, v]: [string, any]) =>
        this.subcommand(v, k),
      )
    }

    // register prompts
    Object.entries(this.promptTypes).forEach(([k, v]) =>
      inquirer.registerPrompt(k, v),
    )

    return this
  }

  /**
   * Parse the command-line arguments
   *
   * @param {array} argv  Argv stack
   * @returns {Command}   Command instance (for chainability)
   */
  async parse(argv?: string[]) {
    const parse = this.parseArgv(argv)
    let { data } = parse
    const { details } = parse
    const unknown = details.unknown

    // check for possibility of subcommand being called
    if (unknown && this.subcommands.length > 0) {
      const testSubcommand = unknown[0]
      if (this._subcommands[testSubcommand]) {
        const cmd = this._subcommands[testSubcommand]
        unknown.shift() // shift off subcommand from argv
        cmd.parse(unknown)
        return cmd
      }
    }

    if (this.autoHelp && data.help === true) return this.renderHelp()

    await this.validateOptions(data)

    if (this.prompts.length > 0) {
      const answers = await inquirer.prompt(this.prompts, data)
      // run the transform event handler, skip if false
      let transform = this.transform(answers)
      if (transform instanceof Promise) transform = await transform
      data = details.data = transform
    }

    await this.action(data, details)

    return this
  }

  /**
   * Parse argv
   *
   * @param {array} argv  argv array
   * @returns {object}    object containing data & details
   */
  parseArgv(argv?: string[]) {
    if (!argv) argv = process.argv

    // combine arguments and options, then parse
    const argMix = [].concat(this._arguments, this._options)
    const primaryParse = clargs(argMix, {
      argv,
      stopAtFirstUnknown: true,
      camelCase: true,
    })
    const args = primaryParse._args || {}
    const opts = primaryParse._opts || {}
    const unknown = primaryParse._unknown || []

    const data = Object.assign({}, primaryParse._all || {})

    const details = {
      args,
      opts,
      unknown,
      tags: primaryParse,
      data: {},
    }
    return { data, details }
  }

  /**
   * Validate any arguments or options that have a `validate` property
   *
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
   * Apply a tag to the passed option or argument
   *
   * @param {object} obj  arg/opt object
   * @param {string} tag  tag to be applied
   * @returns {object}    updated arg/opt object
   */
  tag(obj, tag: string) {
    let groups = [tag]
    if (obj.group) {
      if (Array.isArray(obj.group)) {
        groups = [].concat(groups, obj.group)
      } else {
        groups.push(obj.group)
      }
    }
    obj.group = groups
    return obj
  }

  /**
   * Add an argument
   *
   * @param {object} arg  Argument object
   * @returns {Command}   Command instance (for chainability)
   */
  argument(arg: CommandArgumentInterface) {
    arg = {
      ...{
        name: arg.name,
        subcommand: false,
        defaultOption: true,
        multiple: false,
      },
      ...arg,
    }
    arg = this.tag(arg, '_args')

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

    opt = this.tag(opt, '_opts')

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
  subcommand(command: Command, name?) {
    command._commandStack = [].concat(this._commandStack, command._commandStack)
    this._subcommands[name || command.command] = command
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

  transform = async data => data

  /**
   * Method to trigger once processed
   *
   * @param {object} data       raw data object
   * @param {object} details    complete object of parsed data
   */
  async action(data, details) {
    // if action isn't overwritten, output help
    this.renderHelp()
  }

  /**
   * Generate help text
   */
  generateHelp() {
    const sections = []
    let content = this.description
    const addedHelp = this.addedHelp ? '\n\n' + this.addedHelp : ''

    if (this.helpText) {
      // help is already provided, so use that
      content += '\n' + this.helpText + addedHelp
      sections.push({
        header: this.helpTitle || `Command: ${this.command}`,
        content,
      })
    } else {
      content += addedHelp
      sections.push({
        header: this.helpTitle || `Command: ${this.command}`,
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
    return clusage(sections)
  }

  /**
   * Output help text and exit
   */
  renderHelp() {
    const help = this.generateHelp()
    console.log(help)
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
    if (this.silent) return
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

  spacer = () => {
    if (!this.silent) console.log()
  }

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
