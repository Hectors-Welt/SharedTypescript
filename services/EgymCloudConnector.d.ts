import { IEgymCloudConnector } from "../interfaces/IEgymCloudConnector";
import { AccessTokenResponse } from "../models/EgymCloudConnector/AccessTokenResponse";
import { ActivateWellpassAccountCommandResult } from '../models/EgymCloudConnector/ActivateWellpassAccountCommandResult';
import { ActivateWellpassAccountCommand } from '../models/EgymCloudConnector/ActivateWellpassAccountCommand';
import { PagedResponse } from '../models/EgymCloudConnector/PagedResponse';
import { PaginationRequest } from '../models/EgymCloudConnector/PaginationRequest';
import { WellpassAccount } from '../models/EgymCloudConnector/WellpassAccount';
export declare class EgymCloudConnector implements IEgymCloudConnector {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    verifyAccessToken(accessToken: string): Promise<AccessTokenResponse>;
    activateWellpassAccount(customerId: number, command: ActivateWellpassAccountCommand): Promise<ActivateWellpassAccountCommandResult>;
    queryWellpassAccounts(request: PaginationRequest, filter: any): Promise<PagedResponse<WellpassAccount>>;
}
