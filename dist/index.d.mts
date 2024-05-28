import * as chalk from 'chalk';
import { PromptConstructor, Prompt } from '@types/inquirer';

type CommandData = {
    [key: string]: any;
};
interface CommandProps {
    name: string;
    command?: string;
    description?: string;
    version?: string;
    arguments?: CommandArgumentProps | CommandArgumentProps[];
    options?: CommandOptionProps[];
    flags?: CommandFlagProps[];
    prompts?: CommandPromptProps[];
    subcommands?: Array<CommandProps | Command | typeof Command> | {
        [key: string]: CommandProps | Command | typeof Command;
    };
    promptTypes?: {
        [key: string]: PromptConstructor;
    };
    autoHelp?: boolean;
    autoVersion?: boolean;
    silent?: boolean;
    fun?: boolean;
    transform?: (data: CommandData) => Promise<CommandData>;
    action?: (data: CommandData, details: CommandData) => Promise<any | void>;
}
interface CommandBaseParameterProps {
    name: string;
    description?: string;
    required?: boolean;
    tags?: string | string[];
    validate?: (v: any) => Promise<boolean>;
}
interface CommandArgumentProps extends CommandBaseParameterProps {
    type?: any;
    multiple?: boolean;
    default?: any;
}
interface CommandOptionProps extends CommandBaseParameterProps {
    alias?: string;
    type?: any;
    multiple?: boolean;
    global?: boolean;
    default?: any;
    itemName?: string;
}
interface CommandFlagProps extends CommandBaseParameterProps {
    alias?: string;
    global?: boolean;
    default?: boolean;
}
interface CommandPromptProps {
    name: string;
    type?: string;
    label: string;
    options?: any[] | ((answers: any) => any[]);
    default?: any;
    tags?: string | string[];
    validate?: (v: any) => Promise<boolean>;
    transform?: (v: any) => any;
    when?: (answers: any) => boolean;
    force?: boolean;
    _overrides?: {
        [key: string]: any;
    };
}

/**
 * Command class
 */
