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
import { ICourseManagementService } from '../interfaces/ICourseManagamentService';
import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';
import { DeviceConfig } from '../models/DiscoveryService/DeviceConfig';
export declare class DiscoveryService implements IDiscoveryService {
    baseUrl: string;
    host: string;
    port: number;
    timer: NodeJS.Timer;
    private locationInfo;
    private environment;
    private eventStoreSettings;
    private mongoDbSettings;
    private rabbitMqSettings;
    private hectorDbSettings;
    private braintreeSettings;
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
    constructor(host: string, port: number);
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType): Promise<void>;
    invalidateCache(property: string): void;
    getLocationInfo(): Promise<LocationInfo>;
    getEnvironment(): Promise<any>;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getDevices(): Promise<Array<DeviceConfig>>;
    getRabbitMqSettings(): Promise<RabbitMqSettings>;
    getHectorDbSettings(): Promise<HectorDbSettings>;
    getBraintreeSettings(): Promise<BraintreeSettings>;
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
    private registerService;
}
