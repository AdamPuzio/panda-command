export interface CommandInterface {
  command: string
  title?: string
  description?: string
  arguments?: CommandArgumentInterface
  options?: CommandOptionInterface[]

  help?: string
  helpAdd?: string
  hidden?: boolean
  usage?: string
  version?: string | boolean

  subcommands?: boolean
  
  fun?: boolean

  action?: (args?, opts?, all?) => Promise<void|any>
}

export interface CommandArgumentInterface {
  name: string
  subcommand?: boolean
  required?: boolean
  defaultOption?: boolean
  multiple?: boolean
  group?: string
}

export interface CommandOptionInterface {
  name: string
  type: any
  alias?: string
  description?: string
  group?: string
}