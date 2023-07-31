import { IAccountingService } from '../interfaces/IAccountingService';
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { ApiClient } from './ApiClient';
import { SepaDirectDebit } from '../models/AccountingService/SepaDirectDebit';
import { PaymentType } from '../models/AccountingService/PaymentType';
import { TransactionType } from '../models/AccountingService/TransactionType';
import { BistroAccount } from '../models/AccountingService/BistroAccount';
import { BistroAccountBooking } from '../models/AccountingService/BistroAccountBooking';
import { MembershipAccount } from '../models/AccountingService/MembershipAccount';
import { MembershipAccountBooking } from '../models/AccountingService/MembershipAccountBooking';

export class AccountingService implements IAccountingService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}`;
  }
  
  async getClubAccountInformation(customerId: number): Promise<ClubAccountInformation> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getClubAccountInformationByCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve club account information from accounting service');
    }
  }

  async getBistroAccount(customerId: number): Promise<BistroAccount> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/bistroAccount`);
    } catch (err) {
      throw new Error('failed to retrieve bistro account information from accounting service');
    }
  }

  async getBistroAccountBookings(customerId: number): Promise<BistroAccountBooking[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/bistroAccount/bookings`);
    } catch (err) {
      throw new Error('failed to retrieve bistro account bookings from accounting service');
    }
  }

  async getMembershipAccount(customerId: number): Promise<MembershipAccount> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/membershipAccount`);
    } catch (err) {
      throw new Error('failed to retrieve membership account information from accounting service');
    }
  }

  async getMembershipAccountBookings(customerId: number): Promise<MembershipAccountBooking[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/membershipAccount/bookings`);
    } catch (err) {
      throw new Error('failed to retrieve membership account bookings from accounting service');
    }
  }

  async getSepaBookings(customerId: number): Promise<SepaBookingSet[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/sepaBookings`);
    } catch (err) {
      new Error('failed to retrieve sepa bookings from accounting service');
    }
  }

  async sepaBookingInformation(customerId: number): Promise<SepaDirectDebit[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/sepaBookingInformations?type=PositionsByAccountFrame`);
    } catch (err) {
      new Error('failed to retrieve sepa bookings from accounting service');
    }
  }

  async moveSalesToBistroAccount(customerId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/moveSalesToBistroAccount`, {
        customerId
      });
    } catch (err) {
      throw new Error('failed to move sales to bistro account at accounting service');
    }
  }

  async bookToBistroAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/bookToBistroAccount`, {
        customerId,
        amount,
        note,
        paymentType,
        transactionType,
      });
    } catch (err) {
      throw new Error('failed to book to bistro account at accounting service');
    }
  }

  async bookToMembershipAccount(customerId: number, amount: number, note: string, paymentType: PaymentType, transactionType: TransactionType): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/bookToMembershipAccount`, {
        customerId,
        amount,
        note,
        paymentType,
        transactionType,
      });
    } catch (err) {
      throw new Error('failed to book to membership account at accounting service');
    }
  }
}
