import { expect } from 'chai';
import * as nock from 'nock';
import { MailingService } from '../../services/MailingService';

describe('MailingService', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new MailingService(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('sendEmail', () => {
    it('should get data', async () => {
      this.nock.post('/api/sendEmail', {}).reply(200, {});

      const data = await this.service.sendEmail({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/api/sendEmail', {}).reply(404);

      try {
        await this.service.sendEmail({});
      } catch (err) {
        expect(err.message).to.equal('failed to call sendEmail on mailing service');
      }
    });
  });
});
