import { IEgymCloudConnector } from "../interfaces/IEgymCloudConnector";
import { AccessTokenResponse } from "../models/EgymCloudConnector/AccessTokenResponse";
export declare class EgymCloudConnector implements IEgymCloudConnector {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    verifyAccessToken(accessToken: string): Promise<AccessTokenResponse>;
}
