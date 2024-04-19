# Command

`@panda/command` is a class for generating terminal commands in a simple and straight-forward way. 

It is part of the [Panda](https://github.com/AdamPuzio/panda) entity catalog, but can be used on its own as an independent class. It uses a few common libraries under the hood and bundles them into a format that is easy to learn and use.

## Installation

To install just the Command class, run the following:

```bash
npm i @panda/command
```

> Note: The `panda` library includes `@panda/command` by default, so if you are using that there is no need to manually install

## Usage

Import or require the library:

```js
// ESM/Typescript
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


### Properties

| Key               | Type         | Req | Description |
| ----------------- | ------------ | --- | ----------- |
| name              | string       | Y   | Name |
| command           | string       | N   | Command (used to enable subcommands) |
| title             | string       | N   | Title |
| description       | string       | N   | Description to be used in help |
| arguments         | object       | N   | Argument parsing definition |
| options           | array        | N   | List of options to be parsed |
| help              | string       | N   | Text to output in `--help` |
| additionalHelp    | string       | N   | Additional text to output in `--help` |
| hidden            | boolean      | N   | Hides the command from `--help` if `true` |
| version           | string       | N   | Semver version of the command |
| subcommands       | array|object | N   | List of subcommands to be parsed |
| prompts           | array        | N   | List of prompts to run |
| promptTypes       | object       | N   | Key/value list of prompt types available to `prompts` |
| transform         | function     | N   | Method to transform response data from prompts |
| action            | function     | N   | Action method to run when command is called |

```js
new Command({
  name: 'create-foo',
  // used as the command called when it's a subcommand
  command: 'foo:create',
  // used as the help menu title
  title: 'Create Foo',
  // used in help menu
  description: 'Create a new Foo',
  // argument handler
  arguments: {
    name: 'name'
  },
  // list of options to parse
  options: [],
  // flag to be hidden from help menu
  hidden: false,
  // list of subcommands
  //   if array, use the `command` property as the subcommand
  //   if object, use the key as the subcommand
  subcommands: [],
  // list of prompts to ask user
  prompts: [],
  // list of custom prompt types available to `prompts`
  promptTypes: {},
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

### Experimental Properties

| Key               | Type         | Req | Description |
| ----------------- | ------------ | --- | ----------- |
| usage             | string       | N   | Usage string to be parsed into Options |

#### usage property

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

### Arguments

| Key           | Type         | Req | Description |
| ------------- | ------------ | --- | ----------- |
| name          | string       | Y   | Argument name |
| type          | function     | N   | Argument type (String, Number, Boolean) or a function (default: `String`) |
| alias         | string       | N   | getopt-style short option name (single character) |
| multiple      | boolean      | N   | Flag for declaring the possibility of multiple values (default: `false`) |
| lazyMultiple  | boolean      | N   | Identical to `multiple` but with greedy parsing disabled (default: `false`) |
| defaultOption | boolean      | N   | Flag to identify where unaccounted values go (default: `false`) |
| defaultValue  | any          | N   | Initial option value |
| group         | string|array | N   | Category name to group by |
| subcommand    | boolean      | N   | Flag to declare argument uses subcommands (default: `false`) |
| validate      | function     | N   | Function to validate passed value against |

> Note: there can be only one argument parameter passed in and NO argument can be passed if using `subcommands`

```js
const MyCommand = new Command({
  command: 'my-command',
  arguments: {
    name: 'value',
    type: String,
    multiple: true,
  }
})
```

```bash
my-command foo bar
```

### Options

| Key           | Type         | Req | Description |
| ------------- | ------------ | --- | ----------- |
| name          | string       | Y   | Option name |
| type          | function     | N   | Option type as a type (String, Number, Boolean) or a function (default: `String`) |
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
    }
  ]
})
```

```bash
my-command --file src/file.txt
```

### Prompts

Users can be prompted to answer questions to get data. The [Inquirer](https://www.npmjs.com/package/inquirer) library is used to generate these prompts.

Both `arguments` and `options` can be used to allow the end user to bypass specific prompts by providing a value in the command. The `name` property must match between the `options` or `arguments` and the `prompts` item.

Additionally, the `promptTypes` property is used to add in custom prompt types and the `transform` property is used to update values before it sent to `action`.

More details on prompt types and how they work can be found [here](https://www.npmjs.com/package/inquirer#objects)

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

Notes:
- Arguments and options used to provide a value for a prompt WILL NOT trigger the prompt validation if a value is passed, so option validation is recommended, especially in the case of a list

### Subcommands

The `subcommands` property accepts an array of other Commands. It will read them and apply their `command` property as a subcommand to the existing Command.

### Output Methods

You can output into the terminal manually using `console` or by using the built in prompt features.

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

- `style (styles)` applies styles via an array (e.g. `['green', 'bold']`) or string (e.g. `green.bold`)
- `log (msg, opts)` outputs the `msg` string and conditionally applies styling via `opts`
- `out (msg, opts)` similar to `log()`
- `error (err, msg, exit)` outputs an error, a custom message, and conditionally stops the script
- `spacer ()` outputs an empty spacer row
- `rainbow (text)` returns the passed in text string as a rainbow
- `heading (msg, opts)` outputs a heading, which is bolded and contains spacers

## Help

By default, the `--help` option will output content showing the user how to use the command, its arguments and options, and give a list of subcommands.

By using the `help` property, you can override this to display whatever text you want. You can also use the `helpAdd` property to display additional text after the default help text generation. 

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

## Roadmap

- Parse `usage` for additional information, like `command` and `arguments`

## Included Libraries

- [`command-line-args`](https://github.com/75lb/command-line-args) for parsing arguments
- [`command-line-usage`](https://github.com/75lb/command-line-usage) for generating help docs
- [`chalk`](https://github.com/chalk/chalk) for terminal coloring
- [`inquirer`](https://www.npmjs.com/package/inquirer) for prompts
