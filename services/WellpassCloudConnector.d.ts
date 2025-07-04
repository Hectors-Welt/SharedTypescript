import { IWellpassCloudConnector } from '../interfaces/IWellpassCloudConnector';
import { AddUserCommand } from '../models/WellpassCloudConnector/AddUserCommand';
import { AddUserCommandResult } from '../models/WellpassCloudConnector/AddUserCommandResult';
export declare class WellpassCloudConnector implements IWellpassCloudConnector {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    registerUser(command: AddUserCommand): Promise<AddUserCommandResult>;
}
