import { IAccountingService } from '../interfaces/IAccountingService';
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
export declare class AccountingService implements IAccountingService {
    private host;
    private port;
    constructor(host: string, port: number);
    getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;
}
