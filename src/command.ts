import clargs from 'command-line-args'
// @ts-expect-error needed for dual-bundling
import { Prompt, PromptConstructor } from '@types/inquirer'
// @ts-expect-error needed for dual-bundling
import inquirer from 'inquirer'
// @ts-expect-error needed for dual-bundling
import chalk from 'chalk'

import { rainbow, CommandParser } from './inc'

import {
  CommandProps,
  CommandArgumentProps,
  CommandOptionProps,
  CommandFlagProps,
  CommandPromptProps,
} from './command.types'

/**
 * Command class
 */
export class Command {
  __type = 'Command'

  name:string = undefined
  description?:string
  version?:string

  protected _command:string = undefined
  get command () { return this._command || this.name }
  set command (val) { this._command = val }

  arguments:CommandArgumentProps | CommandArgumentProps[] = []
  options:CommandOptionProps[] = []
  flags:CommandFlagProps[] = []
  prompts:CommandPromptProps[] = []
  subcommands: Array<CommandProps | Command | typeof Command> | {[key:string]: CommandProps | Command | typeof Command} = []

  promptTypes: {[key:string]: PromptConstructor} = {}

  autoHelp = true
  silent = false
  fun = true

  protected _arguments = []
  protected _options = []
  protected _flags = []
  protected _prompts: Prompt = []
  protected _subcommands = {}

  protected _definitions = []

  // none, single, multiple, positional, subcommand 
  protected _argumentStrategy = 'none'

  /**
   * Constructor
   * 
   * @param {CommandProps} cfg  Command configuration
   * @memberof Command
   */
  constructor(cfg?:CommandProps) {
    this.initialize(cfg)
    return this
  }

  /**
   * Apply the provided configuration to the command
   * 
   * @param   {CommandPromptProps}  cfg     Command configuration
   * @returns {Command}                     Command instance (for chainability)
   * @memberof Command
   */
  initialize(cfg:CommandProps | {} = {}) {
    // set each provided value
    Object.entries(cfg).forEach(([key, value]) => (this[key] = value))
    
    this.prepare()

    return this
  }

  /**
   * Prepare the command by registering arguments, options, flags, subcommands and prompts
   * 
   * @memberof Command
   */
  prepare() {
    // register arguments
    const args = Array.isArray(this.arguments) ? this.arguments : [this.arguments]
    args.forEach(arg => this.argument(arg))
    // register options
    this.options.forEach(opt => this.option(opt))
    // register flags
    this.flags.forEach(flag => this.flag(flag))
    this.registerAutoFlags()
    // register subcommands
    const subcommands = this.subcommands
    if (Array.isArray(subcommands)) {
      subcommands.forEach(subcmd => this.subcommand(subcmd))
    } else if (typeof subcommands === 'object') {
      Object.entries(subcommands).forEach(([k, v]: [string, any]) =>
        this.subcommand(v, k),
      )
    }
    // register prompts
    this.prompts.forEach(prompt => this.prompt(prompt))
    // register prompt types
    Object.entries(this.promptTypes).forEach(([k, v]) =>
      inquirer.registerPrompt(k, v),
    )
  }

  /**
   * Assemble the command-line arguments
   * 
   * @returns {array} Array of argument definitions
   * @memberof Command
   */
  assemble () {
    const definitions = []

    if (this._arguments.length === 1) {
      // one argument passed, so single or multiple
      const arg = this._arguments[0]
      // set argument strategy
      this._argumentStrategy = arg.multiple ? 'multiple' : 'single'
      arg.defaultOption = true
      definitions.push(arg)
    }else if (this._arguments.length > 1) {
      // multiple arguments passed, so positional
      this._argumentStrategy = 'positional'
    }

    const subcommandCount = Object.keys(this._subcommands).length

    if (subcommandCount > 0 && !['none', 'subcommand'].includes(this._argumentStrategy))
      throw new Error('Cannot use both arguments and subcommands')

    if (subcommandCount > 0) this._argumentStrategy = 'subcommand'

    this._arguments.forEach(arg => definitions.push(arg))
    this._options.forEach(opt => definitions.push(opt))
    this._flags.forEach(flag => definitions.push(flag))

    this._definitions = definitions

    return definitions
  }

