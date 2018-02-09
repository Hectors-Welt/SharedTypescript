import { LocationInfo } from '../models/DiscoveryService/LocationInfo'
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings'
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings'
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings'
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings'
import { BraintreeSettings } from '../models/DiscoveryService/BraintreeSettings'
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum'
import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend'
import { ITemplateDesigner } from '../interfaces/ITemplateDesigner'
import { LegacyAppsiteBackend } from './LegacyAppsiteBackend'
import { TemplateDesigner } from './TemplateDesigner'
import { CloudServicesSettings } from '../models/DiscoveryService/CloudServicesSettings';
import { ApiClient } from './ApiClient';
import { IDiscoveryService } from '../interfaces/IDiscoveryservice';
import { ICustomerService } from '../interfaces/ICustomerservice';
import { IEmployeesService } from '../interfaces/IEmployeesservice';
import { IMembershipService } from '../interfaces/IMembershipservice';
import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationservice';
import { IPushNotificationService } from '../interfaces/IPushNotificationservice';
import { IRatingService } from '../interfaces/IRatingservice';
import { IAccountingService } from '../interfaces/IAccountingservice';
import { ICheckinOutService } from '../interfaces/ICheckinOutservice';
import { IArticlesService } from '../interfaces/IArticlesservice';
import { IMailingService } from '../interfaces/IMailingservice';
import { ISMSService } from '../interfaces/ISMSservice';
import { MembershipService } from './Membershipservice';
import { EmployeesService } from './Employeesservice';
import { CustomerService } from './Customerservice';
import { TwoFactorAuthenticationService } from './TwoFactorAuthenticationservice';
import { PushNotificationService } from './PushNotificationservice';
import { RatingService } from './Ratingservice';
import { AccountingService } from './Accountingservice';
import { CheckinOutService } from './CheckinOutservice';
import { ArticlesService } from './Articlesservice';
import { MailingService } from './Mailingservice';
import { SMSService } from './SMSservice';
import { ICourseManagementService } from '../interfaces/ICourseManagamentservice';
import { CourseManagementService } from './CourseManagementservice';

