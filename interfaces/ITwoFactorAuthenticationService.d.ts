import { IService } from './IService';
export interface ITwoFactorAuthenticationService extends IService {
    generateToken(key: string): Promise<string>;
    validateToken(key: string, token: string): Promise<boolean>;
}
