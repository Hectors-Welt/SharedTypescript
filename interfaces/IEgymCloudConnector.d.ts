import { AccessTokenResponse } from "../models/EgymCloudConnector/AccessTokenResponse";
export interface IEgymCloudConnector {
    verifyAccessToken(accessToken: string): Promise<AccessTokenResponse>;
}
