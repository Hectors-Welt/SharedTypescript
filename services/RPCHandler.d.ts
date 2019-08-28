export declare class RPCHandler {
    private connection;
    private classes;
    constructor(connection: any);
    addClass(clazz: any): void;
    removeClass(clazz: any): void;
    receive(bindTo: string, classes?: Array<any>): Promise<any>;
    send(sendTo: string, fn: string, args?: Array<any>, replyTo?: string): Promise<unknown>;
}
