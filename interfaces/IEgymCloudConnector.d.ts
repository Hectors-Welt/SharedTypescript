import { AccessTokenResponse } from "../models/EgymCloudConnector/AccessTokenResponse";
import { ActivateWellpassAccountCommand } from '../models/EgymCloudConnector/ActivateWellpassAccountCommand';
import { ActivateWellpassAccountCommandResult } from '../models/EgymCloudConnector/ActivateWellpassAccountCommandResult';
import { PagedResponse } from '../models/EgymCloudConnector/PagedResponse';
import { PaginationRequest } from '../models/EgymCloudConnector/PaginationRequest';
import { WellpassAccount } from '../models/EgymCloudConnector/WellpassAccount';
export interface IEgymCloudConnector {
    verifyAccessToken(accessToken: string): Promise<AccessTokenResponse>;
    activateWellpassAccount(customerId: number, command: ActivateWellpassAccountCommand): Promise<ActivateWellpassAccountCommandResult>;
    getWellpassAccounts(request: PaginationRequest): Promise<PagedResponse<WellpassAccount>>;
}
