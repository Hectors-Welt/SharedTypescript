/// <reference types="node" />
import { LocationInfo } from '../models/DiscoveryService/LocationInfo';
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings';
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings';
import { BraintreeSettings } from '../models/DiscoveryService/BraintreeSettings';
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum';
import { IDiscoveryService } from '../interfaces/IDiscoveryService';
import { ICustomerService } from '../interfaces/ICustomerService';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { IMembershipService } from '../interfaces/IMembershipService';
import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService';
import { IPushNotificationService } from '../interfaces/IPushNotificationService';
import { IRatingService } from '../interfaces/IRatingService';
import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend';
import { IAccountingService } from '../interfaces/IAccountingService';
import { ICheckinOutService } from '../interfaces/ICheckinOutService';
import { IArticlesService } from '../interfaces/IArticlesService';
import { IMailingService } from '../interfaces/IMailingService';
import { ISMSService } from '../interfaces/ISMSService';
export declare class DiscoveryService implements IDiscoveryService {
    host: string;
    port: number;
    timer: NodeJS.Timer;
    private customerService;
    private employeesService;
    private membershipService;
    private twoFactorAuthenticationService;
    private pushNotificationService;
    private ratingService;
    private legacyAppsiteBackend;
    private accountingService;
    private checkinOutService;
    private articlesService;
    private mailingService;
    private smsService;
    constructor(host: string, port: number);
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType): void;
    getLocationInfo(): Promise<LocationInfo>;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getRabbitMqSettings(): Promise<RabbitMqSettings>;
    getHectorDbSettings(): Promise<HectorDbSettings>;
    getBraintreeSettings(): Promise<BraintreeSettings>;
    getMailingService(): Promise<IMailingService>;
    getSMSService(): Promise<ISMSService>;
    getCustomerService(): Promise<ICustomerService>;
    getEmployeesService(): Promise<IEmployeesService>;
    getMembershipService(): Promise<IMembershipService>;
    getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService>;
    getPushNotificationService(): Promise<IPushNotificationService>;
    getRatingService(): Promise<IRatingService>;
    getLegacyAppsiteBackend(): Promise<ILegacyAppsiteBackend>;
    getAccountingService(): Promise<IAccountingService>;
    getCheckinOutService(): Promise<ICheckinOutService>;
    getArticlesService(): Promise<IArticlesService>;
    private registerService(serviceName, serviceVersion, servicePort, proxyRoute, isPublic, serviceType);
}
