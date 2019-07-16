import { expect } from 'chai';
import * as nock from 'nock';
import { SMSService } from '../../services/SMSService';

describe('SMSService', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new SMSService(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('sendSMS', () => {
    it('should get data', async () => {
      this.nock.post('/sendSMS', {}).reply(200, {});

      const data = await this.service.sendSMS({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/sendSMS', {}).reply(404);

      try {
        await this.service.sendSMS({});
      } catch (err) {
        expect(err.message).to.equal('failed to call sendSMS on sms service');
      }
    });
  });

  describe('getJobs', () => {
    it('should get data', async () => {
      this.nock.get('/jobs').reply(200, {});

      const data = await this.service.getJobs();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/jobs').reply(404);

      try {
        await this.service.getJobs();
      } catch (err) {
        expect(err.message).to.equal('failed to call getJobs on sms service');
      }
    });
  });

  describe('getJob', () => {
    it('should get data', async () => {
      this.nock.get('/jobs/123').reply(200, {});

      const data = await this.service.getJob(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/jobs/123').reply(404);

      try {
        await this.service.getJob(123);
      } catch (err) {
        expect(err.message).to.equal('failed to call getJob on sms service');
      }
    });
  });

  describe('deleteJob', () => {
    it('should get data', async () => {
      this.nock.delete('/jobs/123').reply(200, {});

      const data = await this.service.deleteJob(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.delete('/jobs/123').reply(404);

      try {
        await this.service.deleteJob(123);
      } catch (err) {
        expect(err.message).to.equal('failed to call deleteJob on sms service');
      }
    });
  });
});
