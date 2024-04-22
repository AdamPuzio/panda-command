export interface CommandInterface {
  name: string
  command?: string
  title?: string
  description?: string
  arguments?: CommandArgumentInterface
  options?: CommandOptionInterface[]

  help?: string
  helpAdd?: string
  hidden?: boolean
  usage?: string
  version?: string | boolean

  subcommands?: any[] | { [k: string]: any }

  prompts?: any[]
  promptTypes?: {
    [key: string]: any
  }

  fun?: boolean
  autoHelp?: boolean
  silent?: boolean

  action?: (args?, opts?, all?) => Promise<void | any>
}

export interface CommandArgumentInterface {
  name: string
  subcommand?: boolean
  required?: boolean
  defaultOption?: boolean
  multiple?: boolean
  group?: string | string[]
  validate?: (v) => Promise<boolean>
}

export interface CommandOptionInterface {
  name: string
  type: any
  alias?: string
  description?: string
  group?: string | string[]
  validate?: (v) => Promise<boolean>
}
