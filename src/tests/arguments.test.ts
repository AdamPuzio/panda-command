import { describe, test, expect } from 'vitest'
import { Command } from '../command'

describe('arguments', async () => {
  test('single argument', async () => {
    const argv = ['foo', 'bar']
    const rs = new Command({
      name: 'single-argument',
      arguments: {
        name: 'name',
      },
    }).parse(argv)
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

  test('multiple arguments', async () => {
    const argv = ['foo', 'bar', 'baz']
    const rs = new Command({
      name: 'multiple-arguments',

      arguments: {
        name: 'name',
        multiple: true,
      },
    }).parse(argv)
    expect(rs).toEqual({
      data: { name: ['foo', 'bar', 'baz'] },
      details: {
        args: { name: ['foo', 'bar', 'baz'] },
        opts: {},
        flags: {},
        subcommand: null,
        unknown: [],
        tags: {},
      },
    })
  })

  test('positional arguments', async () => {
    const argv = ['John Doe', '25']
    const rs = new Command({
      name: 'positional-arguments',
      arguments: [
        {
          name: 'name',
          required: true,
        },
        {
          name: 'age',
        },
      ],
    }).parse(argv)
    expect(rs).toEqual({
      data: { name: 'John Doe', age: '25' },
      details: {
        args: { name: 'John Doe', age: '25' },
        opts: {},
        flags: {},
        subcommand: null,
        unknown: [],
        tags: {},
      },
    })
  })

  test('positional arguments with type', async () => {
    const argv = ['John Doe', '25']
    const rs = new Command({
      name: 'positional-arguments-with-type',
      arguments: [
        {
          name: 'name',
          required: true,
        },
        {
          name: 'age',
          type: Number,
        },
      ],
    }).parse(argv)
    expect(rs).toEqual({
      data: { name: 'John Doe', age: 25 },
      details: {
        args: { name: 'John Doe', age: 25 },
        opts: {},
        flags: {},
        subcommand: null,
        unknown: [],
        tags: {},
      },
    })
  })

  test('args and subcommands - fail', async () => {
    const argv = ['John Doe', '25']
    const rs = new Command({
      name: 'args-and-subcommands-fail',
      arguments: { name: 'name' },
      subcommands: [{ name: 'sub' }],
    })
    expect(() => rs.parse(argv)).toThrowError(
      /^Cannot use both arguments and subcommands$/,
    )
  })
})
