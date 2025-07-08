import { IWellpassCloudConnector } from '../interfaces/IWellpassCloudConnector';
import { AddUserCommand } from '../models/WellpassCloudConnector/AddUserCommand';
import { AddUserCommandResult } from '../models/WellpassCloudConnector/AddUserCommandResult';
import { PagedResponse } from '../models/WellpassCloudConnector/PagedResponse';
import { PaginationRequest } from '../models/WellpassCloudConnector/PaginationRequest';
import { User } from '../models/WellpassCloudConnector/User';
import { ApiClient } from './ApiClient';

export class WellpassCloudConnector implements IWellpassCloudConnector {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}`;
  }

  async registerUser(command: AddUserCommand): Promise<AddUserCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/users`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to add user at wellpass cloud connector',
        errors: [err]
      }
    }
  }

  async getUsers(request: PaginationRequest): Promise<PagedResponse<User>> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/users?page=${request.page}&take=${request.take}&order=${request.order}&orderBy=${request.orderBy}`, null, null);
    } catch (err) {
      throw new Error('failed to get users from wellpass cloud connector');
    }
  }
}
