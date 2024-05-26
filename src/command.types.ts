import { Command } from './command'

export interface CommandProps {
  name: string
  command?: string
  description?: string
  version?: string
  arguments?: CommandArgumentProps | CommandArgumentProps[]
  options?: CommandOptionProps[]
  flags?: CommandFlagProps[]
  prompts?: CommandPromptProps[]
  subcommands?: Array<CommandProps | Command | typeof Command> | {[key:string]: CommandProps | Command | typeof Command}
}

export interface CommandBaseParameterProps {
  name: string
  description?: string
  required?: boolean
  tags?: string | string[]
  validate?: (v) => Promise<boolean>
}

export interface CommandArgumentProps extends CommandBaseParameterProps {
  type?: any
  multiple?: boolean
  default?: any
}

export interface CommandOptionProps extends CommandBaseParameterProps {
  alias?: string
  type?: any
  multiple?: boolean
  global?: boolean
  default?: any
  itemName?: string
}

export interface CommandFlagProps extends CommandBaseParameterProps {
  alias?: string
  global?: boolean
  default?: boolean
}

export interface CommandPromptProps {
  name: string
  type?: string
  label: string // message
  options?: any[] | ((answers) => any[]) // choices
  default?: any
  tags?: string | string[]
  validate?: (v) => Promise<boolean>
  transform?: (v) => any // filter
  when?: (answers) => boolean // when
  force?: boolean // askAnswered
  _overrides?: { [key: string]: any }
}

export interface CommandPromptTypeProps {

}
