import {IEgymCloudConnector} from "../interfaces/IEgymCloudConnector";
import {AccessTokenResponse} from "../models/EgymCloudConnector/AccessTokenResponse";
import { ActivateWellpassAccountCommandResult } from '../models/EgymCloudConnector/ActivateWellpassAccountCommandResult';
import { ActivateWellpassAccountCommand } from '../models/EgymCloudConnector/ActivateWellpassAccountCommand';
import { PagedResponse } from '../models/EgymCloudConnector/PagedResponse';
import { PaginationRequest } from '../models/EgymCloudConnector/PaginationRequest';
import { WellpassAccount } from '../models/EgymCloudConnector/WellpassAccount';
import {ApiClient} from "./ApiClient";

export class EgymCloudConnector implements IEgymCloudConnector{
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
    
    async verifyAccessToken(accessToken: string): Promise<AccessTokenResponse> {
        try {
            return await ApiClient.POST(`${this.baseUrl}/api/verifyAccessToken`, {
                accessToken
            });
        } catch (err) {
            throw new Error('failed to verify accesstoken at egym cloud connector');
        }
    }

    async activateWellpassAccount(customerId: number, command: ActivateWellpassAccountCommand): Promise<ActivateWellpassAccountCommandResult> {
      try {
        return await ApiClient.POST(`${this.baseUrl}/accounts/wellpass/${customerId}/activate`, command, null, true);
      } catch (err) {
        return {
          success: false,
          message: 'failed to activate user at egym cloud connector',
          errors: [err]
        }
      }
    }

    async queryWellpassAccounts(request: PaginationRequest, filter: any): Promise<PagedResponse<WellpassAccount>> {
      try {
        let query = `page=${request.page}&take=${request.take}`;
        if (request.orderBy !== undefined) {
            query += `&order=${request.order}&orderBy=${request.orderBy}`;
        }
        return await ApiClient.POST(`${this.baseUrl}/accounts/query?${query}`, filter, null);
      } catch (err) {
        throw new Error('failed to get accounts from egym cloud connector');
      }
    }
}