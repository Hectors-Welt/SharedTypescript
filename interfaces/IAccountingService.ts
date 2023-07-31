import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { IService } from './IService';
import { SepaDirectDebit } from '../models/AccountingService/SepaDirectDebit';
import { PaymentType } from '../models/AccountingService/PaymentType';
import { TransactionType } from '../models/AccountingService/TransactionType';
import { BistroAccount } from '../models/AccountingService/BistroAccount';
import { MembershipAccount } from '../models/AccountingService/MembershipAccount';
import { MembershipAccountBooking } from '../models/AccountingService/MembershipAccountBooking';
import { BistroAccountBooking } from '../models/AccountingService/BistroAccountBooking';

export interface IAccountingService extends IService {
  getClubAccountInformation(customerId: number): Promise<ClubAccountInformation>;

  getBistroAccount(customerId: number): Promise<BistroAccount>;
  
  getBistroAccountBookings(customerId: number): Promise<BistroAccountBooking[]>;

  getMembershipAccount(customerId: number): Promise<MembershipAccount>;

  getMembershipAccountBookings(customerId: number): Promise<MembershipAccountBooking[]>;

  getSepaBookings(customerId: number): Promise<SepaBookingSet[]>;

  sepaBookingInformation(customerId: number): Promise<SepaDirectDebit[]>;

  moveSalesToBistroAccount(customerId: number): Promise<any>;

  bookToBistroAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<any>;

  bookToMembershipAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<any>;
}
