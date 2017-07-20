import { expect } from 'chai';
import * as nock from 'nock'
import { MongoDbSettings } from '../../models/MongoDbSettings'
import { EventStoreSettings } from '../../models/EventStoreSettings'
import { DiscoveryService } from '../../services/DiscoveryService'

const discoveryServiceHost = 'localhost';
const discoveryServicePort = 12345;
const serviceName = 'testService';
const serviceVersion = '1.0.0';
const servicePort = 54321;

describe('DiscoveryService', () => {

    describe('MongoDbSettings', () => {
        const mongoDbSettings = new MongoDbSettings({
            host: 'mongodb',
            port: 27107,
            username: null,
            password: null
        });

        it('should resolve settings', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/mongodb')
                .reply(200, mongoDbSettings);

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getMongoDbSettings()
                .then((settings) => {
                    expect(settings).not.to.be.null;
                    expect(settings).to.deep.equal(mongoDbSettings);
                    done();
                })
        });

        it('should reject when settings not available', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/mongodb')
                .reply(404);

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getMongoDbSettings()
                .catch((error) => {
                    expect(error.message).to.equal('failed to retrieve mongodb settings from discovery service');
                    done();
                })
        });
    });

    describe('EventStoreSettings', () => {
        const eventStoreSettings = new EventStoreSettings({
            host: 'eventstore',
            tcpPort: 1113,
            httpPort: 2113,
            username: null,
            password: null
        });

        it('should resolve settings', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/eventstore')
                .reply(200, eventStoreSettings);

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getEventStoreSettings()
                .then((settings) => {
                    expect(settings).not.to.be.null;
                    expect(settings).to.deep.equal(eventStoreSettings);
                    done();
                });
        });

        it('should reject when settings not available', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/eventstore')
                .reply(404);

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getEventStoreSettings()
                .catch((error) => {
                    expect(error.message).to.equal('failed to retrieve eventstore settings from discovery service');
                    done();
                });
        });
    });

    describe('GetCustomerService', () => {
        it('should create a new instance of customer service', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/CustomerService')
                .reply(200, {host: 'localhost', port: 55555});

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getCustomerService()
                .then((service)=> {
                    expect(service).not.to.be.null;
                    done();
                });
        });

        it('should fail with customer service not registered at discovery service', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/CustomerService')
                .reply(404);

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getCustomerService()
                .catch((error)=> {
                    expect(error.message).to.equal('failed to retrieve customer service from discovery service');
                    done();
                });
        });

        it('should return cached instance of customer service once loaded', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/CustomerService')
                .reply(200, {host: 'localhost', port: 55555});

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getCustomerService()
                .then((customerService)=> {
                    return service.getCustomerService()
                })
                .then((customerService) => {
                    expect(customerService).not.to.be.null;
                    done();
                });
        });
    });

     describe('GetEmployeesService', () => {
        it('should create a new instance of employees service', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/EmployeesService')
                .reply(200, {host: 'localhost', port: 55555});

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getEmployeesService()
                .then((employeesService)=> {
                    expect(employeesService).not.to.be.null;
                    done();
                });
        });

        it('should fail with employees service not registered at discovery service', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/EmployeesService')
                .reply(404);

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getEmployeesService()
                .catch((error)=> {
                    expect(error.message).to.equal('failed to retrieve employees service from discovery service');
                    done();
                });
        });

        it('should return cached instance of employees service once loaded', (done) => {
            nock(`http://${discoveryServiceHost}:${discoveryServicePort}`)
                .defaultReplyHeaders({
                    'Content-Type': 'application/json',
                })
                .get('/EmployeesService')
                .reply(200, {host: 'localhost', port: 55555});

            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            service.getEmployeesService()
                .then((employeesService)=> {
                    return service.getEmployeesService()
                })
                .then((employeesService) => {
                    expect(employeesService).not.to.be.null;
                    done();
                });
        });
    });

    describe('startSelfRegistration', function () {
        it('should set timer for self registration', function () {
            const service = new DiscoveryService(discoveryServiceHost, discoveryServicePort);
            expect(service.timer).to.be.undefined;
            service.startSelfRegistration(serviceName, serviceVersion, servicePort);
            expect(service.timer).not.to.be.undefined;
        });
    });
});