  /**
   * Parse the command-line arguments
   *
   * @param   {array}   argv  Argv stack
   * @returns {Command}       Command instance (for chainability)
   * @memberof Command
   */
  parse (argv?:string[]) {
    if (!argv) argv = process.argv
    const argMix = this.assemble()
    const primaryParse = clargs(argMix, {
      argv,
      stopAtFirstUnknown: true,
      camelCase: true,
    })
    
    let subcommand = null

    let {
      _all: data = {},
      _args: args = {},
      _unknown: unknown = [],
    } = primaryParse

    const {
      _all: altData = {},
      _args: altArgs = {},
      _opts: opts = {},
      _flags: flags = {},
      _unknown: altUnknown = [],
      ...tags
    } = primaryParse

    if (unknown.length > 0) {
      if (this._argumentStrategy === 'positional') {
        const updates = this.parsePositionalArgs({ data, args, unknown })
        data = updates.data
        unknown = updates.unknown
      } else if (this._argumentStrategy === 'subcommand') {
        const cmd = unknown.shift()
        if (!this._subcommands[cmd]) throw new Error(`Unknown subcommand: ${cmd}`)
        subcommand = {
          name: cmd,
          argv: unknown
        }
        unknown = []
      }
    }

    const details = {
      args,
      opts,
      flags,
      subcommand,
      unknown,
      tags,
    }

    return {
      data,
      details
    }
  }

  /**
   * Parse positional arguments
   * 
   * @param {object} options  configuration options 
   * @returns 
   * @memberof Command
   */
  parsePositionalArgs({
    data = {},
    args = {},
    unknown = [],
  }) {
    this._arguments.forEach((arg, i) => {
      if (arg.required && unknown.length === 0) {
        if (arg.defaultValue) {
          args[arg.name] = arg.defaultValue
        } else {
          throw new Error(`Missing required argument: ${arg.name}`)
        }
      }
      if (arg.multiple) {
        const argList = []
        unknown.forEach((val, i) => argList.push(arg.type(val)))
        args[arg.name] = argList
        unknown = []
      } else if (unknown.length > 0) {
        args[arg.name] = arg.type(unknown.shift())
      }
    })
    data = { ...data, ...args }
    return { data, unknown }
  }

  /**
   * Run the command
   * 
   * @param argv array of command-line arguments
   * @returns 
   * @memberof Command
   * @async
   */
  async run(argv?:string[]) {
    // parse the command-line arguments
    let { data, details } = this.parse(argv)

    if (details.subcommand) return this.runSubcommand(details.subcommand.name, details.subcommand.argv)

    if (data.help) return this.outputHelp()

    data = await this.runPrompts(data)
    data = await this.transformFn(data)

    return this.action(data, details)
  }

  /**
   * Transform the data before running the action
   * 
   * @param {object} data   data to be transformed
   * @returns {object}      transformed data
   * @memberof Command
   * @async
   */
  transform = async data => data

  /**
   * 
   * @param {object} data     data object
   * @param {object} details  details object
   * @returns
   * @memberof Command
   * @async
   */
  async action(data, details) {}

  /**
   * Add an argument
   *
   * @param {object} arg  Argument object
   * @returns {Command}   Command instance (for chainability)
   * @memberof Command
   */
  argument ({
    name,
    type: dataType = 'string',
    description = '',
    required = false,
    multiple = false,
    default: defaultValue,
    tags = [],
    validate = async () => true
  }:CommandArgumentProps) {
    if (typeof tags === 'string') tags = [tags]
    tags.push('_args')
    this._arguments.push({
      name,
      type: this.parseDataType(dataType),
      _type: dataType,
      description,
      required,
      multiple,
      defaultValue,
      group: tags,
      validate
    })
    return this
  }

