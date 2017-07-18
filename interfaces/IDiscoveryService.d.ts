import EventStoreSettings from '../models/EventStoreSettings';
import MongoDbSettings from '../models/MongoDbSettings';
import ICustomerService from '../interfaces/ICustomerService';
import IEmployeesService from '../interfaces/IEmployeesService';
interface IDiscoveryService {
    host: string;
    port: number;
    startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string): any;
    getEventStoreSettings(): Promise<EventStoreSettings>;
    getMongoDbSettings(): Promise<MongoDbSettings>;
    getCustomerService(): Promise<ICustomerService>;
    getEmployeesService(): Promise<IEmployeesService>;
}
export default IDiscoveryService;
