import { LocationInfo } from '../models/DiscoveryService/LocationInfo';
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings';
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings';
import { BraintreeSettings } from '../models/DiscoveryService/BraintreeSettings';
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum';
import { ITemplateDesigner } from '../interfaces/ITemplateDesigner';
import { TemplateDesigner } from './TemplateDesigner';
import { ApiClient } from './ApiClient';
import { IDiscoveryService } from '../interfaces/IDiscoveryService';
import { ICustomerService } from '../interfaces/ICustomerService';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { IMembershipService } from '../interfaces/IMembershipService';
import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService';
import { IPushNotificationService } from '../interfaces/IPushNotificationService';
import { IRatingService } from '../interfaces/IRatingService';
import { IAccountingService } from '../interfaces/IAccountingService';
import { ICheckinOutService } from '../interfaces/ICheckinOutService';
import { IArticlesService } from '../interfaces/IArticlesService';
import { IMailingService } from '../interfaces/IMailingService';
import { ISMSService } from '../interfaces/ISMSService';
import { MembershipService } from './MembershipService';
import { EmployeesService } from './EmployeesService';
import { CustomerService } from './CustomerService';
import { TwoFactorAuthenticationService } from './TwoFactorAuthenticationService';
import { PushNotificationService } from './PushNotificationService';
import { RatingService } from './RatingService';
import { AccountingService } from './AccountingService';
import { CheckinOutService } from './CheckinOutService';
import { ArticlesService } from './ArticlesService';
import { MailingService } from './MailingService';
import { SMSService } from './SMSService';
import { ICourseManagementService } from '../interfaces/ICourseManagementService';
import { CourseManagementService } from './CourseManagementService';
import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';
import { MarkdownEditor } from './MarkdownEditor';
import { DeviceConfig } from '../models/DiscoveryService/DeviceConfig';
import { BackendSettings } from '../models/DiscoveryService/BackendSettings';
import { IEmailTemplateService } from '../interfaces/IEmailTemplateService';
import { EmailTemplateService } from './EmailTemplateService';
import { IPushTemplateService } from '../interfaces/IPushTemplateService';
import { PushTemplateService } from '../services/PushTemplateService';
import { IPaypalIntegrationService } from '../interfaces/IPaypalIntegrationService';
import { PaypalIntegrationService } from './PaypalIntegrationService';
import { MollieSettings } from '../models/DiscoveryService/MollieSettings';

import isDocker = require('is-docker');
import { ISecaConnector } from '../interfaces/ISecaConnector';
import { SecaConnector } from './SecaConnector';

export class DiscoveryService implements IDiscoveryService {
  public baseUrl: string;
  public host: string;
  public port: number;
  public timer: NodeJS.Timer;
  private locationInfo: LocationInfo;
  private environment: any;
  private eventStoreSettings: EventStoreSettings;
  private mongoDbSettings: MongoDbSettings;
  private rabbitMqSettings: RabbitMqSettings;
  private backendSettings: BackendSettings;
  private hectorDbSettings: HectorDbSettings;
  private braintreeSettings: BraintreeSettings;
  private mollieSettings: MollieSettings;
  private customerService: ICustomerService;
  private employeesService: IEmployeesService;
  private membershipService: IMembershipService;
  private twoFactorAuthenticationService: ITwoFactorAuthenticationService;
  private pushNotificationService: IPushNotificationService;
  private ratingService: IRatingService;
  private accountingService: IAccountingService;
  private checkinOutService: ICheckinOutService;
  private articlesService: IArticlesService;
  private mailingService: IMailingService;
  private smsService: ISMSService;
  private templateDesigner: ITemplateDesigner;
  private markdownEditor: IMarkdownEditor;
  private courseManagementService: ICourseManagementService;
  private emailTemplateService: IEmailTemplateService;
  private pushTemplateService: IPushTemplateService;
  private paypalIntegrationService: IPaypalIntegrationService;
  private secaConnector: ISecaConnector;

  constructor(host: string, port: number) {
    this.host = isDocker() ? 'discoveryservice' : host;
    this.port = isDocker() ? 80 : port;
    this.baseUrl = `http://${this.host}:${this.port}`;
    console.log("DiscoveryService running at:", this.baseUrl);
  }

