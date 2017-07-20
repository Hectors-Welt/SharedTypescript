/// <reference types="node" />
import { EventStoreSettings } from '../models/EventStoreSettings';
import { MongoDbSettings } from '../models/MongoDbSettings';
import { IDiscoveryService } from '../interfaces/IDiscoveryService';
import { ICustomerService } from '../interfaces/ICustomerService';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { IMembershipService } from '../interfaces/IMembershipService';
export declare class DiscoveryService implements IDiscoveryService {
    host: string;
    port: number;
    timer: NodeJS.Timer;
    private customerService;
    private employeesService;
    private membershipService;
    constructor(host: string, port: number);
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string): void;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getCustomerService(): Promise<ICustomerService>;
    getEmployeesService(): Promise<IEmployeesService>;
    getMembershipService(): Promise<IMembershipService>;
    private registerService(serviceName, serviceVersion, servicePort);
}
