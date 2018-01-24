import { IAccountingService } from '../interfaces/IAccountingService';
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
export declare class AccountingService implements IAccountingService {
    private host;
    private port;
    constructor(host: string, port: number);
    getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;
    getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;
}
