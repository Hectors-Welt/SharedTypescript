import { expect } from 'chai';
import * as nock from 'nock';
import { MongoDbSettings } from '../../models/DiscoveryService/MongoDbSettings';
import { DiscoveryService } from '../../services/DiscoveryService';
import { EventStoreSettings } from '../../models/DiscoveryService/EventStoreSettings';
import { ServiceType } from '../../models/DiscoveryService/ServiceTypeEnum';

describe('DiscoveryService', () => {
  before(() => {
    this.discoveryServiceHost = 'localhost';
    this.discoveryServicePort = 12345;
    this.serviceName = 'testService';
    this.serviceVersion = '1.0.0';
    this.servicePort = 54321;
    this.service = new DiscoveryService(this.discoveryServiceHost, this.discoveryServicePort);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('MongoDbSettings', () => {
    const mongoDbSettings = new MongoDbSettings({
      host: 'mongodb',
      port: 27107,
      username: null,
      password: null,
    });

    it('should resolve settings', async () => {
      this.nock.get('/mongodb').reply(200, mongoDbSettings);

      const service = await this.service.getMongoDbSettings();
      expect(service).not.to.be.null;
      expect(service).to.deep.equal(mongoDbSettings);
    });

    it('should reject when settings not available', async () => {
      this.nock.get('/mongodb').reply(404);

      try {
        await this.service.getMongoDbSettings();
      } catch (err) {
        expect(err.message).to.equal(
          'failed to retrieve mongodb settings from discovery service: invalid data. ensure host and port are present.',
        );
      }
    });
  });

  describe('EventStoreSettings', () => {
    const eventStoreSettings = new EventStoreSettings({
      host: 'eventstore',
      tcpPort: 1113,
      httpPort: 2113,
      username: null,
      password: null,
    });

    it('should resolve settings', async () => {
      this.nock.get('/eventstore').reply(200, eventStoreSettings);

      const service = await this.service.getEventStoreSettings();
      expect(service).not.to.be.null;
      expect(service).to.deep.equal(eventStoreSettings);
    });

    it('should reject when settings not available', async () => {
      this.nock.get('/eventstore').reply(404);

      try {
        await this.service.getEventStoreSettings();
      } catch (err) {
        expect(err.message).to.equal(
          'failed to retrieve eventstore settings from discovery service: invalid data. ensure host and ports are present.',
        );
      }
    });
  });

  describe('GetCustomerService', () => {
    it('should create a new instance of customer service', async () => {
      this.nock.get('/CustomerService').reply(200, { host: 'localhost', port: 55555 });

      const service = await this.service.getCustomerService();
      expect(service).not.to.be.null;
    });

    it('should fail with customer service not registered at discovery service', async () => {
      this.nock.get('/CustomerService').reply(404);

      try {
        await this.service.getCustomerService();
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve customer service from discovery service: not reachable');
      }
    });

    it('should return cached instance of customer service once loaded', async () => {
      this.nock.get('/CustomerService').reply(200, { host: 'localhost', port: 55555 });

      const service = await this.service.getCustomerService();
      expect(service).not.to.be.null;
    });
  });

  describe('GetEmployeesService', () => {
    it('should create a new instance of employees service', async () => {
      this.nock.get('/EmployeesService').reply(200, { host: 'localhost', port: 55555 });

      const service = await this.service.getEmployeesService();
      expect(service).not.to.be.null;
    });

    it('should fail with employees service not registered at discovery service', async () => {
      this.nock.get('/EmployeesService').reply(404);
      try {
        await this.service.getEmployeesService();
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve employees service from discovery service: not reachable');
      }
    });

    it('should return cached instance of employees service once loaded', async () => {
      this.nock.get('/EmployeesService').reply(200, { host: 'localhost', port: 55555 });

      const service = await this.service.getEmployeesService();
      expect(service).not.to.be.null;
    });
  });

  describe('startSelfRegistration', () => {
    it('should set timer for self registration', () => {
      expect(this.service.timer).to.be.undefined;
      this.service.startSelfRegistration(
        this.serviceName,
        this.serviceVersion,
        this.servicePort,
        null,
        false,
        ServiceType.Internal,
      );
      expect(this.service.timer).not.to.be.undefined;
    });
  });
});
