import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService';
export declare class TwoFactorAuthenticationService implements ITwoFactorAuthenticationService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    generateToken(key: string): Promise<string>;
    validateToken(key: string, token: string): Promise<boolean>;
}