export class DiscoveryService implements IDiscoveryService {
  public baseUrl: string;
  public host: string;
  public port: number;
  public timer: NodeJS.Timer;
  private customerService: ICustomerService;
  private employeesService: IEmployeesService;
  private membershipService: IMembershipService;
  private twoFactorAuthenticationService: ITwoFactorAuthenticationService;
  private pushNotificationService: IPushNotificationService;
  private ratingService: IRatingService;
  private legacyAppsiteBackend: ILegacyAppsiteBackend;
  private accountingService: IAccountingService;
  private checkinOutService: ICheckinOutService;
  private articlesService: IArticlesService;
  private mailingService: IMailingService;
  private smsService: ISMSService;
  private templateDesigner: ITemplateDesigner;
  private courseManagementService: ICourseManagementService;

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
    this.baseUrl = `http://${host}:${port}`;
  }

  async startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType) {
    this.timer = setInterval(() => this.registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType).catch(() => null), 5 * 1000);
  }

  async getLocationInfo(): Promise<LocationInfo> {
    try {
      return new LocationInfo(await ApiClient.GET(`${this.baseUrl}/clubInfo`));
    } catch (err) {
      throw new Error(`failed to retrieve location info from discovery service: ${err.message}`);
    }
  }

  async getEnvironment(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/environment`);
    } catch (err) {
      throw new Error(`failed to retrieve environment from discovery service: ${err.message}`);
    }
  }

  async getEventStoreSettings(): Promise<EventStoreSettings> {
    try {
      return new EventStoreSettings(await ApiClient.GET(`${this.baseUrl}/eventstore`));
    } catch (err) {
      throw new Error(`failed to retrieve eventstore settings from discovery service: ${err.message}`);
    }
  }

  async getMongoDbSettings(): Promise<MongoDbSettings> {
    try {
      return new MongoDbSettings(await ApiClient.GET(`${this.baseUrl}/mongodb`));
    } catch (err) {
      throw new Error(`failed to retrieve mongodb settings from discovery service: ${err.message}`);
    }
  }

  async getRabbitMqSettings(): Promise<RabbitMqSettings> {
    try {
      return new RabbitMqSettings(await ApiClient.GET(`${this.baseUrl}/rabbitmq`));
    } catch (err) {
      throw new Error(`failed to retrieve rabbitmq settings from discovery service: ${err.message}`);
    }
  }

  async getHectorDbSettings(): Promise<HectorDbSettings> {
    try {
      return new HectorDbSettings(await ApiClient.GET(`${this.baseUrl}/connection`));
    } catch (err) {
      throw new Error(`failed to retrieve hector db settings from discovery service: ${err.message}`);
    }
  }

  async getBraintreeSettings(): Promise<BraintreeSettings> {
    try {
      return new BraintreeSettings(await ApiClient.GET(`${this.baseUrl}/braintree`))
    } catch (err) {
      throw new Error(`failed to retrieve hector braintree from discovery service: ${err.message}`);
    }
  }

  async getCloudServicesSettings(): Promise<CloudServicesSettings> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/cloudServices`);
    } catch (err) {
      throw new Error(`failed to retrieve cloud services settings from discovery service: ${err.message}`);
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
      const mailingService = await ApiClient.GET(`${this.baseUrl}/MailingService`);
      this.mailingService = new MailingService(mailingService.host, mailingService.port);
      return this.mailingService;
    } catch (err) {
      throw new Error(`failed to retrieve mailing service from discovery service: ${err.message}`);
    }
  }

  async getSMSService(): Promise<ISMSService> {
    try {
      if (this.smsService) {
        return this.smsService;
      }
      const smsService = await ApiClient.GET(`${this.baseUrl}/SMSService`);
      this.smsService = new SMSService(smsService.host, smsService.port);
      return this.smsService;
    } catch (err) {
      throw new Error(`failed to retrieve sms service from discovery service: ${err.message}`)
    }
  }

  async getCustomerService(): Promise<ICustomerService> {
    try {
      if (this.customerService) {
        return this.customerService;
      }
      const customerService = await ApiClient.GET(`${this.baseUrl}/CustomerService`);
      this.customerService = new CustomerService(customerService.host, customerService.port);
      return this.customerService;
    } catch (err) {
      throw new Error(`failed to retrieve customer service from discovery service: ${err.message}`);
    }
  }

  async getEmployeesService(): Promise<IEmployeesService> {
    try {
      if (this.employeesService) {
        return this.employeesService;
      }
      const employeesService = await ApiClient.GET(`${this.baseUrl}/EmployeesService`);
      this.employeesService = new EmployeesService(employeesService.host, employeesService.port);
      return this.employeesService;
    } catch (err) {
      throw new Error(`failed to retrieve employees service from discovery service: ${err.message}`);
    }
  }

  async getMembershipService(): Promise<IMembershipService> {
    try {
      if (this.membershipService) {
        return this.membershipService;
      }
      const membershipService = await ApiClient.GET(`${this.baseUrl}/MembershipService`);
      this.membershipService = new MembershipService(membershipService.host, membershipService.port);
      return this.membershipService;
    } catch (err) {
      throw new Error(`failed to retrieve membership service from discovery service: ${err.message}`);
    }
  }

  async getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService> {
    try {
      if (this.twoFactorAuthenticationService) {
        return this.twoFactorAuthenticationService;
      }
      const twoFactorAuthenticationService = await ApiClient.GET(`${this.baseUrl}/TwoFactorAuthenticationService`);
      this.twoFactorAuthenticationService = new TwoFactorAuthenticationService(twoFactorAuthenticationService.host, twoFactorAuthenticationService.port);
      return this.twoFactorAuthenticationService;
    } catch (err) {
      throw new Error(`failed to retrieve two factor authentication service from discovery service: ${err.message}`);
    }
  }

  async getPushNotificationService(): Promise<IPushNotificationService> {
    try {
      if (this.pushNotificationService) {
        return this.pushNotificationService;
      }
      const pushNotificationService = await ApiClient.GET(`${this.baseUrl}/PushNotificationService`);
      this.pushNotificationService = new PushNotificationService(pushNotificationService.host, pushNotificationService.port);
      return this.pushNotificationService;
    } catch (err) {
      throw new Error(`failed to retrieve push notification service from discovery service: ${err.message}`);
    }
  }

  async getRatingService(): Promise<IRatingService> {
    try {
      if (this.ratingService) {
        return this.ratingService;
      }
      const ratingService = await ApiClient.GET(`${this.baseUrl}/RatingService`);
      this.ratingService = new RatingService(ratingService.host, ratingService.port);
      return this.ratingService;
    } catch (err) {
      throw new Error(`failed to retrieve rating service from discovery service: ${err.message}`);
    }
  }

  async getLegacyAppsiteBackend(): Promise<ILegacyAppsiteBackend> {
    try {
      if (this.legacyAppsiteBackend) {
        return this.legacyAppsiteBackend;
      }
      const legacyAppsiteBackend = await ApiClient.GET(`${this.baseUrl}/LegacyAppsiteBackend`);
      this.legacyAppsiteBackend = new LegacyAppsiteBackend(legacyAppsiteBackend.host, legacyAppsiteBackend.port);
      return this.legacyAppsiteBackend;
    } catch (err) {
      throw new Error(`failed to retrieve legacy appsite backend from discovery service: ${err.message}`);
    }
  }

  async getAccountingService(): Promise<IAccountingService> {
    try {
      if (this.accountingService) {
        return this.accountingService;
      }
      const accountingService = await ApiClient.GET(`${this.baseUrl}/AccountingService`);
      this.accountingService = new AccountingService(accountingService.host, accountingService.port);
      return this.accountingService;
    } catch (err) {
      throw new Error(`failed to retrieve accounting service from discovery service: ${err.message}`);
    }
  }

  async getCheckinOutService(): Promise<ICheckinOutService> {
    try {
      if (this.checkinOutService) {
        return this.checkinOutService;
      }
      const checkinOutService = await ApiClient.GET(`${this.baseUrl}/CheckinOutService`);
      this.checkinOutService = new CheckinOutService(checkinOutService.host, checkinOutService.port);
      return this.checkinOutService;
    } catch (err) {
      throw new Error(`failed to retrieve checkinout service from discovery service: ${err.message}`);
    }
  }

  async getArticlesService(): Promise<IArticlesService> {
    try {
      if (this.articlesService) {
        return this.articlesService;
      }
      const articlesService = await ApiClient.GET(`${this.baseUrl}/ArticlesService`);
      this.articlesService = new ArticlesService(articlesService.host, articlesService.port);
      return this.articlesService;
    } catch (err) {
      throw new Error(`failed to retrieve articles service from discovery service: ${err.message}`);
    }
  }

  async getTemplateDesigner(): Promise<ITemplateDesigner> {
    try {
      if (this.templateDesigner) {
        return this.templateDesigner;
      }
      const templateDesigner = await ApiClient.GET(`${this.baseUrl}/TemplateDesigner`);
      this.templateDesigner = new TemplateDesigner(templateDesigner.host, templateDesigner.port);
      return this.templateDesigner;
    } catch (err) {
      throw new Error(`failed to retrieve template designer from discovery service: ${err.message}`);
    }
  }

  async getCourseManagementService(): Promise<ICourseManagementService> {
    try {
      if (this.courseManagementService) {
        return this.courseManagementService;
      }
      const courseManagementService = await ApiClient.GET(`${this.baseUrl}/CourseManagementService`);
      this.courseManagementService = new CourseManagementService(courseManagementService.host, courseManagementService.port);
      return this.courseManagementService;
    } catch (err) {
      throw new Error(`failed to retrieve template designer from discovery service: ${err.message}`);
    }
  }

  private async registerService(serviceName: string, serviceVersion: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType) {
    try {
      return await ApiClient.POST(`${this.baseUrl}/`, {
        serviceName,
        port: servicePort,
        timeToLive: new Date(new Date().getTime() + (5 * 1000)).toJSON(),
        serviceVersion,
        public: isPublic,
        serviceType,
        proxyRoute,
      })
    } catch (err) {
      throw new Error(`could not reach DiscoveryService: ${err.message}`);
    }
  }
}