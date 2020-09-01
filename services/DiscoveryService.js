"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryService = void 0;
const LocationInfo_1 = require("../models/DiscoveryService/LocationInfo");
const EventStoreSettings_1 = require("../models/DiscoveryService/EventStoreSettings");
const MongoDbSettings_1 = require("../models/DiscoveryService/MongoDbSettings");
const RabbitMqSettings_1 = require("../models/DiscoveryService/RabbitMqSettings");
const HectorDbSettings_1 = require("../models/DiscoveryService/HectorDbSettings");
const BraintreeSettings_1 = require("../models/DiscoveryService/BraintreeSettings");
const TemplateDesigner_1 = require("./TemplateDesigner");
const ApiClient_1 = require("./ApiClient");
const MembershipService_1 = require("./MembershipService");
const EmployeesService_1 = require("./EmployeesService");
const CustomerService_1 = require("./CustomerService");
const TwoFactorAuthenticationService_1 = require("./TwoFactorAuthenticationService");
const PushNotificationService_1 = require("./PushNotificationService");
const RatingService_1 = require("./RatingService");
const AccountingService_1 = require("./AccountingService");
const CheckinOutService_1 = require("./CheckinOutService");
const ArticlesService_1 = require("./ArticlesService");
const MailingService_1 = require("./MailingService");
const SMSService_1 = require("./SMSService");
const CourseManagementService_1 = require("./CourseManagementService");
const MarkdownEditor_1 = require("./MarkdownEditor");
const BackendSettings_1 = require("../models/DiscoveryService/BackendSettings");
const EmailTemplateService_1 = require("./EmailTemplateService");
const PushTemplateService_1 = require("../services/PushTemplateService");
const PaypalIntegrationService_1 = require("./PaypalIntegrationService");
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
    invalidateCache(property) {
        if (this[property]) {
            this[property] = null;
        }
    }
    getLocationInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.locationInfo) {
                    this.locationInfo = yield new LocationInfo_1.LocationInfo(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubInfo`));
                }
                return this.locationInfo;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve location info from discovery service: ${err.message}`,
                };
            }
        });
    }
    getEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.environment) {
                    this.environment = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/environment`);
                }
                return this.environment;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve environment from discovery service: ${err.message}`,
                };
            }
        });
    }
    getEventStoreSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.eventStoreSettings) {
                    this.eventStoreSettings = new EventStoreSettings_1.EventStoreSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/eventstore`));
                }
                return this.eventStoreSettings;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve eventstore settings from discovery service: ${err.message}`,
                };
            }
        });
    }
    getMongoDbSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.mongoDbSettings) {
                    this.mongoDbSettings = new MongoDbSettings_1.MongoDbSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/mongodb`));
                }
                return this.mongoDbSettings;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve mongodb settings from discovery service: ${err.message}`,
                };
            }
        });
    }
    getDevices() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/devices`);
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve device configs from discovery service: ${err.message}`,
                };
            }
        });
    }
    getRabbitMqSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.rabbitMqSettings) {
                    this.rabbitMqSettings = new RabbitMqSettings_1.RabbitMqSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/rabbitmq`));
                }
                return this.rabbitMqSettings;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve rabbitmq settings from discovery service: ${err.message}`,
                };
            }
        });
    }
    getBackendSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.backendSettings) {
                    this.backendSettings = new BackendSettings_1.BackendSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/backend`));
                }
                return this.backendSettings;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve backend settings from discovery service: ${err.message}`,
                };
            }
        });
    }
    getHectorDbSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.hectorDbSettings) {
                    this.hectorDbSettings = new HectorDbSettings_1.HectorDbSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/connection`));
                }
                return this.hectorDbSettings;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve hector db settings from discovery service: ${err.message}`,
                };
            }
        });
    }
    getBraintreeSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.braintreeSettings) {
                    this.braintreeSettings = new BraintreeSettings_1.BraintreeSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/braintree`));
                }
                return this.braintreeSettings;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve hector braintree from discovery service: ${err.message}`,
                };
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
                this.mailingService = new MailingService_1.MailingService(mailingService.host, mailingService.port, mailingService.serviceVersion);
                return this.mailingService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve mailing service from discovery service: ${err.message}`,
                };
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
                this.smsService = new SMSService_1.SMSService(smsService.host, smsService.port, smsService.serviceVersion);
                return this.smsService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve sms service from discovery service: ${err.message}`,
                };
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
                this.customerService = new CustomerService_1.CustomerService(customerService.host, customerService.port, customerService.serviceVersion);
                return this.customerService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve customer service from discovery service: ${err.message}`,
                };
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
                this.employeesService = new EmployeesService_1.EmployeesService(employeesService.host, employeesService.port, employeesService.serviceVersion);
                return this.employeesService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve employees service from discovery service: ${err.message}`,
                };
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
                this.membershipService = new MembershipService_1.MembershipService(membershipService.host, membershipService.port, membershipService.serviceVersion);
                return this.membershipService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve membership service from discovery service: ${err.message}`,
                };
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
                this.twoFactorAuthenticationService = new TwoFactorAuthenticationService_1.TwoFactorAuthenticationService(twoFactorAuthenticationService.host, twoFactorAuthenticationService.port, twoFactorAuthenticationService.serviceVersion);
                return this.twoFactorAuthenticationService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve two factor authentication service from discovery service: ${err.message}`,
                };
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
                this.pushNotificationService = new PushNotificationService_1.PushNotificationService(pushNotificationService.host, pushNotificationService.port, pushNotificationService.serviceVersion);
                return this.pushNotificationService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve push notification service from discovery service: ${err.message}`,
                };
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
                this.ratingService = new RatingService_1.RatingService(ratingService.host, ratingService.port, ratingService.serviceVersion);
                return this.ratingService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve rating service from discovery service: ${err.message}`,
                };
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
                this.accountingService = new AccountingService_1.AccountingService(accountingService.host, accountingService.port, accountingService.serviceVersion);
                return this.accountingService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve accounting service from discovery service: ${err.message}`,
                };
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
                this.checkinOutService = new CheckinOutService_1.CheckinOutService(checkinOutService.host, checkinOutService.port, checkinOutService.serviceVersion);
                return this.checkinOutService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve checkinout service from discovery service: ${err.message}`,
                };
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
                this.articlesService = new ArticlesService_1.ArticlesService(articlesService.host, articlesService.port, articlesService.serviceVersion);
                return this.articlesService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve articles service from discovery service: ${err.message}`,
                };
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
                this.templateDesigner = new TemplateDesigner_1.TemplateDesigner(templateDesigner.host, templateDesigner.port, templateDesigner.serviceVersion);
                return this.templateDesigner;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve template designer from discovery service: ${err.message}`,
                };
            }
        });
    }
    getMarkdownEditor() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.markdownEditor) {
                    return this.markdownEditor;
                }
                const markdownEditor = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/MarkdownEditor`);
                this.markdownEditor = new MarkdownEditor_1.MarkdownEditor(markdownEditor.host, markdownEditor.port, markdownEditor.serviceVersion);
                return this.markdownEditor;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve markdown editor from discovery service: ${err.message}`,
                };
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
                this.courseManagementService = new CourseManagementService_1.CourseManagementService(courseManagementService.host, courseManagementService.port, courseManagementService.serviceVersion);
                return this.courseManagementService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve course management service from discovery service: ${err.message}`,
                };
            }
        });
    }
    getEmailTemplateService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.emailTemplateService) {
                    return this.emailTemplateService;
                }
                const emailTemplateService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/EmailTemplateService`);
                this.emailTemplateService = new EmailTemplateService_1.EmailTemplateService(emailTemplateService.host, emailTemplateService.port, emailTemplateService.serviceVersion);
                return this.emailTemplateService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve email template service from discovery service: ${err.message}`,
                };
            }
        });
    }
    getPushTemplateService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.pushTemplateService) {
                    return this.pushTemplateService;
                }
                const pushTemplateService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/PushTemplateService`);
                this.pushTemplateService = new PushTemplateService_1.PushTemplateService(pushTemplateService.host, pushTemplateService.port, pushTemplateService.serviceVersion);
                return this.pushTemplateService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve push template service from discovery service: ${err.message}`,
                };
            }
        });
    }
    getPaypalIntegrationService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.paypalIntegrationService) {
                    return this.paypalIntegrationService;
                }
                const paypalIntegrationService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/PaypalIntegrationService`);
                this.paypalIntegrationService = new PaypalIntegrationService_1.PaypalIntegrationService(paypalIntegrationService.host, paypalIntegrationService.port, paypalIntegrationService.serviceVersion);
                return this.paypalIntegrationService;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve push template service from discovery service: ${err.message}`,
                };
            }
        });
    }
    registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/`, {
                    serviceName,
                    proxyRoute,
                    port: servicePort,
                    timeToLive: new Date(new Date().getTime() + 5 * 1000).toJSON(),
                    serviceVersion,
                    public: isPublic,
                    serviceType,
                });
            }
            catch (err) {
                throw new Error(`could not reach DiscoveryService: ${err.message}`);
            }
        });
    }
}
exports.DiscoveryService = DiscoveryService;
