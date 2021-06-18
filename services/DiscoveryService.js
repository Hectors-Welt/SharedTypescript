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
const MollieSettings_1 = require("../models/DiscoveryService/MollieSettings");
const isDocker = require("is-docker");
const SecaConnector_1 = require("./SecaConnector");
class DiscoveryService {
    constructor(host, port) {
        this.host = isDocker() ? 'discoveryservice' : host;
        this.port = isDocker() ? 80 : port;
        this.baseUrl = `http://${this.host}:${this.port}`;
        console.log("DiscoveryService running at:", this.baseUrl);
    }
    startSelfRegistration(serviceName, serviceVersion, host, servicePort, proxyRoute, isPublic, serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!isDocker()) {
                host = 'localhost';
            }
            this.timer = setInterval(() => this.registerService(serviceName, serviceVersion, host, servicePort, proxyRoute, isPublic, serviceType).catch(() => null), 5 * 1000);
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
                if (this.mongoDbSettings) {
                    return this.mongoDbSettings;
                }
                if (isDocker()) {
                    this.mongoDbSettings = new MongoDbSettings_1.MongoDbSettings({
                        host: process.env.MONGODB_HOST,
                        port: process.env.MONGODB_PORT,
                        username: process.env.MONGODB_USERNAME,
                        password: process.env.MONGODB_PASSWORD,
                    });
                }
                else {
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
                if (this.rabbitMqSettings) {
                    return this.rabbitMqSettings;
                }
                if (isDocker()) {
                    this.rabbitMqSettings = new RabbitMqSettings_1.RabbitMqSettings({
                        host: process.env.RABBITMQ_HOST,
                        port: process.env.RABBITMQ_PORT,
                        vhost: process.env.RABBITMQ_VHOST,
                        username: process.env.RABBITMQ_USERNAME,
                        password: process.env.RABBITMQ_PASSWORD,
                    });
                }
                else {
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
    getMollieSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.mollieSettings) {
                    this.mollieSettings = new MollieSettings_1.MollieSettings(yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/mollie`));
                }
                return this.mollieSettings;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve mollie settings from discovery service: ${err.message}`,
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
                if (isDocker()) {
                    this.mailingService = new MailingService_1.MailingService('mailingservice', 80, null);
                }
                else {
                    const mailingService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/MailingService`);
                    if (mailingService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.mailingService = new MailingService_1.MailingService(mailingService.host, mailingService.port, mailingService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.smsService = new SMSService_1.SMSService('smsservice', 80, null);
                }
                else {
                    const smsService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/SMSService`);
                    if (smsService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.smsService = new SMSService_1.SMSService(smsService.host, smsService.port, smsService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.customerService = new CustomerService_1.CustomerService('customerservice', 80, null);
                }
                else {
                    const customerService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/CustomerService`);
                    if (customerService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.customerService = new CustomerService_1.CustomerService(customerService.host, customerService.port, customerService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.employeesService = new EmployeesService_1.EmployeesService('employeesservice', 80, null);
                }
                else {
                    const employeesService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/EmployeesService`);
                    if (employeesService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.employeesService = new EmployeesService_1.EmployeesService(employeesService.host, employeesService.port, employeesService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.membershipService = new MembershipService_1.MembershipService('membershipservice', 80, null);
                }
                else {
                    const membershipService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/MembershipService`);
                    if (membershipService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.membershipService = new MembershipService_1.MembershipService(membershipService.host, membershipService.port, membershipService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.twoFactorAuthenticationService = new TwoFactorAuthenticationService_1.TwoFactorAuthenticationService('twofactorauthenticationservice', 80, null);
                }
                else {
                    const twoFactorAuthenticationService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/TwoFactorAuthenticationService`);
                    if (twoFactorAuthenticationService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.twoFactorAuthenticationService = new TwoFactorAuthenticationService_1.TwoFactorAuthenticationService(twoFactorAuthenticationService.host, twoFactorAuthenticationService.port, twoFactorAuthenticationService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.pushNotificationService = new PushNotificationService_1.PushNotificationService('pushnotificationservice', 80, null);
                }
                else {
                    const pushNotificationService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/PushNotificationService`);
                    if (pushNotificationService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.pushNotificationService = new PushNotificationService_1.PushNotificationService(pushNotificationService.host, pushNotificationService.port, pushNotificationService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.ratingService = new RatingService_1.RatingService('ratingservice', 80, null);
                }
                else {
                    const ratingService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/RatingService`);
                    if (ratingService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.ratingService = new RatingService_1.RatingService(ratingService.host, ratingService.port, ratingService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.accountingService = new AccountingService_1.AccountingService('accountingservice', 80, null);
                }
                else {
                    const accountingService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/AccountingService`);
                    if (accountingService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.accountingService = new AccountingService_1.AccountingService(accountingService.host, accountingService.port, accountingService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.checkinOutService = new CheckinOutService_1.CheckinOutService('checkinoutservice', 80, null);
                }
                else {
                    const checkinOutService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/CheckinOutService`);
                    if (checkinOutService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.checkinOutService = new CheckinOutService_1.CheckinOutService(checkinOutService.host, checkinOutService.port, checkinOutService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.articlesService = new ArticlesService_1.ArticlesService('articlesservice', 80, null);
                }
                else {
                    const articlesService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/ArticlesService`);
                    if (articlesService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.articlesService = new ArticlesService_1.ArticlesService(articlesService.host, articlesService.port, articlesService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.templateDesigner = new TemplateDesigner_1.TemplateDesigner('templatedesigner', 80, null);
                }
                else {
                    const templateDesigner = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/TemplateDesigner`);
                    if (templateDesigner.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.templateDesigner = new TemplateDesigner_1.TemplateDesigner(templateDesigner.host, templateDesigner.port, templateDesigner.serviceVersion);
                }
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
                if (isDocker()) {
                    this.markdownEditor = new MarkdownEditor_1.MarkdownEditor('markdowneditor', 80, null);
                }
                else {
                    const markdownEditor = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/MarkdownEditor`);
                    if (markdownEditor.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.markdownEditor = new MarkdownEditor_1.MarkdownEditor(markdownEditor.host, markdownEditor.port, markdownEditor.serviceVersion);
                }
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
                if (isDocker()) {
                    this.courseManagementService = new CourseManagementService_1.CourseManagementService('coursemanagementservice', 80, null);
                }
                else {
                    const courseManagementService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/CourseManagementService`);
                    if (courseManagementService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.courseManagementService = new CourseManagementService_1.CourseManagementService(courseManagementService.host, courseManagementService.port, courseManagementService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.emailTemplateService = new EmailTemplateService_1.EmailTemplateService('emailtemplateservice', 80, null);
                }
                else {
                    const emailTemplateService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/EmailTemplateService`);
                    if (emailTemplateService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.emailTemplateService = new EmailTemplateService_1.EmailTemplateService(emailTemplateService.host, emailTemplateService.port, emailTemplateService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.pushTemplateService = new PushTemplateService_1.PushTemplateService('pushtemplateservice', 80, null);
                }
                else {
                    const pushTemplateService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/PushTemplateService`);
                    if (pushTemplateService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.pushTemplateService = new PushTemplateService_1.PushTemplateService(pushTemplateService.host, pushTemplateService.port, pushTemplateService.serviceVersion);
                }
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
                if (isDocker()) {
                    this.paypalIntegrationService = new PaypalIntegrationService_1.PaypalIntegrationService('paypalintegrationservice', 80, null);
                }
                else {
                    const paypalIntegrationService = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/PaypalIntegrationService`);
                    if (paypalIntegrationService.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.paypalIntegrationService = new PaypalIntegrationService_1.PaypalIntegrationService(paypalIntegrationService.host, paypalIntegrationService.port, paypalIntegrationService.serviceVersion);
                }
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
    getSecaConnector() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.secaConnector) {
                    return this.secaConnector;
                }
                if (isDocker()) {
                    this.secaConnector = new SecaConnector_1.SecaConnector('secaconnector', 80, null);
                }
                else {
                    const secaConnector = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/SecaConnector`);
                    if (secaConnector.port == 0) {
                        throw {
                            message: 'not running'
                        };
                    }
                    this.secaConnector = new SecaConnector_1.SecaConnector(secaConnector.host, secaConnector.port, secaConnector.serviceVersion);
                }
                return this.secaConnector;
            }
            catch (err) {
                throw {
                    status: 503,
                    message: `failed to retrieve seca connector from discovery service: ${err.message}`,
                };
            }
        });
    }
    registerService(serviceName, serviceVersion, host, servicePort, proxyRoute, isPublic, serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}`, {
                    serviceName,
                    proxyRoute,
                    host,
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
