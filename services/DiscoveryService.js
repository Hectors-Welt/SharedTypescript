"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocationInfo_1 = require("../models/DiscoveryService/LocationInfo");
const EventStoreSettings_1 = require("../models/DiscoveryService/EventStoreSettings");
const MongoDbSettings_1 = require("../models/DiscoveryService/MongoDbSettings");
const RabbitMqSettings_1 = require("../models/DiscoveryService/RabbitMqSettings");
const HectorDbSettings_1 = require("../models/DiscoveryService/HectorDbSettings");
const BraintreeSettings_1 = require("../models/DiscoveryService/BraintreeSettings");
const LegacyAppsiteBackend_1 = require("./LegacyAppsiteBackend");
const TemplateDesigner_1 = require("./TemplateDesigner");
const ApiClient_1 = require("./ApiClient");
const Membershipservice_1 = require("./Membershipservice");
const Employeesservice_1 = require("./Employeesservice");
const Customerservice_1 = require("./Customerservice");
const TwoFactorAuthenticationservice_1 = require("./TwoFactorAuthenticationservice");
const PushNotificationservice_1 = require("./PushNotificationservice");
const Ratingservice_1 = require("./Ratingservice");
const Accountingservice_1 = require("./Accountingservice");
const CheckinOutservice_1 = require("./CheckinOutservice");
const Articlesservice_1 = require("./Articlesservice");
const Mailingservice_1 = require("./Mailingservice");
const SMSservice_1 = require("./SMSservice");
const CourseManagementservice_1 = require("./CourseManagementservice");
class DiscoveryService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}`;
    }
    startSelfRegistration(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            this.timer = setInterval(() => this.registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType).catch(() => null), 5 * 1000);
        });
    }
    getLocationInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new LocationInfo_1.LocationInfo(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubInfo`));
            }
            catch (err) {
                throw new Error(`failed to retrieve location info from discovery service: ${err.message}`);
            }
        });
    }
    getEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/environment`);
            }
            catch (err) {
                throw new Error(`failed to retrieve environment from discovery service: ${err.message}`);
            }
        });
    }
    getEventStoreSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new EventStoreSettings_1.EventStoreSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/eventstore`));
            }
            catch (err) {
                throw new Error(`failed to retrieve eventstore settings from discovery service: ${err.message}`);
            }
        });
    }
    getMongoDbSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new MongoDbSettings_1.MongoDbSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/mongodb`));
            }
            catch (err) {
                throw new Error(`failed to retrieve mongodb settings from discovery service: ${err.message}`);
            }
        });
    }
    getRabbitMqSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new RabbitMqSettings_1.RabbitMqSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/rabbitmq`));
            }
            catch (err) {
                throw new Error(`failed to retrieve rabbitmq settings from discovery service: ${err.message}`);
            }
        });
    }
    getHectorDbSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new HectorDbSettings_1.HectorDbSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/connection`));
            }
            catch (err) {
                throw new Error(`failed to retrieve hector db settings from discovery service: ${err.message}`);
            }
        });
    }
    getBraintreeSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new BraintreeSettings_1.BraintreeSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/braintree`));
            }
            catch (err) {
                throw new Error(`failed to retrieve hector braintree from discovery service: ${err.message}`);
            }
        });
    }
    getCloudServicesSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/cloudServices`);
            }
            catch (err) {
                throw new Error(`failed to retrieve cloud services settings from discovery service: ${err.message}`);
            }
        });
    }
    getClubs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs`);
            }
            catch (err) {
                throw new Error(`failed to retrieve clubs from discovery service: ${err.message}`);
            }
        });
    }
    getTitles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/titles`);
            }
            catch (err) {
                throw new Error(`failed to retrieve titles from discovery service: ${err.message}`);
            }
        });
    }
    getContactCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/contactCategories`);
            }
            catch (err) {
                throw new Error(`failed to retrieve contact categories from discovery service: ${err.message}`);
            }
        });
    }
    getEmployeeRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/employeeRoles`);
            }
            catch (err) {
                throw new Error(`failed to retrieve employee roles from discovery service: ${err.message}`);
            }
        });
    }
    getMailingService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.mailingService) {
                    return this.mailingService;
                }
                const mailingService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/MailingService`);
                this.mailingService = new Mailingservice_1.MailingService(mailingService.host, mailingService.port);
                return this.mailingService;
            }
            catch (err) {
                throw new Error(`failed to retrieve mailing service from discovery service: ${err.message}`);
            }
        });
    }
    getSMSService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.smsService) {
                    return this.smsService;
                }
                const smsService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/SMSService`);
                this.smsService = new SMSservice_1.SMSService(smsService.host, smsService.port);
                return this.smsService;
            }
            catch (err) {
                throw new Error(`failed to retrieve sms service from discovery service: ${err.message}`);
            }
        });
    }
    getCustomerService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.customerService) {
                    return this.customerService;
                }
                const customerService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/CustomerService`);
                this.customerService = new Customerservice_1.CustomerService(customerService.host, customerService.port);
                return this.customerService;
            }
            catch (err) {
                throw new Error(`failed to retrieve customer service from discovery service: ${err.message}`);
            }
        });
    }
    getEmployeesService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.employeesService) {
                    return this.employeesService;
                }
                const employeesService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/EmployeesService`);
                this.employeesService = new Employeesservice_1.EmployeesService(employeesService.host, employeesService.port);
                return this.employeesService;
            }
            catch (err) {
                throw new Error(`failed to retrieve employees service from discovery service: ${err.message}`);
            }
        });
    }
    getMembershipService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.membershipService) {
                    return this.membershipService;
                }
                const membershipService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/MembershipService`);
                this.membershipService = new Membershipservice_1.MembershipService(membershipService.host, membershipService.port);
                return this.membershipService;
            }
            catch (err) {
                throw new Error(`failed to retrieve membership service from discovery service: ${err.message}`);
            }
        });
    }
    getTwoFactorAuthenticationService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.twoFactorAuthenticationService) {
                    return this.twoFactorAuthenticationService;
                }
                const twoFactorAuthenticationService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/TwoFactorAuthenticationService`);
                this.twoFactorAuthenticationService = new TwoFactorAuthenticationservice_1.TwoFactorAuthenticationService(twoFactorAuthenticationService.host, twoFactorAuthenticationService.port);
                return this.twoFactorAuthenticationService;
            }
            catch (err) {
                throw new Error(`failed to retrieve two factor authentication service from discovery service: ${err.message}`);
            }
        });
    }
    getPushNotificationService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.pushNotificationService) {
                    return this.pushNotificationService;
                }
                const pushNotificationService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/PushNotificationService`);
                this.pushNotificationService = new PushNotificationservice_1.PushNotificationService(pushNotificationService.host, pushNotificationService.port);
                return this.pushNotificationService;
            }
            catch (err) {
                throw new Error(`failed to retrieve push notification service from discovery service: ${err.message}`);
            }
        });
    }
    getRatingService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.ratingService) {
                    return this.ratingService;
                }
                const ratingService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/RatingService`);
                this.ratingService = new Ratingservice_1.RatingService(ratingService.host, ratingService.port);
                return this.ratingService;
            }
            catch (err) {
                throw new Error(`failed to retrieve rating service from discovery service: ${err.message}`);
            }
        });
    }
    getLegacyAppsiteBackend() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.legacyAppsiteBackend) {
                    return this.legacyAppsiteBackend;
                }
                const legacyAppsiteBackend = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/LegacyAppsiteBackend`);
                this.legacyAppsiteBackend = new LegacyAppsiteBackend_1.LegacyAppsiteBackend(legacyAppsiteBackend.host, legacyAppsiteBackend.port);
                return this.legacyAppsiteBackend;
            }
            catch (err) {
                throw new Error(`failed to retrieve legacy appsite backend from discovery service: ${err.message}`);
            }
        });
    }
    getAccountingService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.accountingService) {
                    return this.accountingService;
                }
                const accountingService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/AccountingService`);
                this.accountingService = new Accountingservice_1.AccountingService(accountingService.host, accountingService.port);
                return this.accountingService;
            }
            catch (err) {
                throw new Error(`failed to retrieve accounting service from discovery service: ${err.message}`);
            }
        });
    }
    getCheckinOutService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.checkinOutService) {
                    return this.checkinOutService;
                }
                const checkinOutService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/CheckinOutService`);
                this.checkinOutService = new CheckinOutservice_1.CheckinOutService(checkinOutService.host, checkinOutService.port);
                return this.checkinOutService;
            }
            catch (err) {
                throw new Error(`failed to retrieve checkinout service from discovery service: ${err.message}`);
            }
        });
    }
    getArticlesService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.articlesService) {
                    return this.articlesService;
                }
                const articlesService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/ArticlesService`);
                this.articlesService = new Articlesservice_1.ArticlesService(articlesService.host, articlesService.port);
                return this.articlesService;
            }
            catch (err) {
                throw new Error(`failed to retrieve articles service from discovery service: ${err.message}`);
            }
        });
    }
    getTemplateDesigner() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.templateDesigner) {
                    return this.templateDesigner;
                }
                const templateDesigner = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/TemplateDesigner`);
                this.templateDesigner = new TemplateDesigner_1.TemplateDesigner(templateDesigner.host, templateDesigner.port);
                return this.templateDesigner;
            }
            catch (err) {
                throw new Error(`failed to retrieve template designer from discovery service: ${err.message}`);
            }
        });
    }
    getCourseManagementService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.courseManagementService) {
                    return this.courseManagementService;
                }
                const courseManagementService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/CourseManagementService`);
                this.courseManagementService = new CourseManagementservice_1.CourseManagementService(courseManagementService.host, courseManagementService.port);
                return this.courseManagementService;
            }
            catch (err) {
                throw new Error(`failed to retrieve template designer from discovery service: ${err.message}`);
            }
        });
    }
    registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/`, {
                    serviceName,
                    port: servicePort,
                    timeToLive: new Date(new Date().getTime() + (5 * 1000)).toJSON(),
                    serviceVersion,
                    public: isPublic,
                    serviceType,
                    proxyRoute,
                });
            }
            catch (err) {
                throw new Error(`could not reach DiscoveryService: ${err.message}`);
            }
        });
    }
}
exports.DiscoveryService = DiscoveryService;
