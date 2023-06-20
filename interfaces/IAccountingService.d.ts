import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';
import { IService } from './IService';
import { SepaDirectDebit } from '../models/AccountingService/SepaDirectDebit';
import { PaymentType } from '../models/AccountingService/PaymentType';
import { TransactionType } from '../models/AccountingService/TransactionType';
export interface IAccountingService extends IService {
    getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;
    getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;
    sepaBookingInformation(customerId: number): Promise<SepaDirectDebit[]>;
    getSalesInfo(customerId: number, days: number): Promise<SalesInfo[]>;
    moveSalesToBistroAccount(customerId: number): Promise<any>;
    bookToBistroAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<any>;
    bookToMembershipAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<any>;
}
