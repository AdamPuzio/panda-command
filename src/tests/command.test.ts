import { describe, test, expect } from 'vitest'

import {
  BasicCommand,
  // OptsOnlyCommand,
  // ArgAndOptsCommand,
  // MultiArgsCommand,
} from './examples/commands'

describe('parseArgv', async () => {
  test('basic', async () => {
    const argv = ['foo', 'bar']
    const rs = BasicCommand.parse(argv)
    expect(rs).toEqual({
      data: { name: 'foo' },
      details: {
        args: { name: 'foo' },
        opts: {},
        flags: {},
        subcommand: null,
        unknown: ['bar'],
        tags: {},
      },
    })
  })
})