  /**
   * Add an option
   * 
   * @param {object} opt  Option object
   * @returns {Command}   Command instance (for chainability)
   * @memberof Command
   */
  option({
    name,
    alias,
    type: dataType = 'string',
    description = '',
    required = false,
    multiple = false,
    global = false,
    default: defaultValue,
    itemName,
    tags = [],
    validate = async () => true
  }:CommandOptionProps) {
    if (typeof tags === 'string') tags = [tags]
    tags.push('_opts')
    this._options.push({
      name,
      alias,
      type: this.parseDataType(dataType),
      _type: dataType,
      description,
      required,
      multiple,
      global,
      defaultValue,
      itemName,
      group: tags,
      validate
    })
    return this
  }

  /**
   * Add a flag
   * 
   * @param {object} flag  Flag object
   * @returns {Command}    Command instance (for chainability)
   * @memberof Command
   */
  flag({
    name,
    alias,
    description = '',
    required = false,
    global = false,
    default: defaultValue = false,
    tags = [],
    validate = async () => true
  }:CommandFlagProps) {
    if (typeof tags === 'string') tags = [tags]
    tags.push('_opts')
    this._flags.push({
      name,
      type: Boolean,
      alias,
      description,
      required,
      global,
      defaultValue,
      group: tags,
      validate
    })
    return this
  }

  /**
   * Add a prompt
   * 
   * @param {object} prompt  Prompt object
   * @returns {Command}      Command instance (for chainability)
   * @memberof Command
   */
  prompt({
    name,
    type,
    label,
    options = [],
    default: defaultValue,
    tags = [],
    validate = async () => true,
    transform = v => v,
    when = () => true,
    force = false,
    _overrides = {}
  }:CommandPromptProps) {
    if (typeof tags === 'string') tags = [tags]
    tags.push('_opts')
    this._prompts.push({
      name,
      type,
      label,
      options,
      default: defaultValue,
      validate,
      filter: transform,
      when,
      askAnswered: force,
      group: tags,
      ..._overrides
    })
    return this
  }

  /**
   * Add a subcommand
   * 
   * @param {object} cmd   Subcommand object
   * @param {string} name  Subcommand name
   * @returns {Command}    Command instance (for chainability)
   * @memberof Command
   */
  subcommand(cmd: CommandProps | Command | typeof Command, name?: string) {
    if (cmd instanceof Command) {
      // instance of Command
      this._subcommands[name || cmd.command] = cmd
    } else if (typeof cmd === 'function') {
      // cmd is an uninstantiated class
      const cmdInstance = new cmd()
      this._subcommands[name || cmdInstance.command] = cmdInstance
    } else if ('name' in cmd && typeof cmd.name === 'string' && cmd instanceof Command === false) {
      // cmd is an object
      this._subcommands[name || cmd.command || cmd.name] = new Command(cmd)
    } else {
      // cmd is a class instance
      this._subcommands[name || cmd.command] = cmd
    }
    return this
  }

  /**
   * Apply a tag to the passed option or argument
   *
   * @param {object} obj  arg/opt object
   * @param {string} tag  tag to be applied
   * @returns {object}    updated arg/opt object
   * @memberof Command
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
   * Register auto flags
   * 
   * @memberof Command
   */
  registerAutoFlags () {
    if (this.autoHelp) {
      this.flag({
        name: 'help',
        alias: 'h',
        description: 'Show help',
        global: true,
        tags: ['_system']
      })
    }
  }

  /**
   * Parse a data type
   * 
   * @param {string} dataType  Data type to parse
   * @returns {function}       Parsed data type
   * @memberof Command
   */
  parseDataType (dataType) {
    if (typeof dataType === 'function') return dataType
    switch (dataType) {
      case 'string':
        return String
      case 'number':
        return Number
      case 'boolean':
        return Boolean
      case 'array':
        return Array
      case 'object':
        return Object
      default:
        return String
    }
  }

