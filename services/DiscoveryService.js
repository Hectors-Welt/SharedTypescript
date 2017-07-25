"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
const EventStoreSettings_1 = require("../models/DiscoveryService/EventStoreSettings");
const MongoDbSettings_1 = require("../models/DiscoveryService/MongoDbSettings");
const RabbitMqSettings_1 = require("../models/DiscoveryService/RabbitMqSettings");
const HectorDbSettings_1 = require("../models/DiscoveryService/HectorDbSettings");
const MembershipService_1 = require("./MembershipService");
const EmployeesService_1 = require("./EmployeesService");
const CustomerService_1 = require("./CustomerService");
const TwoFactorAuthenticationService_1 = require("./TwoFactorAuthenticationService");
const PushNotificationService_1 = require("./PushNotificationService");
class DiscoveryService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    startSelfRegistration(serviceName, serviceVersion, servicePort) {
        this.timer = setInterval(() => this.registerService(serviceName, serviceVersion, servicePort)
            .catch((error) => {
            clearInterval(this.timer);
        }), 5 * 1000);
    }
    getEventStoreSettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/eventstore`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve eventstore settings from discovery service`));
                }
                resolve(new EventStoreSettings_1.EventStoreSettings(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve eventstore settings from discovery service: ${error.message}`));
            });
        });
    }
    getMongoDbSettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/mongodb`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve mongodb settings from discovery service`));
                }
                resolve(new MongoDbSettings_1.MongoDbSettings(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve mongodb settings from discovery service: ${error.message}`));
            });
        });
    }
    getRabbitMqSettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/rabbitmq`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve rabbitmq settings from discovery service`));
                }
                resolve(new RabbitMqSettings_1.RabbitMqSettings(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve rabbitmq settings from discovery service: ${error.message}`));
            });
        });
    }
    getHectorDbSettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/connection`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve hector db settings from discovery service`));
                }
                resolve(new HectorDbSettings_1.HectorDbSettings(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve hector db settings from discovery service: ${error.message}`));
            });
        });
    }
    getCustomerService() {
        return new Promise((resolve, reject) => {
            if (!this.customerService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/CustomerService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.customerService = new CustomerService_1.CustomerService(result.body.host, result.body.port);
                    resolve(this.customerService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve customer service from discovery service'));
                });
            }
            else {
                resolve(this.customerService);
            }
        });
    }
    getEmployeesService() {
        return new Promise((resolve, reject) => {
            if (!this.employeesService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/EmployeesService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.employeesService = new EmployeesService_1.EmployeesService(result.body.host, result.body.port);
                    resolve(this.employeesService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve employees service from discovery service'));
                });
            }
            else {
                resolve(this.employeesService);
            }
        });
    }
    getMembershipService() {
        return new Promise((resolve, reject) => {
            if (!this.membershipService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/MembershipService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.membershipService = new MembershipService_1.MembershipService(result.body.host, result.body.port);
                    resolve(this.membershipService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve membership service from discovery service'));
                });
            }
            else {
                resolve(this.membershipService);
            }
        });
    }
    getTwoFactorAuthenticationService() {
        return new Promise((resolve, reject) => {
            if (!this.twoFactorAuthenticationService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/TwoFactorAuthenticationService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.twoFactorAuthenticationService = new TwoFactorAuthenticationService_1.TwoFactorAuthenticationService(result.body.host, result.body.port);
                    resolve(this.twoFactorAuthenticationService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve two factor authentication service from discovery service'));
                });
            }
            else {
                resolve(this.twoFactorAuthenticationService);
            }
        });
    }
    getPushNotificationService() {
        return new Promise((resolve, reject) => {
            if (!this.pushNotificationService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/PushNotificationService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.pushNotificationService = new PushNotificationService_1.PushNotificationService(result.body.host, result.body.port);
                    resolve(this.pushNotificationService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve push notification service from discovery service'));
                });
            }
            else {
                resolve(this.pushNotificationService);
            }
        });
    }
    registerService(serviceName, serviceVersion, servicePort) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: {
                    serviceName: serviceName,
                    port: servicePort,
                    timeToLive: new Date(new Date().getTime() + (5 * 1000)).toJSON(),
                    serviceVersion: serviceVersion,
                    public: false,
                    serviceType: 0,
                    proxyRoute: null,
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                resolve();
            })
                .catch((error) => {
                reject(new Error(`could not reach DiscoveryService: ${error.message}`));
            });
        });
    }
}
exports.DiscoveryService = DiscoveryService;
