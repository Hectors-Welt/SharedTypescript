import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService';
export declare class TwoFactorAuthenticationService implements ITwoFactorAuthenticationService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    generateToken(key: string): Promise<string>;
    validateToken(key: string, token: string): Promise<boolean>;
}
