import { EventStoreSettings } from '../models/EventStoreSettings';
import { MongoDbSettings } from '../models/MongoDbSettings';
import { HectorDbSettings } from '../models/HectorDbSettings';
import { ICustomerService } from './ICustomerService';
import { IEmployeesService } from './IEmployeesService';
import { IMembershipService } from './IMembershipService';
import { ITwoFactorAuthenticationService } from './ITwoFactorAuthenticationService'

export interface IDiscoveryService {
  host: string
  port: number

  startSelfRegistration(serviceName: string, serviceVersion: string, servicePort: number | string)

  getEventStoreSettings(): Promise<EventStoreSettings>,

  getMongoDbSettings(): Promise<MongoDbSettings>;

  getHectorDbSettings(): Promise<HectorDbSettings>;

  getCustomerService(): Promise<ICustomerService>;

  getEmployeesService(): Promise<IEmployeesService>;

  getMembershipService(): Promise<IMembershipService>;

  getTwoFactorAuthenticationService(): Promise<ITwoFactorAuthenticationService>;
}