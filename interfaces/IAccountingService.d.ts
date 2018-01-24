import { ClubAccountInformation } from '../Models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
export interface IAccountingService {
    getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;
    getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;
}
