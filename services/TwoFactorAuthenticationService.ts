import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService';
import { ApiClient } from './ApiClient';

export class TwoFactorAuthenticationService implements ITwoFactorAuthenticationService {
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

  async generateToken(key: string): Promise<string> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/api/token/generate`, { key });
    } catch (err) {
      throw new Error('failed to retrieve token from two factor authentication service');
    }
  }

  async validateToken(key: string, token: string): Promise<boolean> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/api/token/validate`, { key, token });
    } catch (err) {
      throw new Error('failed to validate token by two factor authentication service');
    }
  }
}
