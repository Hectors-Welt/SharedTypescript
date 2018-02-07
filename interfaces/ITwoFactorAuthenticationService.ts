export interface ITwoFactorAuthenticationService {
  generateToken(key: string): Promise<string>;

  validateToken(key: string, token: string): Promise<boolean>;
}