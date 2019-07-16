import { expect } from 'chai';
import * as nock from 'nock';
import { CustomerService } from '../../services/CustomerService';

describe('CustomerService', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new CustomerService(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('findDoublets', () => {
    it('should get data', async () => {
      this.nock.post('/findDoublets', { name: 'test', birthday: '10-10-1990' }).reply(200, {});

      const data = await this.service.findDoublets('test', '10-10-1990');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/findDoublets', { name: 'test', birthday: '10-10-1990' }).reply(404);

      try {
        await this.service.findDoublets('test', '10-10-1990');
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve doublet from customer service');
      }
    });
  });

  describe('getCustomerByCustomerId', () => {
    it('should get data', async () => {
      this.nock.get('/getCustomerByCustomerId/123').reply(200, {});

      const data = await this.service.getCustomerByCustomerId(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/getCustomerByCustomerId/123').reply(404);

      try {
        await this.service.getCustomerByCustomerId(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve customer from customer service');
      }
    });
  });

  describe('getCustomerByTagId', () => {
    it('should get data', async () => {
      this.nock.get('/getCustomerByTagId/123').reply(200, {});

      const data = await this.service.getCustomerByTagId(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/getCustomerByTagId/123').reply(404);

      try {
        await this.service.getCustomerByTagId(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve customer from customer service');
      }
    });
  });

  describe('getProfilePicture', () => {
    it('should get data', async () => {
      this.nock.get('/customer/123/profilePicture').reply(200, {});

      const data = await this.service.getProfilePicture(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/customer/123/profilePicture').reply(404);

      try {
        await this.service.getProfilePicture(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve profile picture from customer service');
      }
    });
  });

  describe('updateAddress', () => {
    it('should get data', async () => {
      this.nock.put('/customer/123/address', {}).reply(200, {});

      const data = await this.service.updateAddress(123, {});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.put('/customer/123/address', {}).reply(404);

      try {
        await this.service.updateAddress(123, {});
      } catch (err) {
        expect(err.message).to.equal('failed to update address at customer service');
      }
    });
  });

  describe('updateBankAccount', () => {
    it('should get data', async () => {
      this.nock.put('/customer/123/bankAccount', {}).reply(200, {});

      const data = await this.service.updateBankAccount(123, {});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.put('/customer/123/bankAccount', {}).reply(404);

      try {
        await this.service.updateBankAccount(123, {});
      } catch (err) {
        expect(err.message).to.equal('failed to update bank account at customer service');
      }
    });
  });

  describe('updateContactData', () => {
    it('should get data', async () => {
      this.nock.put('/customer/123/contact', {}).reply(200, {});

      const data = await this.service.updateContactData(123, {});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.put('/customer/123/contact', {}).reply(404);

      try {
        await this.service.updateContactData(123, {});
      } catch (err) {
        expect(err.message).to.equal('failed to update contact data at customer service');
      }
    });
  });
});