  /**
   * Validate any arguments, options or flags that have a `validate` property
   *
   * @param {object} data   Data object to validate against
   * @returns {boolean}     True if successful
   * @memberof Command
   * @async
   */
  async validateOptions(data) {
    const options = this._definitions
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
   * Get a subcommand by name
   * 
   * @param {string} name  Argument name
   * @returns {object}     Argument object
   * @memberof Command
   */
  getSubcommand (name) {
    return this._subcommands[name]
  }

  /**
   * Run a subcommand
   * 
   * @param {string} name  Subcommand name
   * @param {array} argv   Subcommand arguments
   * @returns
   * @memberof Command
   */
  runSubcommand (name, argv) {
    const cmd = this._subcommands[name]
    return cmd.run(argv)
  }

  /**
   * Run the prompts
   * 
   * @param {object} data  Data object
   * @returns
   * @memberof Command
   * @async
   */
  async runPrompts (data = {}) {
    if (this.prompts.length === 0) return data
    return await inquirer.prompt(this.prompts, data)
  }

  /**
   * Internal method to transform the data
   * 
   * @param {object} data   Data object
   * @returns {object}      Transformed data object
   * @memberof Command
   * @async
   * @protected
   */
  protected async transformFn (data) {
    let transform = this.transform(data)
    if (transform instanceof Promise) transform = await transform
    return transform
  }

  /**
   * Generate help text for the command
   * 
   * @param {object} cfg  Configuration options
   * @returns {string}    Help text
   * @memberof Command
   */
  generateHelp (cfg = {}) {
    const data = {
      name: this.name,
      command: this.command,
      description: this.description,
      version: this.version,
      arguments: this._arguments,
      options: this._options,
      flags: this._flags,
      subcommands: this._subcommands,
      prompts: this._prompts,
    }
    const help = CommandParser.generateHelp(data, cfg)
    return help
  }

  /**
   * Output help text
   * 
   * @memberof Command
   */
  outputHelp () {
    const help = this.generateHelp()
    console.log(help)
    process.exit(0)
  }

  /**
   * Style the output
   * 
   * @param {string} styles  Styles to apply
   * @returns {function}     Chalk function
   * @memberof Command
   */
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

  /**
   * Log output
   * 
   * @param {any} msg   Message to log
   * @param {object} opts  Options
   * @memberof Command
   */
  log(msg: any, opts = {}) {
    if (this.silent) return
    const xopts = { styles: null, type: 'log', ...opts }
    console[xopts.type](this.style(xopts.styles)(msg))
  }

  /**
   * Log output
   * 
   * @param {any} msg   Message to log
   * @param {object} opts  Options
   * @memberof Command
   * @alias log
   */
  out = (msg: any, opts = {}) => this.log(msg, opts)

  /**
   * Log an error
   * 
   * @param {any} err   Error object
   * @param {any} msg   Message to log
   * @param {boolean} exit  Exit the process
   * @memberof Command
   */
  error(err?, msg?, exit = true) {
    const cfg = { type: 'error', styles: ['red'] }
    if (msg) this.log(msg, cfg)

    if (err && err.toString) this.log(err.toString(), { type: 'error' })

    this.spacer()
    if (exit) process.exit()
  }

  /**
   * Log a spacer
   * 
   * @memberof Command
   */
  spacer = () => {
    if (!this.silent) console.log()
  }

  /**
   * Rainbowify text
   * 
   * @param {string} text   Text to rainbowify
   * @returns {string}      Rainbowified text
   * @memberof Command
   */
  rainbow = (text: string) => rainbow(text)

  /**
   * Log a heading
   * 
   * @param {string} msg   Message to log
   * @param {object} opts  Options
   * @memberof Command
   */
  heading(msg, opts = {}) {
    const xopts = { styles: 'bold', ...opts }
    if (new Date().getMonth() === 5 && this.fun === true)
      msg = this.rainbow(msg)
    msg = this.style(xopts.styles)(msg)
    this.out(`\n${msg}\n`)
  }
}