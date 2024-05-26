# Command

`@panda/command` is a fully-featured library for creating commands and CLIs with minimal effort. 

Panda thinks of commands as a way to collect data from a user (via passed parameters and/or prompts) and execute a task or series of tasks based upon that data.

For more detailed documentation, visit the [`@panda/command` documentation website](https://adampuzio.github.io/panda-docs/docs/entities/command/overview)

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

## Under The Hood

### Process Flow

There are 2 primary methods that are invoked during a command's lifecycle, `inititalize()` and `run()`.

- `initialize()` - occurs automatically during instantiation
  - `prepare()` - converts passed properties into their usable instances
- `run()`
  - `parse()`
    - `assemble()`
  - `runPrompts()`
  - `transform()`
  - `action()`
