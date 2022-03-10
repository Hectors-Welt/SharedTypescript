import {IEgymCloudConnector} from "../interfaces/IEgymCloudConnector";
import {AccessTokenResponse} from "../models/EgymCloudConnector/AccessTokenResponse";
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
            throw new Error('failed to verify accesstoken at articles service');
        }
    }
}