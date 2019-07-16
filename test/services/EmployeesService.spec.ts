import { expect } from 'chai';
import * as nock from 'nock';
import { EmployeesService } from '../../services/EmployeesService';

describe('EmployeesService', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new EmployeesService(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('validateEmployeeByCredentials', () => {
    it('should get data', async () => {
      this.nock
        .post('/validateEmployeeByCredentials', { name: 'test', surname: 'test', password: 'test' })
        .reply(200, {});

      const data = await this.service.validateEmployeeByCredentials('test', 'test', 'test');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/validateEmployeeByCredentials', { name: 'test', surname: 'test', password: 'test' }).reply(404);

      try {
        await this.service.validateEmployeeByCredentials('test', 'test', 'test');
      } catch (err) {
        expect(err.message).to.equal('failed to validate credentials at employees service');
      }
    });
  });

  describe('getEmployeeByCustomerId', () => {
    it('should get data', async () => {
      this.nock.get('/getEmployeeByCustomerId/123').reply(200, {});

      const data = await this.service.getEmployeeByCustomerId(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/getEmployeeByCustomerId/123').reply(404);

      try {
        await this.service.getEmployeeByCustomerId(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve employee from employees service: not reachable');
      }
    });
  });

  describe('getEmployeesPresent', () => {
    it('should get data', async () => {
      this.nock.get('/getEmployeesPresentInClub/123').reply(200, {});

      const data = await this.service.getEmployeesPresent(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/getEmployeesPresentInClub/123').reply(404);

      try {
        await this.service.getEmployeesPresent(123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve employees from employees service: not reachable');
      }
    });
  });

  describe('getAllEmployees', () => {
    it('should get data', async () => {
      this.nock.get('/employees').reply(200, {});

      const data = await this.service.getAllEmployees();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/employees').reply(404);

      try {
        await this.service.getAllEmployees();
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve employees from employees service: not reachable');
      }
    });
  });
});
