import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';
import { IService } from './IService';
import { SepaDirectDebit } from '../models/AccountingService/SepaDirectDebit';
export interface IAccountingService extends IService {
    getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;
    getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;
    sepaBookingInformation(customerId: number): Promise<SepaDirectDebit[]>;
    getSalesInfo(customerId: number, days: number): Promise<SalesInfo[]>;
    moveSalesToBistroAccount(customerId: number): Promise<any>;
}
