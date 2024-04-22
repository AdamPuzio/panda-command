import { vi, describe, test, expect } from 'vitest'

import {
  BasicCommand,
  OptsOnlyCommand,
  ArgAndOptsCommand,
  MultiArgsCommand,
} from './examples'

describe('parseArgv', async () => {
  test('basic', async () => {
    const argv = []
    const rs = BasicCommand.parseArgv(argv)
    expect(rs).toEqual({
      data: {},
      details: {
        args: {},
        opts: {},
        unknown: [],
        tags: {
          _all: {},
          _opts: {},
          _system: {},
        },
        data: {},
      },
    })
  })

  test('basic with unknown', async () => {
    const argv = ['foo', 'bar']
    const rs = BasicCommand.parseArgv(argv)
    expect(rs).toEqual({
      data: {},
      details: {
        args: {},
        opts: {},
        unknown: argv,
        tags: {
          _all: {},
          _opts: {},
          _unknown: argv,
          _system: {},
        },
        data: {},
      },
    })
  })

  test('option types', async () => {
    const argv = ['--boolean', '--string', 'str', '--number', '2']
    const rs = OptsOnlyCommand.parseArgv(argv)
    const vals = {
      boolean: true,
      string: 'str',
      number: 2,
    }
    expect(rs).toEqual({
      data: vals,
      details: {
        args: {},
        opts: vals,
        unknown: [],
        tags: {
          _all: vals,
          _opts: vals,
          _system: {},
        },
        data: {},
      },
    })
  })

  test('args & options', async () => {
    const argv = ['--boolean', '--string', 'str', '--number', '2']
    const rs = ArgAndOptsCommand.parseArgv(argv)
    const vals = {
      boolean: true,
      string: 'str',
      number: 2,
    }
    expect(rs).toEqual({
      data: vals,
      details: {
        args: {},
        opts: vals,
        unknown: [],
        tags: {
          _all: vals,
          _args: {},
          _opts: vals,
          _system: {},
        },
        data: {},
      },
    })
  })

  test('multiple arguments', async () => {
    const names = ['biggie', 'tupac', 'kendrick']
    const rs = MultiArgsCommand.parseArgv(names)
    const vals = {
      name: names,
    }
    expect(rs).toEqual({
      data: vals,
      details: {
        args: vals,
        opts: {},
        unknown: [],
        tags: {
          _all: vals,
          _args: vals,
          _opts: {},
          _system: {},
        },
        data: {},
      },
    })
  })
})

describe('validateOptions', async () => {
  test('no validation', async () => {
    const vals = {}
    const rs = await ArgAndOptsCommand.validateOptions(vals)
    expect(rs).toEqual(true)
  })

  test('validation no values', async () => {
    const vals = {}
    const rs = await OptsOnlyCommand.validateOptions(vals)
    expect(rs).toEqual(true)
  })

  test('validation with values', async () => {
    const vals = {
      boolean: true,
      string: 'str',
      number: 2,
    }
    const rs = await OptsOnlyCommand.validateOptions(vals)
    expect(rs).toEqual(true)
  })

  test('validation with values [failed]', async () => {
    vi.spyOn(process, 'exit').mockImplementationOnce((() => {}) as any)
    const vals = {
      boolean: 'str',
      string: true,
      number: '4',
    }
    try {
      await OptsOnlyCommand.validateOptions(vals)
    } catch (e) {
      expect(e).toBe("Invalid value for 'boolean': str")
      expect(process.exit).toBeCalledWith(0)
    }
  })
})
