import { EventStoreSettings } from '../models/EventStoreSettings';
import { MongoDbSettings } from '../models/MongoDbSettings';
import { ICustomerService } from '../interfaces/ICustomerService';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { IMembershipService } from '../interfaces/IMembershipService';
export interface IDiscoveryService {
    host: string;
    port: number;
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string): any;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getCustomerService(): Promise<ICustomerService>;
    getEmployeesService(): Promise<IEmployeesService>;
    getMembershipService(): Promise<IMembershipService>;
}
