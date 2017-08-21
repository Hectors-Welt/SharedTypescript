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
const RatingService_1 = require("./RatingService");
const LegacyAppsiteBackend_1 = require("./LegacyAppsiteBackend");
const AccountingService_1 = require("./AccountingService");
const CheckinOutService_1 = require("./CheckinOutService");
class DiscoveryService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    startSelfRegistration(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType) {
        this.timer = setInterval(() => this.registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType)
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
    getRatingService() {
        return new Promise((resolve, reject) => {
            if (!this.ratingService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/RatingService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.ratingService = new RatingService_1.RatingService(result.body.host, result.body.port);
                    resolve(this.ratingService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve rating service from discovery service'));
                });
            }
            else {
                resolve(this.ratingService);
            }
        });
    }
    getLegacyAppsiteBackend() {
        return new Promise((resolve, reject) => {
            if (!this.legacyAppsiteBackend) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/LegacyAppsiteBackend`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.legacyAppsiteBackend = new LegacyAppsiteBackend_1.LegacyAppsiteBackend(result.body.host, result.body.port);
                    resolve(this.legacyAppsiteBackend);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve legacy appsite backend from discovery service'));
                });
            }
            else {
                resolve(this.legacyAppsiteBackend);
            }
        });
    }
    getAccountingService() {
        return new Promise((resolve, reject) => {
            if (!this.accountingService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/AccountingService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.accountingService = new AccountingService_1.AccountingService(result.body.host, result.body.port);
                    resolve(this.accountingService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve accounting service from discovery service'));
                });
            }
            else {
                resolve(this.accountingService);
            }
        });
    }
    getCheckinOutService() {
        return new Promise((resolve, reject) => {
            if (!this.checkinOutService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/CheckinOutService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.checkinOutService = new CheckinOutService_1.CheckinOutService(result.body.host, result.body.port);
                    resolve(this.checkinOutService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve checkinout service from discovery service'));
                });
            }
            else {
                resolve(this.checkinOutService);
            }
        });
    }
    registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType) {
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
                    public: isPublic,
                    serviceType: serviceType,
                    proxyRoute: proxyRoute,
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
