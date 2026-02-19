import { IAccountingService } from '../interfaces/IAccountingService';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SepaDirectDebit } from '../models/AccountingService/SepaDirectDebit';
import { PaymentType } from '../models/AccountingService/PaymentType';
import { TransactionType } from '../models/AccountingService/TransactionType';
import { BistroAccount } from '../models/AccountingService/BistroAccount';
import { BistroAccountBooking } from '../models/AccountingService/BistroAccountBooking';
import { MembershipAccount } from '../models/AccountingService/MembershipAccount';
import { MembershipAccountBooking } from '../models/AccountingService/MembershipAccountBooking';
import { DepositCashCommandResult } from '../models/AccountingService/DepositCashCommandResult';
import { PaybackBistroAccountBalanceResult } from '../models/AccountingService/PaybackBistroAccountBalanceResult';
export declare class AccountingService implements IAccountingService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    bookToBistroAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<DepositCashCommandResult>;
    bookToMembershipAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<DepositCashCommandResult>;
    moveSalesToBistroAccount(customerId: number): Promise<any>;
    getBistroAccount(customerId: number): Promise<BistroAccount>;
    getBistroAccountBookings(customerId: number): Promise<BistroAccountBooking[]>;
    getMembershipAccount(customerId: number): Promise<MembershipAccount>;
    getMembershipAccountBookings(customerId: number): Promise<MembershipAccountBooking[]>;
    getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;
    sepaBookingInformation(customerId: number): Promise<SepaDirectDebit[]>;
    paybackBistroAccountBalance(customerId: number): Promise<PaybackBistroAccountBalanceResult>;
}
