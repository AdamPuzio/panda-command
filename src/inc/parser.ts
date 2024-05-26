import { Command } from '..'
// @ts-expect-error needed for dual-bundling
import chalk from 'chalk'
import cliui from 'cliui'

interface CommandData {
  name: string
  command: string
  description?: string
  version?: string
  arguments?: any | any[] //CommandArgumentProps | CommandArgumentProps[]
  options?: any[]
  flags?: any[]
  subcommands?: { [key: string]: Command }
  prompts?: any[]
}

export class CommandParser {

  /**
   * Generate help text for a command
   * 
   * @param command   command data
   * @param config    config options 
   * @returns 
   */
  static generateHelp (command: CommandData, {
    indent = 2,
    mergeOptions = true,
    allowColors = true,
  }:{
    indent?: number,
    mergeOptions?: boolean
    allowColors?: boolean
  } = {}): string {
    const bold = (text: string) => allowColors ? chalk.bold(text) : text
    const ui = cliui({ width: undefined })

    if (command.description) ui.div({
      text: command.description,
      padding: [1, 0, 0, 0],
    })

    const usage = this.generateUsage(command)

    ui.div({
      text: `${bold('Usage:')}`,
      padding: [1, 0, 0, 0],
    
    })
    ui.div({
      text: usage,
      padding: [0, 0, 0, indent],
    })

    if (Object.keys(command.subcommands).length > 0) {
      ui.div({
        text: `${bold('Commands:')}`,
        padding: [1, 0, 0, 0],
      })
      for (const subcommandName in command.subcommands) {
        const subcommand = command.subcommands[subcommandName]
        ui.div({
          text: `${subcommand.name}`,
          padding: [0, 0, 0, indent],
        }, {
          text: `${subcommand.description}`,
          padding: [0, 0, 0, 0],
        })
      }
    }

    if (command.arguments.length > 0) {
      ui.div({
        text: `${bold('Arguments:')}`,
        padding: [1, 0, 0, 0],
      })
      for (const arg of command.arguments) {
        const argType = arg._type ? ` (${arg._type})` : ''
        ui.div({
          text: `${arg.name}`,
          padding: [0, 0, 0, indent],
        }, {
          text: `${arg.description}`,
          padding: [0, 0, 0, 0],
        })
      }
    }

    if (command.options.length > 0) {
      ui.div({
        text: `${bold('Options:')}`,
        padding: [1, 0, 0, 0],
      })
      for (const option of command.options) {
        const optType = option._type ? `${option._type.toUpperCase ()}` : ''
        const optName = option.itemName ? `${option.itemName}` : option.name
        const optAlias = option.alias ? `-${option.alias}, ` : ''
        const optMultiple = option.multiple ? '...' : ''
        const defaultValue = option.default ? ` [default: ${option.default}]` : ''
        const optString = `<${optName}${optMultiple}>`
        ui.div({
          text: `${optAlias}--${option.name} ${optString}`,
          padding: [0, 0, 0, indent],
        }, {
          text: `${option.description}${defaultValue}`,
          padding: [0, 0, 0, 0],
        })
      }
    }

    if (command.flags.length > 0) {
      if (!mergeOptions || command.options.length === 0) {
        ui.div({
          text: `${bold('Flags:')}`,
          padding: [1, 0, 0, 0],
        })
      }
      for (const flag of command.flags) {
        const flagAlias = flag.alias ? `-${flag.alias}, ` : ''
        ui.div({
          text: `${flagAlias}--${flag.name}`,
          padding: [0, 0, 0, indent],
        }, {
          text: flag.description,
          padding: [0, 0, 0, 0],
        })
      }
    }

    return ui.toString()
  }

  /**
   * Generate usage string for a command
   * 
   * @param command command data
   * @returns 
   */
  static generateUsage (command: CommandData): string {
    const advancedFormat = false

    let usage = `${command.command} `
    // generate usage for arguments
    if (command.arguments) {
      for (const arg of command.arguments) {
        const multiArg = arg.multiple ? '...' : ''
        usage += arg.required ? `<${arg.name}${multiArg}> ` : `[${arg.name}${multiArg}] `
      }
    }
    // generate usage for options and flags
    if (command.options || command.flags) {
      if (advancedFormat) {
        for (const opt of command.options) {
          const multiOpt = opt.multiple ? '...' : ''
          usage += opt.required ? `<--${opt.name}${multiOpt}> ` : `[--${opt.name}${multiOpt}] `
        }
        for (const flag of command.flags) {
          usage += flag.required ? `<--${flag.name}> ` : `[--${flag.name}] `
        }
      } else {
        usage += '[OPTIONS] '
      
      }
    }
    // generate usage for subcommands
    if (Object.keys(command.subcommands).length > 0) usage += '[COMMAND]'

    return usage
  }

}

export default CommandParser
