import { IAccountingService } from '../interfaces/IAccountingService';
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation';
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';
import { ApiClient } from './ApiClient';
import { SepaDirectDebit } from '../models/AccountingService/SepaDirectDebit';
import { PaymentType } from '../models/AccountingService/PaymentType';
import { TransactionType } from '../models/AccountingService/TransactionType';

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

  async getSepaBookings(customerId: number): Promise<SepaBookingSet[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getSepaBookingsByCustomerId/${customerId}`);
    } catch (err) {
      new Error('failed to retrieve sepa bookings from accounting service');
    }
  }

  async sepaBookingInformation(customerId: number): Promise<SepaDirectDebit[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/sepaBookingInformation/${customerId}?type=PositionsByAccountFrame`);
    } catch (err) {
      new Error('failed to retrieve sepa bookings from accounting service');
    }
  }

  async getSalesInfo(customerId: number, days: number): Promise<SalesInfo[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getSalesInfoByCustomerId/${customerId}/ForTheLast/${days}/Days`);
    } catch (err) {
      throw new Error('failed to retrieve sepa bookings from accounting service');
    }
  }

  async moveSalesToBistroAccount(customerId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/moveSalesToBistroAccount/${customerId}`, {});
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
