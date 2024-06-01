import { describe, test, expect } from 'vitest'

import { Command } from '../command'

const subcommandInstance = new Command({
  name: 'subcommand-instance',
})

class subcommandClass extends Command {
  name: string = 'subcommand-class'

  arguments = {
    name: 'name',
  }
}

const subcommandClassInstance = new subcommandClass()

const subcommandObject = {
  name: 'subcommand-object',
}

describe('subcommands', async () => {
  test('basic subcommand - instance', async () => {
    const argv = ['subcommand-instance']
    const rs = new Command({
      name: 'basic-subcommand-instance',
      subcommands: [subcommandInstance],
    })
    expect(rs.parse(argv)).toEqual({
      data: {},
      details: {
        args: {},
        opts: {},
        flags: {},
        subcommand: {
          name: 'subcommand-instance',
          argv: [],
        },
        unknown: [],
        tags: {},
      },
    })
  })

  test('basic subcommand - class', async () => {
    const argv = ['subcommand-class', 'subcommand-name']
    const rs = new Command({
      name: 'basic-subcommand-class',
      subcommands: [subcommandClass],
    })
    expect(rs.parse(argv)).toEqual({
      data: {},
      details: {
        args: {},
        opts: {},
        flags: {},
        subcommand: {
          name: 'subcommand-class',
          argv: ['subcommand-name'],
        },
        unknown: [],
        tags: {},
      },
    })
  })

  test('basic subcommand - class instance', async () => {
    const argv = ['subcommand-class']
    const rs = new Command({
      name: 'basic-subcommand-class-instance',
      subcommands: [subcommandClassInstance],
    })
    expect(rs.parse(argv)).toEqual({
      data: {},
      details: {
        args: {},
        opts: {},
        flags: {},
        subcommand: {
          name: 'subcommand-class',
          argv: [],
        },
        unknown: [],
        tags: {},
      },
    })
  })

  test('basic subcommand - object', async () => {
    const argv = ['subcommand-object']
    const rs = new Command({
      name: 'basic-subcommand-object',
      subcommands: [subcommandObject],
    })
    expect(rs.parse(argv)).toEqual({
      data: {},
      details: {
        args: {},
        opts: {},
        flags: {},
        subcommand: {
          name: 'subcommand-object',
          argv: [],
        },
        unknown: [],
        tags: {},
      },
    })
  })

  test('parse subcommand', async () => {
    const argv = ['subcommand-instance']
    const cmd = new Command({
      name: 'parse-subcommand-instance',
      subcommands: [subcommandInstance],
    })
    const rs = cmd.parse(argv)
    const rssub = cmd
      .getSubcommand(rs.details.subcommand.name)
      .parse(rs.details.subcommand.argv)

    expect(rssub).toEqual({
      data: {},
      details: {
        args: {},
        opts: {},
        flags: {},
        subcommand: null,
        unknown: [],
        tags: {},
      },
    })
  })
})
