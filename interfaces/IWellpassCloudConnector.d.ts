import { AddUserCommand } from '../models/WellpassCloudConnector/AddUserCommand';
import { AddUserCommandResult } from '../models/WellpassCloudConnector/AddUserCommandResult';
import { PagedResponse } from '../models/WellpassCloudConnector/PagedResponse';
import { PaginationRequest } from '../models/WellpassCloudConnector/PaginationRequest';
import { User } from '../models/WellpassCloudConnector/User';
import { IService } from './IService';
export interface IWellpassCloudConnector extends IService {
    registerUser(command: AddUserCommand): Promise<AddUserCommandResult>;
    getUsers(request: PaginationRequest): Promise<PagedResponse<User>>;
}
