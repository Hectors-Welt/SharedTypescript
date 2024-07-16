import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
import { Checkin } from '../models/CheckinOutService/Checkin';
import { AccessArea } from '../models/CheckinOutService/AccessArea';
import { IService } from './IService';
import { CurrentCheckins } from '../models/CheckinOutService/CurrentCheckins';
import { CommandResult } from '../models/CheckinOutService/CommandResult';
import { CheckinOutCommandResult } from '../models/CheckinOutService/CheckinOutCommandResult';
import { CheckinCommand } from '../models/CheckinOutService/CheckinCommand';
import { CheckoutCommand } from '../models/CheckinOutService/CheckoutCommand';

export interface ICheckinOutService extends IService {
  getAccessAreasAvailable(): Promise<AccessArea[]>;

  getCheckinStatus(customerId: number): Promise<CheckinStatus>;
  
  getCustomersPresent(studioNumber?: number): Promise<CheckinStatus[]>;

  getCheckins(customerId: number): Promise<Checkin[]>;

  isAccessAllowed(customerId: number, timeSlotRequired: boolean, checkOpeningHours: boolean, accessAreas?: string[]): Promise<boolean>;
  
  isCheckoutAllowed(customerId: number): Promise<boolean>;

  checkin(customerId: number, checkinCommand: CheckinCommand): Promise<CheckinOutCommandResult>;

  checkout(customerId: number, checkoutCommand: CheckoutCommand): Promise<CheckinOutCommandResult>;

  getCurrentCheckinCount(studioNumber: number): Promise<CurrentCheckins>;

  getCurrentCheckinCounts(): Promise<CurrentCheckins[]>;

  setAccessGrantedTill(customerId: number, accessGrantedTill: string): Promise<any>;

  removeAccessGrantedTill(customerId: number): Promise<any>;
  
  getAccessAreasCurrentlyAllowed(customerId: number): Promise<AccessArea[]>;

  updateCheckinRemark(customerId: number, checkinRemark: string): Promise<CommandResult>;

  enterLocation(customerId: number, location: string, studioNumber: number): Promise<any>;

  leaveLocation(customerId: number, studioNumber: number): Promise<any>;
}
