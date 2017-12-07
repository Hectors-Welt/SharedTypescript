"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
const LocationInfo_1 = require("../models/DiscoveryService/LocationInfo");
const EventStoreSettings_1 = require("../models/DiscoveryService/EventStoreSettings");
const MongoDbSettings_1 = require("../models/DiscoveryService/MongoDbSettings");
const RabbitMqSettings_1 = require("../models/DiscoveryService/RabbitMqSettings");
const HectorDbSettings_1 = require("../models/DiscoveryService/HectorDbSettings");
const BraintreeSettings_1 = require("../models/DiscoveryService/BraintreeSettings");
const MembershipService_1 = require("./MembershipService");
const EmployeesService_1 = require("./EmployeesService");
const CustomerService_1 = require("./CustomerService");
const TwoFactorAuthenticationService_1 = require("./TwoFactorAuthenticationService");
const PushNotificationService_1 = require("./PushNotificationService");
const RatingService_1 = require("./RatingService");
const LegacyAppsiteBackend_1 = require("./LegacyAppsiteBackend");
const AccountingService_1 = require("./AccountingService");
const CheckinOutService_1 = require("./CheckinOutService");
const ArticlesService_1 = require("./ArticlesService");
const MailingService_1 = require("./MailingService");
const SMSService_1 = require("./SMSService");
const TemplateDesigner_1 = require("./TemplateDesigner");
class DiscoveryService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    startSelfRegistration(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType) {
        this.timer = setInterval(() => this.registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType).catch(() => null), 5 * 1000);
    }
    getLocationInfo() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubInfo`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve location info from discovery service`));
                }
                resolve(new LocationInfo_1.LocationInfo(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve location info from discovery service: ${error.message}`));
            });
        });
    }
    getEnvironment() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/environment`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve environment from discovery service`));
                }
                resolve(result.body);
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve environment from discovery service: ${error.message}`));
            });
        });
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
    getBraintreeSettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/braintree`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve braintree settings from discovery service`));
                }
                resolve(new BraintreeSettings_1.BraintreeSettings(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve hector braintree from discovery service: ${error.message}`));
            });
        });
    }
    getMailingService() {
        return new Promise((resolve, reject) => {
            if (!this.mailingService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/MailingService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.mailingService = new MailingService_1.MailingService(result.body.host, result.body.port);
                    resolve(this.mailingService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve mailing service from discovery service'));
                });
            }
            else {
                resolve(this.mailingService);
            }
        });
    }
    getSMSService() {
        return new Promise((resolve, reject) => {
            if (!this.smsService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/SMSService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.smsService = new SMSService_1.SMSService(result.body.host, result.body.port);
                    resolve(this.smsService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve sms service from discovery service'));
                });
            }
            else {
                resolve(this.smsService);
            }
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
    getArticlesService() {
        return new Promise((resolve, reject) => {
            if (!this.articlesService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/ArticlesService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.articlesService = new ArticlesService_1.ArticlesService(result.body.host, result.body.port);
                    resolve(this.articlesService);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve articles service from discovery service'));
                });
            }
            else {
                resolve(this.articlesService);
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
    getTemplateDesigner() {
        return new Promise((resolve, reject) => {
            if (!this.templateDesigner) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/TemplateDesigner`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.templateDesigner = new TemplateDesigner_1.TemplateDesigner(result.body.host, result.body.port);
                    resolve(this.templateDesigner);
                })
                    .catch((error) => {
                    reject(new Error('failed to retrieve template designer from discovery service'));
                });
            }
            else {
                resolve(this.templateDesigner);
            }
        });
    }
}
exports.DiscoveryService = DiscoveryService;
