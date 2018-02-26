/// <reference types="node" />
import { LocationInfo } from '../models/DiscoveryService/LocationInfo';
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings';
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings';
import { BraintreeSettings } from '../models/DiscoveryService/BraintreeSettings';
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum';
import { ITemplateDesigner } from '../interfaces/ITemplateDesigner';
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
import { ICourseManagementService } from '../interfaces/ICourseManagamentservice';
import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';
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
    private registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType);
}
