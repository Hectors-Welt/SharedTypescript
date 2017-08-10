import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings';
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings';
import { ServiceType } from '../models/DiscoveryService/ServiceTypeEnum';
import { ICustomerService } from './ICustomerService';
import { IEmployeesService } from './IEmployeesService';
import { IMembershipService } from './IMembershipService';
import { ITwoFactorAuthenticationService } from './ITwoFactorAuthenticationService';
import { IPushNotificationService } from './IPushNotificationService';
import { IRatingService } from './IRatingService';
import { ILegacyAppsiteBackend } from './ILegacyAppsiteBackend';
export interface IDiscoveryService {
    host: string;
    port: number;
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string, proxyRoute: string, isPublic: boolean, serviceType: ServiceType): any;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getRabbitMqSettings(): Promise<RabbitMqSettings>;
    getHectorDbSettings(): Promise<HectorDbSettings>;
    getCustomerService(): Promise<ICustomerService>;
    getEmployeesService(): Promise<IEmployeesService>;
    getMembershipService(): Promise<IMembershipService>;
    getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService>;
    getPushNotificationService(): Promise<IPushNotificationService>;
    getRatingService(): Promise<IRatingService>;
    getLegacyAppsiteBackend(): Promise<ILegacyAppsiteBackend>;
}
