import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend';
export declare class LegacyAppsiteBackend implements ILegacyAppsiteBackend {
    private host;
    private port;
    constructor(host: string, port: number);
    login(loginRequest: any): Promise<any>;
}
