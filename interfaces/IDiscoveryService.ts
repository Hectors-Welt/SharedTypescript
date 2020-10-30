import { LocationInfo } from '../models/DiscoveryService/LocationInfo';
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings';
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings';
import { BraintreeSettings } from '../models/DiscoveryService/BraintreeSettings';
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum';
import { ICustomerService } from './ICustomerService';
import { IEmployeesService } from './IEmployeesService';
import { IMembershipService } from './IMembershipService';
import { ITwoFactorAuthenticationService } from './ITwoFactorAuthenticationService';
import { IPushNotificationService } from './IPushNotificationService';
import { IRatingService } from './IRatingService';
import { IAccountingService } from './IAccountingService';
import { ICheckinOutService } from './ICheckinOutService';
import { IArticlesService } from './IArticlesService';
import { IMailingService } from './IMailingService';
import { ITemplateDesigner } from './ITemplateDesigner';
import { ICourseManagementService } from './ICourseManagementService';
import { IMarkdownEditor } from './IMarkdownEditor';
import { BackendSettings } from '../models/DiscoveryService/BackendSettings';
import { IEmailTemplateService } from './IEmailTemplateService';
import { IPushTemplateService } from './IPushTemplateService';
import { IPaypalIntegrationService } from './IPaypalIntegrationService';

export interface IDiscoveryService {
  port: number;
  host: string;
  baseUrl: string;

  startSelfRegistration(
    serviceName: string,
    serviceVersion: string,
    servicePort: number | string,
    proxyRoute: string,
    isPublic: boolean,
    serviceType: ServiceType,
  );

  invalidateCache(property: string);

  getLocationInfo(): Promise<LocationInfo>;

  getEnvironment(): Promise<any>;

  getEventStoreSettings(): Promise<EventStoreSettings>;

  getMongoDbSettings(): Promise<MongoDbSettings>;

  getRabbitMqSettings(): Promise<RabbitMqSettings>;

  getBackendSettings(): Promise<BackendSettings>;

  getHectorDbSettings(): Promise<HectorDbSettings>;

  getBraintreeSettings(): Promise<BraintreeSettings>;

  getMailingService(): Promise<IMailingService>;

  getCustomerService(): Promise<ICustomerService>;

  getEmployeesService(): Promise<IEmployeesService>;

  getMembershipService(): Promise<IMembershipService>;

  getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService>;

  getPushNotificationService(): Promise<IPushNotificationService>;

  getRatingService(): Promise<IRatingService>;

  getAccountingService(): Promise<IAccountingService>;

  getCheckinOutService(): Promise<ICheckinOutService>;

  getArticlesService(): Promise<IArticlesService>;

  getTemplateDesigner(): Promise<ITemplateDesigner>;

  getMarkdownEditor(): Promise<IMarkdownEditor>;

  getCourseManagementService(): Promise<ICourseManagementService>;

  getEmailTemplateService(): Promise<IEmailTemplateService>;

  getPushTemplateService(): Promise<IPushTemplateService>;

  getPaypalIntegrationService(): Promise<IPaypalIntegrationService>;

  getClubs(): Promise<any>;

  getTitles(): Promise<any>;

  getContactCategories(): Promise<any>;

  getEmployeeRoles(): Promise<any>;

  getDevices(): Promise<any>;
}
