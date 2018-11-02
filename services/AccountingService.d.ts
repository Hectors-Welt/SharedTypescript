import { IAccountingService } from '../interfaces/IAccountingService';
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';
export declare class AccountingService implements IAccountingService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;
    getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;
    getSalesInfo(customerId: number, days: number): Promise<SalesInfo[]>;
    moveSalesToBistroAccount(customerId: number): Promise<any>;
}
