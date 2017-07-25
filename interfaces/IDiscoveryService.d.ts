import { EventStoreSettings } from '../models/EventStoreSettings';
import { MongoDbSettings } from '../models/MongoDbSettings';
import { HectorDbSettings } from '../models/HectorDbSettings';
import { ICustomerService } from './ICustomerService';
import { IEmployeesService } from './IEmployeesService';
import { IMembershipService } from './IMembershipService';
import { ITwoFactorAuthenticationService } from './ITwoFactorAuthenticationService';
import { IPushNotificationService } from './IPushNotificationService';
export interface IDiscoveryService {
    host: string;
    port: number;
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string): any;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getHectorDbSettings(): Promise<HectorDbSettings>;
    getCustomerService(): Promise<ICustomerService>;
    getEmployeesService(): Promise<IEmployeesService>;
    getMembershipService(): Promise<IMembershipService>;
    getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService>;
    getPushNotificationService(): Promise<IPushNotificationService>;
}