  async startSelfRegistration(
    serviceName: string,
    serviceVersion: string,
    host: string,
    servicePort: number | string,
    proxyRoute: string,
    isPublic: boolean,
    serviceType: ServiceType,
  ) {
    if (!isDocker()) {
      host = 'localhost';
    }

    this.timer = setInterval(
      () =>
        this.registerService(serviceName, serviceVersion, host, servicePort, proxyRoute, isPublic, serviceType).catch(
          () => null,
        ),
      5 * 1000,
    );
  }

  invalidateCache(property: string) {
    if (this[property]) {
      this[property] = null;
    }
  }

  async getLocationInfo(): Promise<LocationInfo> {
    try {
      if (!this.locationInfo) {
        this.locationInfo = await new LocationInfo(await ApiClient.GET(`${this.baseUrl}/clubInfo`));
      }
      return this.locationInfo;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve location info from discovery service: ${err.message}`,
      };
    }
  }

  async getEnvironment(): Promise<any> {
    try {
      if (!this.environment) {
        this.environment = await ApiClient.GET(`${this.baseUrl}/environment`);
      }
      return this.environment;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve environment from discovery service: ${err.message}`,
      };
    }
  }

  async getEventStoreSettings(): Promise<EventStoreSettings> {
    try {
      if (!this.eventStoreSettings) {
        this.eventStoreSettings = new EventStoreSettings(await ApiClient.GET(`${this.baseUrl}/eventstore`));
      }
      return this.eventStoreSettings;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve eventstore settings from discovery service: ${err.message}`,
      };
    }
  }

  async getMongoDbSettings(): Promise<MongoDbSettings> {
    try {
      if (this.mongoDbSettings) {
        return this.mongoDbSettings;
      }

      if (isDocker()) {
        this.mongoDbSettings = new MongoDbSettings({
          host: process.env.MONGODB_HOST,
          port: process.env.MONGODB_PORT,
          username: process.env.MONGODB_USERNAME,
          password: process.env.MONGODB_PASSWORD,
        });
      }
      else {
        this.mongoDbSettings = new MongoDbSettings(await ApiClient.GET(`${this.baseUrl}/mongodb`));
      }

      return this.mongoDbSettings;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve mongodb settings from discovery service: ${err.message}`,
      };
    }
  }

  async getDevices(): Promise<Array<DeviceConfig>> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/devices`);
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve device configs from discovery service: ${err.message}`,
      };
    }
  }

  async getRabbitMqSettings(): Promise<RabbitMqSettings> {
    try {
      if (this.rabbitMqSettings) {
        return this.rabbitMqSettings;
      }

      if (isDocker()) {
        this.rabbitMqSettings = new RabbitMqSettings({
          host: process.env.RABBITMQ_HOST,
          port: process.env.RABBITMQ_PORT,
          vhost: process.env.RABBITMQ_VHOST,
          username: process.env.RABBITMQ_USERNAME,
          password: process.env.RABBITMQ_PASSWORD,
        });
      }
      else {
        this.rabbitMqSettings = new RabbitMqSettings(await ApiClient.GET(`${this.baseUrl}/rabbitmq`));
      }

      return this.rabbitMqSettings;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve rabbitmq settings from discovery service: ${err.message}`,
      };
    }
  }

  async getBackendSettings(): Promise<BackendSettings> {
    try {
      if (!this.backendSettings) {
        this.backendSettings = new BackendSettings(await ApiClient.GET(`${this.baseUrl}/backend`));
      }
      return this.backendSettings;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve backend settings from discovery service: ${err.message}`,
      };
    }
  }

  async getHectorDbSettings(): Promise<HectorDbSettings> {
    try {
      if (!this.hectorDbSettings) {
        this.hectorDbSettings = new HectorDbSettings(await ApiClient.GET(`${this.baseUrl}/connection`));
      }
      return this.hectorDbSettings;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve hector db settings from discovery service: ${err.message}`,
      };
    }
  }

  async getBraintreeSettings(): Promise<BraintreeSettings> {
    try {
      if (!this.braintreeSettings) {
        this.braintreeSettings = new BraintreeSettings(await ApiClient.GET(`${this.baseUrl}/braintree`));
      }
      return this.braintreeSettings;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve hector braintree from discovery service: ${err.message}`,
      };
    }
  }

  async getMollieSettings(): Promise<MollieSettings> {
    try {
      if (!this.mollieSettings) {
        this.mollieSettings = new MollieSettings(await ApiClient.GET(`${this.baseUrl}/mollie`));
      }
      return this.mollieSettings;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve mollie settings from discovery service: ${err.message}`,
      };
    }
  }

  async getClubs(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs`);
    } catch (err) {
      throw new Error(`failed to retrieve clubs from discovery service: ${err.message}`);
    }
  }

  async getTitles(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/titles`);
    } catch (err) {
      throw new Error(`failed to retrieve titles from discovery service: ${err.message}`);
    }
  }

  async getContactCategories(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/contactCategories`);
    } catch (err) {
      throw new Error(`failed to retrieve contact categories from discovery service: ${err.message}`);
    }
  }

  async getEmployeeRoles(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/employeeRoles`);
    } catch (err) {
      throw new Error(`failed to retrieve employee roles from discovery service: ${err.message}`);
    }
  }

  async getMailingService(): Promise<IMailingService> {
    try {
      if (this.mailingService) {
        return this.mailingService;
      }

      if (isDocker()) {
        this.mailingService = new MailingService('mailingservice', 80, null);
      }
      else {
        const mailingService = await ApiClient.GET(`${this.baseUrl}/MailingService`);
        if (mailingService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.mailingService = new MailingService(mailingService.host, mailingService.port, mailingService.serviceVersion);
      }

      return this.mailingService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve mailing service from discovery service: ${err.message}`,
      };
    }
  }

  async getSMSService(): Promise<ISMSService> {
    try {
      if (this.smsService) {
        return this.smsService;
      }

      if (isDocker()) {
        this.smsService = new SMSService('smsservice', 80, null);
      }
      else {
        const smsService = await ApiClient.GET(`${this.baseUrl}/SMSService`);
        if (smsService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.smsService = new SMSService(smsService.host, smsService.port, smsService.serviceVersion);
      }

      return this.smsService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve sms service from discovery service: ${err.message}`,
      };
    }
  }

  async getCustomerService(): Promise<ICustomerService> {
    try {
      if (this.customerService) {
        return this.customerService;
      }

      if (isDocker()) {
        this.customerService = new CustomerService('customerservice', 80, null);
      }
      else {
        const customerService = await ApiClient.GET(`${this.baseUrl}/CustomerService`);
        if (customerService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.customerService = new CustomerService(
          customerService.host,
          customerService.port,
          customerService.serviceVersion,
        );
      }

      return this.customerService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve customer service from discovery service: ${err.message}`,
      };
    }
  }

  async getEmployeesService(): Promise<IEmployeesService> {
    try {
      if (this.employeesService) {
        return this.employeesService;
      }

      if (isDocker()) {
        this.employeesService = new EmployeesService('employeesservice', 80, null);
      }
      else {
        const employeesService = await ApiClient.GET(`${this.baseUrl}/EmployeesService`);
        if (employeesService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.employeesService = new EmployeesService(
          employeesService.host,
          employeesService.port,
          employeesService.serviceVersion,
        );
      }

      return this.employeesService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve employees service from discovery service: ${err.message}`,
      };
    }
  }

  async getMembershipService(): Promise<IMembershipService> {
    try {
      if (this.membershipService) {
        return this.membershipService;
      }

      if (isDocker()) {
        this.membershipService = new MembershipService('membershipservice', 80, null);
      }
      else {
        const membershipService = await ApiClient.GET(`${this.baseUrl}/MembershipService`);
        if (membershipService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.membershipService = new MembershipService(
          membershipService.host,
          membershipService.port,
          membershipService.serviceVersion,
        );
      }
      return this.membershipService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve membership service from discovery service: ${err.message}`,
      };
    }
  }

  async getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService> {
    try {
      if (this.twoFactorAuthenticationService) {
        return this.twoFactorAuthenticationService;
      }

      if (isDocker()) {
        this.twoFactorAuthenticationService = new TwoFactorAuthenticationService('twofactorauthenticationservice', 80, null);
      }
      else {
        const twoFactorAuthenticationService = await ApiClient.GET(`${this.baseUrl}/TwoFactorAuthenticationService`);
        if (twoFactorAuthenticationService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.twoFactorAuthenticationService = new TwoFactorAuthenticationService(
          twoFactorAuthenticationService.host,
          twoFactorAuthenticationService.port,
          twoFactorAuthenticationService.serviceVersion,
        );
      }

      return this.twoFactorAuthenticationService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve two factor authentication service from discovery service: ${err.message}`,
      };
    }
  }

  async getPushNotificationService(): Promise<IPushNotificationService> {
    try {
      if (this.pushNotificationService) {
        return this.pushNotificationService;
      }

      if (isDocker()) {
        this.pushNotificationService = new PushNotificationService('pushnotificationservice', 80, null);
      }
      else {
        const pushNotificationService = await ApiClient.GET(`${this.baseUrl}/PushNotificationService`);
        if (pushNotificationService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.pushNotificationService = new PushNotificationService(
          pushNotificationService.host,
          pushNotificationService.port,
          pushNotificationService.serviceVersion,
        );
      }

      return this.pushNotificationService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve push notification service from discovery service: ${err.message}`,
      };
    }
  }

  async getRatingService(): Promise<IRatingService> {
    try {
      if (this.ratingService) {
        return this.ratingService;
      }

      if (isDocker()) {
        this.ratingService = new RatingService('ratingservice', 80, null);
      }
      else {
        const ratingService = await ApiClient.GET(`${this.baseUrl}/RatingService`);
        if (ratingService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.ratingService = new RatingService(ratingService.host, ratingService.port, ratingService.serviceVersion);
      }

      return this.ratingService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve rating service from discovery service: ${err.message}`,
      };
    }
  }

  async getAccountingService(): Promise<IAccountingService> {
    try {
      if (this.accountingService) {
        return this.accountingService;
      }

      if (isDocker()) {
        this.accountingService = new AccountingService('accountingservice', 80, null);
      }
      else {
        const accountingService = await ApiClient.GET(`${this.baseUrl}/AccountingService`);
        if (accountingService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.accountingService = new AccountingService(
          accountingService.host,
          accountingService.port,
          accountingService.serviceVersion,
        );
      }

      return this.accountingService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve accounting service from discovery service: ${err.message}`,
      };
    }
  }

  async getCheckinOutService(): Promise<ICheckinOutService> {
    try {
      if (this.checkinOutService) {
        return this.checkinOutService;
      }

      if (isDocker()) {
        this.checkinOutService = new CheckinOutService('checkinoutservice', 80, null);
      }
      else {
        const checkinOutService = await ApiClient.GET(`${this.baseUrl}/CheckinOutService`);
        if (checkinOutService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.checkinOutService = new CheckinOutService(
          checkinOutService.host,
          checkinOutService.port,
          checkinOutService.serviceVersion,
        );
      }

      return this.checkinOutService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve checkinout service from discovery service: ${err.message}`,
      };
    }
  }

  async getArticlesService(): Promise<IArticlesService> {
    try {
      if (this.articlesService) {
        return this.articlesService;
      }

      if (isDocker()) {
        this.articlesService = new ArticlesService('articlesservice', 80, null);
      }
      else {
        const articlesService = await ApiClient.GET(`${this.baseUrl}/ArticlesService`);
        if (articlesService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.articlesService = new ArticlesService(
          articlesService.host,
          articlesService.port,
          articlesService.serviceVersion,
        );
      }

      return this.articlesService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve articles service from discovery service: ${err.message}`,
      };
    }
  }

  async getTemplateDesigner(): Promise<ITemplateDesigner> {
    try {
      if (this.templateDesigner) {
        return this.templateDesigner;
      }
      if (isDocker()) {
        this.templateDesigner = new TemplateDesigner('templatedesigner', 80, null);
      }
      else {
        const templateDesigner = await ApiClient.GET(`${this.baseUrl}/TemplateDesigner`);
        if (templateDesigner.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.templateDesigner = new TemplateDesigner(
          templateDesigner.host,
          templateDesigner.port,
          templateDesigner.serviceVersion,
        );
      }

      return this.templateDesigner;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve template designer from discovery service: ${err.message}`,
      };
    }
  }

  async getMarkdownEditor(): Promise<IMarkdownEditor> {
    try {
      if (this.markdownEditor) {
        return this.markdownEditor;
      }

      if (isDocker()) {
        this.markdownEditor = new MarkdownEditor('markdowneditor', 80, null);
      }
      else {
        const markdownEditor = await ApiClient.GET(`${this.baseUrl}/MarkdownEditor`);
        if (markdownEditor.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.markdownEditor = new MarkdownEditor(markdownEditor.host, markdownEditor.port, markdownEditor.serviceVersion);
      }

      return this.markdownEditor;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve markdown editor from discovery service: ${err.message}`,
      };
    }
  }

  async getCourseManagementService(): Promise<ICourseManagementService> {
    try {
      if (this.courseManagementService) {
        return this.courseManagementService;
      }

      if (isDocker()) {
        this.courseManagementService = new CourseManagementService('coursemanagementservice', 80, null);
      }
      else {
        const courseManagementService = await ApiClient.GET(`${this.baseUrl}/CourseManagementService`);
        if (courseManagementService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.courseManagementService = new CourseManagementService(
          courseManagementService.host,
          courseManagementService.port,
          courseManagementService.serviceVersion,
        );
      }

      return this.courseManagementService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve course management service from discovery service: ${err.message}`,
      };
    }
  }

  async getEmailTemplateService(): Promise<IEmailTemplateService> {
    try {
      if (this.emailTemplateService) {
        return this.emailTemplateService;
      }

      if (isDocker()) {
        this.emailTemplateService = new EmailTemplateService('emailtemplateservice', 80, null);
      }
      else {
        const emailTemplateService = await ApiClient.GET(`${this.baseUrl}/EmailTemplateService`);
        if (emailTemplateService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.emailTemplateService = new EmailTemplateService(
          emailTemplateService.host,
          emailTemplateService.port,
          emailTemplateService.serviceVersion,
        );
      }

      return this.emailTemplateService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve email template service from discovery service: ${err.message}`,
      };
    }
  }

  async getPushTemplateService(): Promise<IPushTemplateService> {
    try {
      if (this.pushTemplateService) {
        return this.pushTemplateService;
      }

      if (isDocker()) {
        this.pushTemplateService = new PushTemplateService('pushtemplateservice', 80, null);
      }
      else {
        const pushTemplateService = await ApiClient.GET(`${this.baseUrl}/PushTemplateService`);
        if (pushTemplateService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.pushTemplateService = new PushTemplateService(
          pushTemplateService.host,
          pushTemplateService.port,
          pushTemplateService.serviceVersion,
        );
      }

      return this.pushTemplateService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve push template service from discovery service: ${err.message}`,
      };
    }
  }

  async getPaypalIntegrationService(): Promise<IPaypalIntegrationService> {
    try {
      if (this.paypalIntegrationService) {
        return this.paypalIntegrationService;
      }

      if (isDocker()) {
        this.paypalIntegrationService = new PaypalIntegrationService('paypalintegrationservice', 80, null);
      }
      else {
        const paypalIntegrationService = await ApiClient.GET(`${this.baseUrl}/PaypalIntegrationService`);
        if (paypalIntegrationService.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.paypalIntegrationService = new PaypalIntegrationService(
          paypalIntegrationService.host,
          paypalIntegrationService.port,
          paypalIntegrationService.serviceVersion,
        );
      }

      return this.paypalIntegrationService;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve push template service from discovery service: ${err.message}`,
      };
    }
  }

  async getSecaConnector(): Promise<ISecaConnector> {
    try {
      if (this.secaConnector) {
        return this.secaConnector;
      }

      if (isDocker()) {
        this.secaConnector = new SecaConnector('secaconnector', 80, null);
      }
      else {
        const secaConnector = await ApiClient.GET(`${this.baseUrl}/SecaConnector`);
        if (secaConnector.port == 0){
          throw {
            message: 'not running'
          };
        }
        this.secaConnector = new SecaConnector(
          secaConnector.host,
          secaConnector.port,
          secaConnector.serviceVersion,
        );
      }

      return this.secaConnector;
    } catch (err) {
      throw {
        status: 503,
        message: `failed to retrieve seca connector from discovery service: ${err.message}`,
      };
    }
  }

  private async registerService(
    serviceName: string,
    serviceVersion: string,
    host: string,
    servicePort: number | string,
    proxyRoute: string,
    isPublic: boolean,
    serviceType: ServiceType,
  ) {
    try {
      return await ApiClient.POST(`${this.baseUrl}`, {
        serviceName,
        proxyRoute,
        host,
        port: servicePort,
        timeToLive: new Date(new Date().getTime() + 5 * 1000).toJSON(),
        serviceVersion,
        public: isPublic,
        serviceType,
      });
    } catch (err) {
      throw new Error(`could not reach DiscoveryService: ${err.message}`);
    }
  }
}
