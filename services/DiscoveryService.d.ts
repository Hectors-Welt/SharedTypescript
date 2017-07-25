/// <reference types="node" />
import { EventStoreSettings } from '../models/DiscoveryService/EventStoreSettings';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
import { RabbitMqSettings } from '../models/DiscoveryService/RabbitMqSettings';
import { HectorDbSettings } from '../models/DiscoveryService/HectorDbSettings';
import { IDiscoveryService } from '../interfaces/IDiscoveryService';
import { ICustomerService } from '../interfaces/ICustomerService';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { IMembershipService } from '../interfaces/IMembershipService';
import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService';
import { IPushNotificationService } from '../interfaces/IPushNotificationService';
export declare class DiscoveryService implements IDiscoveryService {
    host: string;
    port: number;
    timer: NodeJS.Timer;
    private customerService;
    private employeesService;
    private membershipService;
    private twoFactorAuthenticationService;
    private pushNotificationService;
    constructor(host: string, port: number);
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string): void;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getRabbitMqSettings(): Promise<RabbitMqSettings>;
    getHectorDbSettings(): Promise<HectorDbSettings>;
    getCustomerService(): Promise<ICustomerService>;
    getEmployeesService(): Promise<IEmployeesService>;
    getMembershipService(): Promise<IMembershipService>;
    getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService>;
    getPushNotificationService(): Promise<IPushNotificationService>;
    private registerService(serviceName, serviceVersion, servicePort);
}
