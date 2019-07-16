import { expect } from 'chai';
import * as nock from 'nock';
import { TwoFactorAuthenticationService } from '../../services/TwoFactorAuthenticationService';

describe('TwoFactorAuthenticationService', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new TwoFactorAuthenticationService(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('generateToken', () => {
    it('should get data', async () => {
      this.nock.post('/api/token/generate', { key: '123' }).reply(200, {});

      const data = await this.service.generateToken('123');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/api/token/generate', { key: '123' }).reply(404);

      try {
        await this.service.generateToken('123');
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve token from two factor authentication service');
      }
    });
  });

  describe('validateToken', () => {
    it('should get data', async () => {
      this.nock.post('/api/token/validate', { key: '123', token: '321' }).reply(200, {});

      const data = await this.service.validateToken('123', '321');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/api/token/validate', { key: '123', token: '321' }).reply(404);

      try {
        await this.service.validateToken('123', '321');
      } catch (err) {
        expect(err.message).to.equal('failed to validate token by two factor authentication service');
      }
    });
  });
});
