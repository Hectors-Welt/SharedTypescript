import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation'
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';
import { IService } from './IService';

export interface IAccountingService extends IService {
  getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;

  getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;

  getSalesInfo(customerId: number, days: number): Promise<SalesInfo[]>;

  moveSalesToBistroAccount(customerId: number): Promise<any>;
}