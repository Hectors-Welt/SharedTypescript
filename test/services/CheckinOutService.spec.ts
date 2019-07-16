import { expect } from 'chai';
import * as nock from 'nock';
import { CheckinOutService } from '../../services/CheckinOutService';

describe('CheckinOutService', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new CheckinOutService(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('getCheckinStatus', () => {
    it('should get data', async () => {
      this.nock.get('/getCheckinStatus/123').reply(200, {});

      const data = await this.service.getCheckinStatus(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/getCheckinStatus/123').reply(404);

      try {
        await this.service.getCheckinStatus(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve checkin status from checkinout service');
      }
    });
  });

  describe('getCheckins', () => {
    it('should get data', async () => {
      this.nock.get('/getCheckins/123').reply(200, {});

      const data = await this.service.getCheckins(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/getCheckins/123').reply(404);

      try {
        await this.service.getCheckins(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve checkins from checkinout service');
      }
    });
  });
});
