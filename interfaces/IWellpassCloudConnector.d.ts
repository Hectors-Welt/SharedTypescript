import { AddUserCommand } from '../models/WellpassCloudConnector/AddUserCommand';
import { AddUserCommandResult } from '../models/WellpassCloudConnector/AddUserCommandResult';
import { IService } from './IService';
export interface IWellpassCloudConnector extends IService {
    registerUser(command: AddUserCommand): Promise<AddUserCommandResult>;
}
