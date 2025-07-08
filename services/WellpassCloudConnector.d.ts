import { IWellpassCloudConnector } from '../interfaces/IWellpassCloudConnector';
import { AddUserCommand } from '../models/WellpassCloudConnector/AddUserCommand';
import { AddUserCommandResult } from '../models/WellpassCloudConnector/AddUserCommandResult';
import { PagedResponse } from '../models/WellpassCloudConnector/PagedResponse';
import { PaginationRequest } from '../models/WellpassCloudConnector/PaginationRequest';
import { User } from '../models/WellpassCloudConnector/User';
export declare class WellpassCloudConnector implements IWellpassCloudConnector {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    registerUser(command: AddUserCommand): Promise<AddUserCommandResult>;
    getUsers(request: PaginationRequest): Promise<PagedResponse<User>>;
}
