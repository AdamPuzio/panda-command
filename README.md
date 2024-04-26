# Command

`@panda/command` is a library for generating terminal commands in a simple and straight-forward way. 

It bundles many of your favorite terminal-based libraries together to give you a simple out-of-the-box experience when creating simple commands or full CLI utilities.

## Installation

To install the Command class in an existing project, run the following:

```bash
npm i @panda/command
```

## Usage

Import or require the library:

```js
// ESM
import { Command } from '@panda/command'

// CommonJS
const { Command } = require('@panda/command')
```

Now you're ready to create a Command:

```js
const MyCommand = new Command({
  name: 'my-command',
  options: [],
  action: async (data, details) => {
    // do your thing
  }
}).parse()
```

From here, you can run your script in 1 of 4 ways:

1. Call the script directly (example: `./my-script.js`)
2. Call the script via `node` (example: `node my-script.js`)
3. Add the script to your `package.json` into `scripts` and run `npm run <script>`
4. Add the script to your `package.json` into `bin` and run `npm link` (or install globally) to run as an independent command


## Configuration

| Property                        | Type         | Req | Description |
| ------------------------------- | ------------ | --- | ----------- |
| [`name`](#name)                 | string       | Y   | Command name |
| [`command`](#command)           | string       | N   | Terminal command to be called (used to enable subcommands) |
| [`description`](#description)   | string       | N   | Description to be used in help |
| [`version`](#version)           | string       | N   | Semver version of the command |
| [`arguments`](#arguments)       | object       | N   | Argument parsing definition |
| [`options`](#options)           | array        | N   | List of options to be parsed |
| [`subcommands`](#subcommands)   | array,object | N   | List of subcommands to be parsed |
| [`prompts`](#prompts)           | array        | N   | List of prompts to run |
| [`promptTypes`](#prompttypes)   | object       | N   | List of prompt types available to `prompts` |
| [`autoHelp`](#autohelp)         | boolean      | N   | Toggles automatic trigger of `--help` option |
| [`helpTitle`](#helptitle)       | string       | N   | Title to use in `--help` |
| [`helpText`](#helpText)         | string       | N   | Text to output in `--help` |
| [`addedHelp`](#addedhelp)       | string       | N   | Additional text to output in `--help` |
| [`hidden`](#hidden)             | boolean      | N   | Hides the command from `--help` if `true` |
| [`transform`](#transform)       | function     | N   | Method to transform response data from prompts |
| [`action`](#action)             | function     | N   | Action method to run when command is called |

```js
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
  arguments: {
    name: 'name'
  },
  // list of options to parse
  options: [],
  // list of subcommands
  //   if array, use the `command` property as the subcommand
  //   if object, use the key as the subcommand
  subcommands: [],
  // list of prompts to ask user
  prompts: [],
  // list of custom prompt types available to `prompts`
  promptTypes: {},
  // whether to automatically generate and display help menu on --help
  autoHelp: true,
  // used as the help menu title
  helpTitle: 'Create Foo',
  // replaces default help generated text
  helptText: ``,
  // additional help, like examples
  addedHelp: ``,
  // flag to be hidden from help menu
  hidden: false,
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

### `name`

(required) The identifying property of the Command.

### `command`

Provides the default command to be called when imported, usually as a subcommand.

If not explicitly set, it defaults to `name`. Can be overriden when importing via [`subcommands`](#subcommands) by specifying a new command as the key.

### `description`

Description of Command functionality.

This property displays in the `--help` option, both on the Command's help page itself, as well as on the subcommand section of its parent Command.

### `version`

The [semver](https://semver.org/) version of the Command.

### `arguments`

The `arguments` property allows you to add a catch-all for any arguments passed.

It is a single object that works similar to [`options`](#options), so arguments can be passed in either directly or via parameter. 

| Key           | Type         | Req | Description |
| ------------- | ------------ | --- | ----------- |
| name          | string       | Y   | Argument name |
| type          | function     | N   | Argument type (`String`, `Number`, `Boolean`) or a function (default: `String`) |
| alias         | string       | N   | getopt-style short option name (single character) |
| multiple      | boolean      | N   | Flag for declaring the possibility of multiple values (default: `false`) |
| lazyMultiple  | boolean      | N   | Identical to `multiple` but with greedy parsing disabled (default: `false`) |
| defaultValue  | any          | N   | Default value used when no value is passed |
| group         | string,array | N   | Category name(s) to group by |
| validate      | function     | N   | Function to validate passed value against |

```js
const MyCommand = new Command({
  command: 'my-command',
  arguments: {
    name: 'value',
    type: String,
    multiple: true,
  },
  action: async (data, details) => {
    console.log(data.value)
  }
})
```

```bash
$ my-command foo bar
['foo', 'bar']
```

Notes:

- NO `arguments` property can be passed if using `subcommands`. If both are used, it will throw an error.
- In addition to any group(s) applied via `group`, all arguments will have the `args` group applied.
- Arguments can also be passed in like options using `name` or `alias`.

### `options`

The `options` property provides a list of any options that can be passed in, along with how to process them.

| Key           | Type         | Req | Description |
| ------------- | ------------ | --- | ----------- |
| name          | string       | Y   | Option name |
| type          | function     | N   | Option type as (`String`, `Number`, `Boolean`) or a function (default: `String`) |
| alias         | string       | N   | getopt-style short option name (single character) |
| multiple      | boolean      | N   | Flag for declaring the possibility of multiple values (default: `false`) |
| lazyMultiple  | boolean      | N   | Identical to `multiple` but with greedy parsing disabled (default: `false`) |
| defaultOption | boolean      | N   | Flag to identify where unaccounted values go (default: `false`) |
| defaultValue  | any          | N   | Initial option value |
| group         | string|array | N   | Category name to group by |
| validate      | function     | N   | Function to validate passed value against |


More details on option definitions can be found [here](https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md)

```js
const MyCommand = new Command({
  name: 'my-command',
  options: [
    {
      name: 'file',
      type: String,
      alias: 'f',
      multiple: true,
    },
    {
      name: 'name',
      type: String
    },
    {
      name: 'force',
      type: Boolean,
      alias: 'F',
      defaultValue: false
    }
  ],
  action: async (data, details) => {
    console.log(data)
  }
})
```

```bash
# single file passed
$ my-command --file src/file.txt
{ file: ['src/file.txt'], force: false }

# multiple files passed
$ my-command --file src/file.txt src/alt.txt
{ file: ['src/file', 'src/alt.txt'], force: false }

# `force` alias & name
$ my-command -F -name 'Hello World'
{ name: 'Hello World', force: true }
```

Notes:

- In addition to any group(s) applied via `group`, all options will have the `opts` group applied.

### `subcommands`

The `subcommands` property accepts a list of other Commands to be run as subcommands of the current command.

Subcommands can be added in as either an array or an object.

- When added as an **array**, it will use each subcommand's `command` property as the subcommand to use.
- When added as an **object**, the key will represent the subcommand.

This provides for greater flexibility in importing commands from different places.

```js
import { Command } from '@panda/command'

const CreateCommand = new Command({
  name: 'create',
  action: () => {
    console.log('Hello!')
  }
})

export const ExampleCommand = new Command({
  name: 'example',

  subcommands: [
    CreateCommand
  ]
}).parse()

export default ExampleCommand
```

```bash
$ example create
Hello!
```

Notes:

- NO `arguments` property can be passed if using `subcommands`. If both are used, it will throw an error.

### `prompts`

List of questions to prompt the user with.

| Key           | Type         | Req | Description |
| ------------- | ------------ | --- | ----------- |
| name          | string                               | Y   | The name to apply in data |
| type          | string                               | N   | Type of the prompt (possible values: `input`, `number`, `confirm`, `list`, `rawlist`, `expand`, `checkbox`, `password`, `editor` or custom type) (default: `input`) |
| message       | string,function                      | N   | The question to display (if defined as a function, the first parameter will be the current session answers) (default: `${name}:`) |
| default       | string,number,boolean,array,function | N    | Default value(s) to use if nothing is entered, or a function that returns the default value(s) (if defined as a function, the first parameter will be the current session answers) |
| choices       | array,function                       | N    | Choices array or a function returning a choices array (if defined as a function, the first parameter will be the current session answers; array values can be simple numbers, strings, or objects containing a name (to display in list), a value (to save in the answers hash), and a short (to display after selection) properties) |
| validate      | function                             | N    | Validation function - receives the user input and answers hash (return true if the value is valid, or an error message (String) or false (default error message) otherwise) |
| filter        | function                             | N    | Filtering function - receives the user input and answers hash (return the new filtered value) |
| transformer   | function                             | N    | Transformer function - receives the user input, answers hash and option flags, and return a transformed value to display to the user (the transformation only impacts what is shown while editing, it does not modify the answers hash) |
| when          | function,boolean                     | N    | When-to-display function - receives the current user answers hash and should return true or false depending on whether or not this question should be asked |
| askAnswered   | boolean                              | N    | Force to prompt the question if the answer already exists |

Both `arguments` and `options` can be used to allow the end user to bypass specific prompts by providing a value in the command. The `name` property must match between the `options` or `arguments` and the `prompts` item.

Additionally, the [`promptTypes`](#prompttypes) property is used to add in custom prompt types and the [`transform`](#transform) property is used to update values before it sent to `action`.

More details on prompt types and how they work can be found in the [Inquirer library](https://www.npmjs.com/package/inquirer#objects).

```js
const MyCommand = new Command({
  name: 'my-command',
  options: [
    {
      name: 'linter',
      alias: 'l',
      type: String,
    }
  ],
  prompts: [
    // this prompt will always display
    {
      name: 'name',
      message: 'Name',
    },
    // this prompt will only display if `--linter` or `-l` is not passed
    {
      name: 'linter',
      type: 'list',
      message: 'Select a linter',
      choices: ['ESLint', 'JSLint', 'JSHint', 'StandardJS'],
      default: 'StandardJS',
      validate: async function(response) {
        if (['ESLint', 'JSLint', 'JSHint', 'StandardJS'].includes(response)) return true
        return false
      }
    }
  ]
})
```

Notes:
- Arguments and options used to provide a value for a prompt WILL NOT trigger the prompt validation if a value is passed, so option validation is recommended, especially in the case of a list
- If the prompt `name` contains periods, it will define a path in the data object.

### `promptTypes`

List of prompt plugins that can be used in `prompts.type`.

Prompt types can be created manually or by including existing implementations. The `inquirer` library has a list of existing plugins that can be used here.

Additional Resources:

- [List of community create prompt types](https://github.com/SBoudrias/Inquirer.js#community-prompts)
- [Documentation on creating custom prompt types](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/core)

### `autoHelp`

Flag to toggle auto-generation of the `--help` option flag. Set to `true` by default.

If set to `false`, you can still add your own help option, but it will require a call to the `renderHelp()` method to output.

### `helpTitle`

A title to output in the `--help` menu. Defaults to `Command: ${command}`.

### `helpText`

Text to output in the `--help` menu instead of dynamically generating it.

### `addedHelp`

Text to append to the `--help` menu.

Use this if you want to auto-generate the help text, but you want to add additional information, such as examples.

### `hidden`

Flag to hide the current Command from displaying in `--help` menus of parent Command(s).

### `transform`

Transformation method to update `data` before it is sent to `action()`.

The lone parameter is `data`, which is an object containing all processed values. Return the updated data to be sent to `action()` as the `data` parameter.

```js
const MyCommand = new Command({
  name: 'my-command',
  options: [
    {
      name: 'linter',
      alias: 'l',
      type: String,
    }
  ],
  prompts: [
    {
      name: 'linter',
      type: 'list',
      message: 'Select a linter',
      choices: ['ESLint', 'JSLint', 'JSHint', 'StandardJS'],
      default: 'StandardJS',
      validate: async function(response) {
        if (['ESLint', 'JSLint', 'JSHint', 'StandardJS'].includes(response)) return true
        return false
      }
    }
  ],
  transform: async (data) => {
    data._foo = 'bar'
    return data
  }
})
```

### `action`

Method providing all data and information processed.

There are 2 variables passed:
- `data` - the final data object
- `details` - an object with a full list of properties parsed:
  - `details.args` - data output for just `arguments`
  - `details.opts` - data output for just `options`
  - `details.unknown` - array of unknown parsed args
  - `details.tags` - object of data parsed by specific tags
  - `details.data` - output of full data

## Experimental Properties

| Key               | Type         | Req | Description |
| ----------------- | ------------ | --- | ----------- |
| usage             | string       | N   | Usage string to be parsed into Options |

### `usage`

Instead of manually adding options to the `options` property, you can instead use the `usage` property, which is a string that will be parsed to automatically generate your options.

Example:
```js
const Test = new Command({
  name: 'foo',
  usage: `
  Usage: foo <name> [OPTIONS]
  Options:
    --debug STRING                    Run debug mode
    --log-level STRING                Set the log level
    --log-format STRING               Set the logging output format
    -v, --version BOOLEAN             Show version
    --help BOOLEAN                    Show this help
  `
})
```

## Output Methods

`@panda/command` provides a list of output methods to use instead of/in addition to using `console`:

- `style (styles)` applies styles via an array (e.g. `['green', 'bold']`) or string (e.g. `green.bold`)
- `log (msg, opts)` outputs the `msg` string and conditionally applies styling via `opts`
- `out (msg, opts)` similar to `log()`
- `error (err, msg, exit)` outputs an error, a custom message, and conditionally stops the script
- `spacer ()` outputs an empty spacer row
- `rainbow (text)` returns the passed in text string as a rainbow
- `heading (msg, opts)` outputs a heading, which is bolded and contains spacers

```js
const MyCommand = new Command({
  name: 'my-command',
  action: async function (data, details) {
    // will output a heading in bold with spacers
    this.heading('Example command output')
    // a simple output
    this.out('normal text')
    // text output bolded and in blue
    this.out('colorful text', { styles: ['blue', 'bold'] })
    // a spacer line in the console
    this.spacer()
    // outputs a line of text in rainbow
    this.out(this.rainbow('Rainbow sentence that goes on and on'))
    this.spacer()
    try {
      throw new Error('Example error')
    } catch (e) {
      // outputs an error and exits the console
      this.error(e, 'Example error message')
    }
  }
})
```

## Built-in Functionality

### Help Menu

By default, the `--help` option will output content showing the user how to use the command, its arguments and options, and give a list of subcommands.

By using the [`helpText`](#helptext) property, you can override this to display whatever text you want. You can also use the [`addedHelp`](#addedhelp) property to display additional text after the default help text generation. 

## Examples

```js
const MyCommand = new Command({
  name: 'my-command',
  argument: {
    name: 'name'
  },
  options: [{
    name: 'tags',
    alias: 't',
    type: String,
    multiple: true
  }, {
    name: 'force',
    alias: 'f',
    type: Boolean
  }, {
    name: 'execute',
    alias: 'x',
    type: Boolean
  }],
  action: async function (data, details) {
    this.heading('Example Command')
    this.out({ data, details })
  }
})
```

```bash
my-command foo --tags Universal Item "Item Ref" -fx
```

## Notes

### Running Commands with NPM

If you have set up your command as a `script` in `package.json` and are running it using `npm run <command>`, you must add an additional `--` before your options:

package.json
```json
{
  "name": "example-lib",
  ...
  "scripts": {
    "my-command": "node bin/my-command.js"
  }
}
```

bin/my-command.js
```bash
npm run my-command -- --debug
```
### Running Scripts Directly

When running a script directly (without using NPM or Node), be sure to include the following in your script:

```
#!/usr/bin/env node
```

## Scripts

### Build

- **build** `npm run build` - Build from `./src` to `./dist` for ESM & CommonJS (with types)
- **build:cjs** `npm run build:cjs` - Build from `./src` to `./dist` for CommonJS (with types)
- **build:esm** `npm run build:esm` - Build from `./src` to `./dist` for ESM (with types)
- **watch** `npm run watch` - Watch `./src` directory and build on file change to `./dist` for ESM & CommonJS (with types)

### Lint

- **lint** `npm run lint` - Lint all files in `./src`
- **lint:fix** `npm run lint:fix` - Lint and fix all files in `./src`
- **lint:prettier** `npm run lint:prettier` - Fix styling for all files in `./src`
- **lint:prettier:ci** `npm run lint:prettier:ci` - CI style check

### Test

- **test** `npm test` - Run tests
- **test:coverage** `npm run test:coverage` - Run tests with coverage information

## Roadmap

- Create scaffold to generate a brand new CLI project
- Apply automatic option for `--version`
- Parse `usage` for additional information, like `command` and `arguments`
- Create `CommandCenter` as a way to create a primary bin file

## Included Libraries

- [`command-line-args`](https://github.com/75lb/command-line-args) for parsing arguments
- [`command-line-usage`](https://github.com/75lb/command-line-usage) for generating help docs
- [`chalk`](https://github.com/chalk/chalk) for terminal coloring
- [`inquirer`](https://www.npmjs.com/package/inquirer) for prompts
