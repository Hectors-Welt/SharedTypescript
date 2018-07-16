import { expect } from 'chai';
import * as nock from 'nock';
import { MembershipService } from '../../services/MembershipService';

describe('MembershipService', () => {

  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new MembershipService(this.host, this.port);
    this.nock = nock(this.service.baseUrl)
    .defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('getContractTemplatesAvailable', () => {
    it('should get data', async () => {
      this.nock
      .get('/getContractTemplatesAvailable')
      .reply(200, {});

      const data = await this.service.getContractTemplatesAvailable();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getContractTemplatesAvailable')
      .reply(404);

      try {
        await this.service.getContractTemplatesAvailable();
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve contract templates from membership service');
      }
    });
  });

  describe('getCurrentContractsByCustomerId', () => {
    it('should get data', async () => {
      this.nock
      .get('/getCurrentContractsByCustomerId/123')
      .reply(200, {});

      const data = await this.service.getCurrentContractsByCustomerId(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getCurrentContractsByCustomerId/123')
      .reply(404);

      try {
        await this.service.getCurrentContractsByCustomerId(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve contracts from membership service');
      }
    });
  });

  describe('getContractsTerminatedByCustomerId', () => {
    it('should get data', async () => {
      this.nock
      .get('/getContractsTerminatedByCustomerId/123')
      .reply(200, {});

      const data = await this.service.getContractsTerminatedByCustomerId(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getContractsTerminatedByCustomerId/123')
      .reply(404);

      try {
        await this.service.getContractsTerminatedByCustomerId(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve terminated contracts from membership service');
      }
    });
  });

});
