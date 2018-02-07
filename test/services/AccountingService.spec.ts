import { expect } from 'chai';
import * as nock from 'nock';
import { AccountingService } from '../../services/AccountingService';

describe('AccountingService', () => {

  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new AccountingService(this.host, this.port);
    this.nock = nock(this.service.baseUrl)
    .defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('getClubAccountInformation', () => {
    it('should get data', async () => {
      this.nock
      .get('/getClubAccountInformationByCustomerId/123')
      .reply(200, {});

      const data = await this.service.getClubAccountInformation(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getClubAccountInformationByCustomerId/123')
      .reply(404);

      try {
        await this.service.getClubAccountInformation(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve club account information from accounting service');
      }
    });
  });

  describe('getSepaBookings', () => {
    it('should get data', async () => {
      this.nock
      .get('/getSepaBookingsByCustomerId/123')
      .reply(200, {});

      const data = await this.service.getSepaBookings(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getSepaBookingsByCustomerId/123')
      .reply(404);

      try {
        await this.service.getSepaBookings(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve club account information from accounting service');
      }
    });
  });

  describe('getSalesInfo', () => {
    it('should get data', async () => {
      this.nock
      .get('/getSalesInfoByCustomerId/123/ForTheLast/7/Days')
      .reply(200, {});

      const data = await this.service.getSalesInfo(123, 7);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getSalesInfoByCustomerId/123/ForTheLast/7/Days')
      .reply(404);

      try {
        await this.service.getSalesInfo(123, 7);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve sepa bookings from accounting service');
      }
    });
  });

});