declare class Command {
    __type: string;
    name: string;
    description?: string;
    version?: string;
    protected _command: string;
    get command(): string;
    set command(val: string);
    arguments: CommandArgumentProps | CommandArgumentProps[];
    options: CommandOptionProps[];
    flags: CommandFlagProps[];
    prompts: CommandPromptProps[];
    subcommands: Array<CommandProps | Command | typeof Command> | {
        [key: string]: CommandProps | Command | typeof Command;
    };
    promptTypes: {
        [key: string]: PromptConstructor;
    };
    autoHelp: boolean;
    autoVersion: boolean;
    silent: boolean;
    fun: boolean;
    protected _arguments: any[];
    protected _options: any[];
    protected _flags: any[];
    protected _prompts: Prompt;
    protected _subcommands: {};
    protected _definitions: any[];
    protected _argumentStrategy: string;
    /**
     * Constructor
     *
     * @param {CommandProps} cfg  Command configuration
     * @memberof Command
     */
    constructor(cfg?: CommandProps);
    /**
     * Apply the provided configuration to the command
     *
     * @param   {CommandPromptProps}  cfg     Command configuration
     * @returns {Command}                     Command instance (for chainability)
     * @memberof Command
     */
    initialize(cfg?: CommandProps | {}): this;
    /**
     * Prepare the command by registering arguments, options, flags, subcommands and prompts
     *
     * @memberof Command
     */
    prepare(): void;
    /**
     * Assemble the command-line arguments
     *
     * @returns {array} Array of argument definitions
     * @memberof Command
     */
    assemble(): any[];
    /**
     * Parse the command-line arguments
     *
     * @param   {array}   argv  Argv stack
     * @returns {Command}       Command instance (for chainability)
     * @memberof Command
     */
    parse(argv?: string[]): {
        data: any;
        details: {
            args: any;
            opts: any;
            flags: any;
            subcommand: any;
            unknown: any;
            tags: any;
        };
    };
    /**
     * Parse positional arguments
     *
     * @param {object} options  configuration options
     * @returns
     * @memberof Command
     */
    parsePositionalArgs({ data, args, unknown }: {
        data?: {};
        args?: {};
        unknown?: any[];
    }): {
        data: {};
        unknown: any[];
    };
    /**
     * Run the command
     *
     * @param argv array of command-line arguments
     * @returns
     * @memberof Command
     * @async
     */
    run(argv?: string[]): Promise<any>;
    /**
     * Transform the data before running the action
     *
     * @param {object} data   data to be transformed
     * @returns {object}      transformed data
     * @memberof Command
     * @async
     */
    transform: (data: any) => Promise<any>;
    /**
     *
     * @param {object} data     data object
     * @param {object} details  details object
     * @returns
     * @memberof Command
     * @async
     */
    action(data: any, details: any): Promise<{
        data: any;
        details: any;
    }>;
    /**
     * Add an argument
     *
     * @param {object} arg  Argument object
     * @returns {Command}   Command instance (for chainability)
     * @memberof Command
     */
    argument({ name, type: dataType, description, required, multiple, default: defaultValue, tags, validate, }: CommandArgumentProps): this;
    /**
     * Add an option
     *
     * @param {object} opt  Option object
     * @returns {Command}   Command instance (for chainability)
     * @memberof Command
     */
    option({ name, alias, type: dataType, description, required, multiple, global, default: defaultValue, itemName, tags, validate, }: CommandOptionProps): this;
    /**
     * Add a flag
     *
     * @param {object} flag  Flag object
     * @returns {Command}    Command instance (for chainability)
     * @memberof Command
     */
    flag({ name, alias, description, required, global, default: defaultValue, tags, validate, }: CommandFlagProps): this;
    /**
     * Add a prompt
     *
     * @param {object} prompt  Prompt object
     * @returns {Command}      Command instance (for chainability)
     * @memberof Command
     */
    prompt({ name, type, label, options, default: defaultValue, tags, validate, transform, when, force, _overrides, }: CommandPromptProps): this;
    /**
     * Add a subcommand
     *
     * @param {object} cmd   Subcommand object
     * @param {string} name  Subcommand name
     * @returns {Command}    Command instance (for chainability)
     * @memberof Command
     */
    subcommand(cmd: CommandProps | Command | typeof Command, name?: string): this;
    /**
     * Apply a tag to the passed option or argument
     *
     * @param {object} obj  arg/opt object
     * @param {string} tag  tag to be applied
     * @returns {object}    updated arg/opt object
     * @memberof Command
     */
    tag(obj: any, tag: string): any;
    /**
     * Register auto flags
     *
     * @memberof Command
     */
    registerAutoFlags(): void;
    /**
     * Parse a data type
     *
     * @param {string} dataType  Data type to parse
     * @returns {function}       Parsed data type
     * @memberof Command
     */
    parseDataType(dataType: any): any;
    /**
     * Validate any arguments, options or flags that have a `validate` property
     *
     * @param {object} data   Data object to validate against
     * @returns {boolean}     True if successful
     * @memberof Command
     * @async
     */
    validateOptions(data: any): Promise<true | void>;
    /**
     * Get a subcommand by name
     *
     * @param {string} name  Argument name
     * @returns {object}     Argument object
     * @memberof Command
     */
    getSubcommand(name: any): any;
    /**
     * Run a subcommand
     *
     * @param {string} name  Subcommand name
     * @param {array} argv   Subcommand arguments
     * @returns
     * @memberof Command
     */
    runSubcommand(name: any, argv: any): any;
    /**
     * Run the prompts
     *
     * @param {object} data  Data object
     * @returns
     * @memberof Command
     * @async
     */
    runPrompts(data?: {}): Promise<any>;
    /**
     * Internal method to transform the data
     *
     * @param {object} data   Data object
     * @returns {object}      Transformed data object
     * @memberof Command
     * @async
     * @protected
     */
    protected transformFn(data: any): Promise<any>;
    /**
     * Generate help text for the command
     *
     * @param {object} cfg  Configuration options
     * @returns {string}    Help text
     * @memberof Command
     */
    generateHelp(cfg?: {}): string;
    /**
     * Output help text
     *
     * @memberof Command
     */
    outputHelp(): void;
    /**
     * Style the output
     *
     * @param {string} styles  Styles to apply
     * @returns {function}     Chalk function
     * @memberof Command
     */
    style(styles: any): chalk.ChalkInstance;
    /**
     * Log output
     *
     * @param {any} msg   Message to log
     * @param {object} opts  Options
     * @memberof Command
     */
    log(msg: any, opts?: {}): void;
    /**
     * Log output
     *
     * @param {any} msg   Message to log
     * @param {object} opts  Options
     * @memberof Command
     * @alias log
     */
    out: (msg: any, opts?: {}) => void;
    /**
     * Log an error
     *
     * @param {any} err   Error object
     * @param {any} msg   Message to log
     * @param {boolean} exit  Exit the process
     * @memberof Command
     */
    error(err?: any, msg?: any, exit?: boolean): void;
    /**
     * Log a spacer
     *
     * @memberof Command
     */
    spacer: () => void;
    /**
     * Rainbowify text
     *
     * @param {string} text   Text to rainbowify
     * @returns {string}      Rainbowified text
     * @memberof Command
     */
    rainbow: (text: string) => string;
    /**
     * Log a heading
     *
     * @param {string} msg   Message to log
     * @param {object} opts  Options
     * @memberof Command
     */
    heading(msg: any, opts?: {}): void;
}

export { Command, type CommandArgumentProps, type CommandBaseParameterProps, type CommandFlagProps, type CommandOptionProps, type CommandPromptProps, type CommandProps };
