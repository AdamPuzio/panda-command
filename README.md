# Command

`@panda/command` is a fully-featured library for creating commands and CLIs with minimal effort. 

Panda thinks of commands as a way to collect data from a user (via passed parameters and/or prompts) and execute a task or series of tasks based upon that data.

For the full documentation, visit the [`@panda/command` documentation website](https://adampuzio.github.io/panda-docs/docs/entities/command/overview)

## Highlights

- Customizable arguments, options and flags
- Prompts that can be tied to passed parameters
- Subcommand support
- Data validation and formatting
- Custom output styling and positioning
- ESM/CommonJS/Typescript compatible
- Automated help generation and parameter

## Installation

### Install Using `@panda/command`

If you _just_ want to use `Command`, you can install it directly from `@panda/command`:

```bash
npm install @panda/command
```

## Setup

### Include

```js
// ESM
import { Command } from '@panda/command'
// CommonJS
const { Command } = require('@panda/command')
```

### Create

Commands can be created either by extending the `Command` class or creating a new instance of it.

#### Instantiate Command

The most common method is to create a new instance:

```js
import { Command } from '@panda/command'

const cmd = new Command({
  name: 'foo:create',
  action: async (data, details) => {}
})
```

#### Extend Command

If you plan to use your command as a class that can be extended later on, extend the `Command` class:

```js
import { Command } from '@panda/command'

export const FooCreateCommand extends Command {
  name = 'foo:create'

  async action (data, details) {}
}
```

Even as an uninstantiated class, it can be imported into other commands as a subcommand. 

### Run

Running a Command is as easy as calling the `run()` method:

```js
import { Command } from '@panda/command'

const cmd = new Command({
  name: 'foo:create',
  action: async (data, details) => {}
}).run()
```

> Note: The `run()` method should only be added to the top-level command that will directly be called.

## Run Via Script

There are several methods to run a script that contains a command:

1. Call the script directly (example: `./my-script.js`)
2. Call the script via `node` (example: `node my-script.js`)
3. Add the script to your `package.json` into `scripts` and run `npm run <script>`
4. Add the script to your `package.json` into `bin` and run `npm link` (or install globally) to run as an independent command

When running a script directly (without using NPM or Node), be sure to include the following in your script:

```
#!/usr/bin/env node
```

## Syntax

`<command> [arguments|options|flags] [subcommand] [subcommand-parameters]`

A command is called by a specific name, followed by a series of parameters. These parameters can be in the form of arguments, options, or flags. Additionally, a command can have subcommands.

* parameters
  * arguments
  * options (key=value)
  * flags
  * subcommands

Arguments, options and flags can be called in any order, but subcommands must be called after any base parameters. Any parameters called after a subcommand are considered subcommand parameters.

## Usage

```js
import { Command } from '@panda/command'

new Command({
  // required: name
  name: 'create-foo',
  // used as the command called when it's a subcommand
  command: 'foo:create',
  // used in help menu
  description: 'Create a new Foo',
  // application or command version
  version: '1.4.7',
  // argument handler
  //   if object, 'name' data key contains a single or multiple values
  //   if array, data keys are applied as positional arguments
  arguments: {
    name: 'name'
  },
  // list of options to parse
  options: [],
  // list of flags to parse
  flags: [],
  // list of subcommands
  //   if array, use the `command` property as the subcommand
  //   if object, use the key as the subcommand
  subcommands: [],
  // list of prompts to ask user
  prompts: [],
  // list of custom prompt types available to `prompts`
  promptTypes: {},
  // flag to automatically generate and display help menu on --help
  autoHelp: true,
  // flag to automatically output version on --version
  autoVersion: true,
  // flag to suppress logging output
  silent: false,
  // method to transform data before reaching action
  transform: async (data) => {
    data.type = 'based'
    return data
  },
  action: async (data, details) => {
    // perform your actions
  }
})
```

## Properties

| Property                      | Required | Type(s)         | Default  | Description |
| ----------------------------- | :------: | --------------- | -------- | ----------- |
| [`name`](#name)               | Y        | string          |          | Command name |
| [`command`](#command)         | N        | string          |          | Subcommand name |
| [`description`](#description) | N        | string          |          | Command description |
| [`version`](#version)         | N        | string          |          | Command version |
| [`arguments`](#arguments)     | N        | object/array    |          | Argument handler |
| [`options`](#options)         | N        | array           |          | List of options |
| [`flags`](#flags)             | N        | array           |          | List of flags |
| [`prompts`](#prompts)         | N        | array           |          | List of prompts |
| [`subcommands`](#subcommands) | N        | array/object    |          | List of subcommands |
| [`promptTypes`](#promptTypes) | N        | object          |          | List of custom prompt types |
| [`autoHelp`](#autoHelp)       | N        | boolean         | `false`  | Toggle for automated help menu |
| [`autoVersion`](#autoVersion) | N        | boolean         | `false`  | Toggle for automated version output |
| [`silent`](#silent)           | N        | boolean         | `false`  | Toggle for output suppression |
| [`transform`](#transform)     | N        | function        |          | Method to transform data |
| [`action`](#action)           | N        | function        |          | Method to process data |

```
name: string
command?: string
description?: string
version?: string
arguments?: CommandArgumentProps | CommandArgumentProps[]
options?: CommandOptionProps[]
flags?: CommandFlagProps[]
prompts?: CommandPromptProps[]
subcommands?: 
  Array<CommandProps | Command | typeof Command> 
  | {[key:string]: CommandProps | Command | typeof Command}
promptTypes?: {[key:string]: PromptConstructor}
autoHelp?: boolean
autoVersion?: boolean
silent?: boolean
transform?: (data: CommandData) => Promise<CommandData>
action?: (data: CommandData, details: CommandData) => Promise<any | void>
```

### `name`

(required) The name of the command. Doubles as the subcommand if `command` is not set. 

See [Properties.name](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/name) for more information

### `command`

The callable command if set as a subcommand. Defaults to value of `name`.

See [Properties.command](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/command) for more information

### `description`

Description of the command. Shows up in the `--help` menu.

See [Properties.description](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/description) for more information

### `version`

Semantic version of the command. Shows up when user calls the command with the `--version` flag. Usually only set on primary command, but can be set on any command. 

See [Properties.version](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/version) for more information

### `arguments`

Handler for unnamed parameters. Can be an object or an array. Does not work with `subcommands`.

See [Properties.arguments](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/arguments) for more information

### `options`

List of named parameters with values. 

See [Properties.options](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/options) for more information

### `flags`

List of flag parameters (named with no value).

See [Properties.flags](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/flags) for more information

### `prompts`

List of questions to ask the user. Can be tied to other parameters.

See [Properties.prompts](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/prompts) for more information

### `subcommands`

List of subcommands that can be called as an argument. Does not work with `arguments`.

See [Properties.subcommands](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/subcommands) for more information

### `promptTypes`

List of plugins to create new types of prompts.

See [Properties.promptTypes](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/prompt-types) for more information

### `autoHelp`

Toggle for automated `--help` flag.

See [Properties.autoHelp](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/auto-help) for more information

### `autoVersion`

Toggle for automated `--version` flag.

See [Properties.autoVersion](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/auto-version) for more information

### `silent`

Toggle for output functions like `log()`, `out()`, `error()`, `heading()` and `spacer()`.

See [Properties.silent](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/silent) for more information

### `transform`

Method to transform data before calling `action()`. The `data` object is passed and must be returned with the final values.

See [Properties.transform](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/transform) for more information

### `action`

Method called to process data. Both `data` and `details` objects are passed.

See [Properties.action](https://adampuzio.github.io/panda-docs/docs/entities/command/properties/action) for more information

## Scripts

### Build

- **dev** `npm run dev` - Watch `./src` directory and build on file change to `./dist` for ESM & CommonJS (with types)
- **build** `npm run build` - Build from `./src` to `./dist` for ESM & CommonJS (with types)
- **build:cjs** `npm run build:cjs` - Build from `./src` to `./dist` for CommonJS (with types)
- **build:esm** `npm run build:esm` - Build from `./src` to `./dist` for ESM (with types)

### Lint

- **lint** `npm run lint` - Lint check all files in `./src`
- **lint:fix** `npm run lint:fix` - Lint and fix all files in `./src`
- **lint:prettier** `npm run lint:prettier` - Check styling for all files in `./src`
- **lint:prettier:fix** `npm run lint:prettier:fix` - Fix styling for all files in `./src`
- **lint:prettier:ci** `npm run lint:prettier:ci` - Continuous integration style check

### Test

- **test** `npm test` - Run test suite and lint/style
- **test:vitest** `npm run test:vitest` - Run test suite
- **test:watch** `npm run test:watch` - Run test suite in watch mode

## Included Libraries

- [`command-line-args`](https://github.com/75lb/command-line-args) for parsing arguments
- [`chalk`](https://github.com/chalk/chalk) for terminal coloring
- [`inquirer`](https://www.npmjs.com/package/inquirer) for prompts
- [`cliui`](https://github.com/yargs/cliui) for ui columns
