export declare class RPCHandler {
    private connection;
    private queue;
    private classes;
    constructor(connection: any, queue: string, classes?: Array<any>);
    addClass(clazz: any): void;
    removeClass(clazz: any): void;
    initRPC(): Promise<any>;
    sendRPC(fn: string, args?: Array<any>, replyTo?: string): Promise<{}>;
}
