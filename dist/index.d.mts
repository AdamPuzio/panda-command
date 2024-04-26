import * as chalk from 'chalk';

interface CommandInterface {
    name: string;
    command?: string;
    description?: string;
    arguments?: CommandArgumentInterface;
    options?: CommandOptionInterface[];
    helpTitle?: string;
    helpText?: string;
    helpAdd?: string;
    hidden?: boolean;
    usage?: string;
    version?: string | boolean;
    subcommands?: any[] | {
        [k: string]: any;
    };
    prompts?: any[];
    promptTypes?: {
        [key: string]: any;
    };
    fun?: boolean;
    autoHelp?: boolean;
    silent?: boolean;
    action?: (args?: any, opts?: any, all?: any) => Promise<void | any>;
}
interface CommandArgumentInterface {
    name: string;
    subcommand?: boolean;
    required?: boolean;
    defaultOption?: boolean;
    multiple?: boolean;
    group?: string | string[];
    validate?: (v: any) => Promise<boolean>;
}
interface CommandOptionInterface {
    name: string;
    type: any;
    alias?: string;
    description?: string;
    group?: string | string[];
    validate?: (v: any) => Promise<boolean>;
}

/**
 * Command class
 */
declare class Command {
    name: string;
    command?: string;
    description?: string;
    version?: string;
    helpTitle?: string;
    helpText: string;
    addedHelp: string;
    arguments: CommandArgumentInterface;
    options: CommandOptionInterface[];
    subcommands: any;
    prompts: any[];
    promptTypes: {};
    fun: boolean;
    silent: boolean;
    hidden: boolean;
    autoHelp: boolean;
    _arguments: any[];
    _options: any[];
    _commandStack: any[];
    _subcommands: {};
    _type: string;
    /**
     * Command constructor
     *
     * @param {object} cfg  Configuration object
     * @returns {Command} Command instance (for chainability)
     */
    constructor(cfg: CommandInterface);
    /**
     * Initialization method (called by constructor)
     *
     * @param {object} cfg  Configuration object
     * @returns {Command}   Command instance (for chainability)
     */
    init(cfg: CommandInterface): this;
    /**
     * Parse the command-line arguments
     *
     * @param {array} argv  Argv stack
     * @returns {Command}   Command instance (for chainability)
     */
    parse(argv?: string[]): Promise<any>;
    /**
     * Parse argv
     *
     * @param {array} argv  argv array
     * @returns {object}    object containing data & details
     */
    parseArgv(argv?: string[]): {
        data: any;
        details: {
            args: any;
            opts: any;
            unknown: any;
            tags: any;
            data: {};
        };
    };
    /**
     * Validate any arguments or options that have a `validate` property
     *
     * @param {object} data   Data object to validate against
     * @returns {boolean}     True if successful
     */
    validateOptions(data: any): Promise<true | void>;
    /**
     * Apply a tag to the passed option or argument
     *
     * @param {object} obj  arg/opt object
     * @param {string} tag  tag to be applied
     * @returns {object}    updated arg/opt object
     */
    tag(obj: any, tag: string): any;
    /**
     * Add an argument
     *
     * @param {object} arg  Argument object
     * @returns {Command}   Command instance (for chainability)
     */
    argument(arg: CommandArgumentInterface): this;
    /**
     * Add an option
     *
     * @param {object} opt  Option object
     * @returns {Command}   Command instance (for chainability)
     */
    option(opt: CommandOptionInterface): this;
    /**
     * Add a subcommand
     *
     * @param {Command} command Subcommand instance
     * @returns {Command} Command instance (for chainability)
     */
    subcommand(command: Command, name?: any): this;
    /**
     * Retrieve the list of commands
     *
     * @returns {array}   Array of commands in command stack
     */
    getCommandStack(): any[];
    transform: (data: any) => Promise<any>;
    /**
     * Method to trigger once processed
     *
     * @param {object} data       raw data object
     * @param {object} details    complete object of parsed data
     */
    action(data: any, details: any): Promise<void>;
    /**
     * Generate help text
     */
    generateHelp(): any;
    /**
     * Output help text and exit
     */
    renderHelp(): void;
    style(styles: any): chalk.ChalkInstance;
    log(msg: any, opts?: {}): void;
    out: (msg: any, opts?: {}) => void;
    error(err?: any, msg?: any, exit?: boolean): void;
    spacer: () => void;
    rainbow: (text: string) => string;
    heading(msg: any, opts?: {}): void;
}

export { Command, type CommandArgumentInterface, type CommandInterface, type CommandOptionInterface };
