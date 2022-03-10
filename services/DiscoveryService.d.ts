/// <reference types="node" />
import { LocationInfo } from '../models/DiscoveryService/LocationInfo';
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings';
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings';
import { BraintreeSettings } from '../models/DiscoveryService/BraintreeSettings';
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum';
import { ITemplateDesigner } from '../interfaces/ITemplateDesigner';
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
import { ICourseManagementService } from '../interfaces/ICourseManagementService';
import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';
import { DeviceConfig } from '../models/DiscoveryService/DeviceConfig';
import { BackendSettings } from '../models/DiscoveryService/BackendSettings';
import { IEmailTemplateService } from '../interfaces/IEmailTemplateService';
import { IPushTemplateService } from '../interfaces/IPushTemplateService';
import { IPaypalIntegrationService } from '../interfaces/IPaypalIntegrationService';
import { MollieSettings } from '../models/DiscoveryService/MollieSettings';
import { ISecaConnector } from '../interfaces/ISecaConnector';
import { IEgymCloudConnector } from "../interfaces/IEgymCloudConnector";
export declare class DiscoveryService implements IDiscoveryService {
    baseUrl: string;
    host: string;
    port: number;
    timer: NodeJS.Timer;
    private requestingServiceName;
    private requestingServiceVersion;
    private locationInfo;
    private environment;
    private eventStoreSettings;
    private mongoDbSettings;
    private rabbitMqSettings;
    private backendSettings;
    private hectorDbSettings;
    private braintreeSettings;
    private mollieSettings;
    private customerService;
    private employeesService;
    private membershipService;
    private twoFactorAuthenticationService;
    private pushNotificationService;
    private ratingService;
    private accountingService;
    private checkinOutService;
    private articlesService;
    private mailingService;
    private smsService;
    private templateDesigner;
    private markdownEditor;
    private courseManagementService;
    private emailTemplateService;
    private pushTemplateService;
    private paypalIntegrationService;
    private secaConnector;
    private egymCloudConnector;
    constructor(host: string, port: number, requestingServiceName: string, requestingServiceVersion: string);
    startSelfRegistration(serviceName: string, serviceVersion: string, host: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType): Promise<void>;
    invalidateCache(property: string): void;
    getLocationInfo(): Promise<LocationInfo>;
    getEnvironment(): Promise<any>;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getDevices(): Promise<Array<DeviceConfig>>;
    getRabbitMqSettings(): Promise<RabbitMqSettings>;
    getBackendSettings(): Promise<BackendSettings>;
    getHectorDbSettings(): Promise<HectorDbSettings>;
    getBraintreeSettings(): Promise<BraintreeSettings>;
    getMollieSettings(): Promise<MollieSettings>;
    getClubs(): Promise<any>;
    getTitles(): Promise<any>;
    getContactCategories(): Promise<any>;
    getEmployeeRoles(): Promise<any>;
    getMailingService(): Promise<IMailingService>;
    getSMSService(): Promise<ISMSService>;
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
    getSecaConnector(): Promise<ISecaConnector>;
    getEgymCloudConnector(): Promise<IEgymCloudConnector>;
    private registerService;
}
