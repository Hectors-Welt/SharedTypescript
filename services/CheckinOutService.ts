import { ICheckinOutService } from '../interfaces/ICheckinOutService'
import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus'
import { Checkin } from '../models/CheckinOutService/Checkin';
import { ApiClient } from './ApiClient';

export class CheckinOutService implements ICheckinOutService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async getCheckinStatus(customerId: number): Promise<CheckinStatus> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCheckinStatus/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve checkin status from checkinout service');
    }
  }

  async getCheckins(customerId: number): Promise<Checkin> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCheckins/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve checkins from checkinout service');
    }
  }

  async isAccessAllowed(customerId: number, timeSlotRequired: boolean): Promise<boolean> {
    try {
      const result = await ApiClient.GET(`${this.baseUrl}/isAccessAllowed/${customerId}/WithTimeSlotRequired/${timeSlotRequired}`);
      return result.accessGranted;
    } catch (err) {
      throw new Error('failed to get access granted information from checkinout service');
    }
  }

  async checkin(customerId: number, tagId?: number, accessPossibility?: number, accessLevel?: number, checkoutIfAlreadyPresent?: boolean): Promise<boolean> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/checkin`, {
        customerId,
        tagId,
        accessPossibility,
        accessLevel,
        checkoutIfAlreadyPresent,
      });
      return result.success;
    } catch (err) {
      throw new Error('failed to checkin customer at checkinout service');
    }
  }

  async checkout(customerId: number, accessPossibility?: number, accessLevel?: number): Promise<boolean> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/checkout`, {
        customerId,
        accessPossibility,
        accessLevel,
      });
      return result.success;
    } catch (err) {
      throw new Error('failed to checkout customer at checkinout service');
    }
  }
}