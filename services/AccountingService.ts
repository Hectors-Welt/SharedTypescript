import { IAccountingService } from '../interfaces/IAccountingService'
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation'
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';
import { ApiClient } from './ApiClient';

export class AccountingService implements IAccountingService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
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
}