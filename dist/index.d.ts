import * as chalk from 'chalk';

interface CommandInterface {
    command: string;
    title?: string;
    description?: string;
    arguments?: CommandArgumentInterface;
    options?: CommandOptionInterface[];
    help?: string;
    helpAdd?: string;
    hidden?: boolean;
    usage?: string;
    version?: string | boolean;
    subcommands?: [];
    prompts?: [];
    promptTypes?: {
        [key: string]: any;
    };
    fun?: boolean;
    action?: (args?: any, opts?: any, all?: any) => Promise<void | any>;
}
interface CommandArgumentInterface {
    name: string;
    subcommand?: boolean;
    required?: boolean;
    defaultOption?: boolean;
    multiple?: boolean;
    group?: string;
}
interface CommandOptionInterface {
    name: string;
    type: any;
    alias?: string;
    description?: string;
    group?: string;
}

/**
 * Command class
 */
declare class Command {
    command: string;
    title?: string;
    description?: string;
    version?: string;
    help: string;
    additionalHelp: string;
    hidden: boolean;
    arguments: CommandArgumentInterface;
    options: CommandOptionInterface[];
    subcommands: any[];
    prompts: any[];
    promptTypes: {};
    fun: boolean;
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
     * Validate any arguments or options that have a `validate` property
     * @param {object} data   Data object to validate against
     * @returns {boolean}     True if successful
     */
    validateOptions(data: any): Promise<true | void>;
    /**
     * Add an argument
     *
     * @param {object} arg  Argument object
     * @returns
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
    subcommand(command: Command): this;
    /**
     * Retrieve the list of commands
     *
     * @returns {array}   Array of commands in command stack
     */
    getCommandStack(): any[];
    /**
     * Retrieve the list of available subcommands
     *
     * @returns {array}   Array of subcommands
     */
    getSubcommands(): any[];
    /**
     * Method to trigger once processed
     *
     * @param {object} args   Arguments
     * @param {object} opts   Options
     * @param {object} etc    Complete object of parsed data
     */
    action(args: any, opts: any, etc: any): Promise<void>;
    /**
     * Generate and output help
     */
    generateHelp(): void;
    style(styles: any): chalk.ChalkInstance;
    log(msg: any, opts?: {}): void;
    out: (msg: any, opts?: {}) => void;
    error(err?: any, msg?: any, exit?: boolean): void;
    spacer: () => void;
    rainbow: (text: string) => string;
    heading(msg: any, opts?: {}): void;
}

export { Command, type CommandArgumentInterface, type CommandInterface, type CommandOptionInterface };
