import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';
export interface IAccountingService {
    getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;
    getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;
    getSalesInfo(customerId: number, days: number): Promise<SalesInfo[]>;
}
