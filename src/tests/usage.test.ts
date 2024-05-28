import { describe, test, expect } from 'vitest'

import { Command } from '../command'

describe('usage', async () => {
  test('basic help', async () => {
    const cmd = new Command({
      name: 'basic-help',
      description: 'This is a basic command',
      arguments: {
        name: 'name',
        description: 'The name of the thing',
      },
      options: [
        {
          name: 'log-level',
          type: 'string',
          description: 'Set the log level',
          itemName: 'level',
        },
        {
          name: 'log-format',
          type: 'string',
          description: 'Set the logging output format',
        },
        {
          name: 'file',
          type: 'string',
          multiple: true,
          description: 'The file(s) to read',
        },
      ],
      flags: [
        {
          name: 'debug',
          description: 'Run debug mode',
        },
        {
          name: 'version',
          description: 'Show version',
          alias: 'v',
        },
      ],
    })
    const usage = cmd.generateHelp({ allowColors: false })
    expect(usage).toEqual(`
This is a basic command

Usage:
  basic-help [name] [OPTIONS]

Arguments:
  name                                  The name of the thing

Options:
  --log-level <level>                   Set the log level
  --log-format <log-format>             Set the logging output format
  --file <file...>                      The file(s) to read
  --debug                               Run debug mode
  -v, --version                         Show version
  -h, --help                            Show help`)
  })

  test('basic help with subcommands', async () => {
    const cmd = new Command({
      name: 'basic-help-subcommands',
      description: 'This is a basic command with subcommands',
      subcommands: [
        {
          name: 'subcommand-instance',
          description: 'This is an example subcommand instance',
        },
      ],
      options: [
        {
          name: 'log-level',
          type: 'string',
          description: 'Set the log level',
          itemName: 'level',
        },
        {
          name: 'log-format',
          type: 'string',
          description: 'Set the logging output format',
        },
        {
          name: 'file',
          type: 'string',
          multiple: true,
          description: 'The file(s) to read',
        },
      ],
      flags: [
        {
          name: 'debug',
          description: 'Run debug mode',
        },
        {
          name: 'version',
          description: 'Show version',
          alias: 'v',
        },
      ],
    })
    const usage = cmd.generateHelp({ allowColors: false })
    expect(usage).toEqual(`
This is a basic command with subcommands

Usage:
  basic-help-subcommands [OPTIONS] [COMMAND]

Commands:
  subcommand-instance                   This is an example subcommand instance

Options:
  --log-level <level>                   Set the log level
  --log-format <log-format>             Set the logging output format
  --file <file...>                      The file(s) to read
  --debug                               Run debug mode
  -v, --version                         Show version
  -h, --help                            Show help`)
  })
})
