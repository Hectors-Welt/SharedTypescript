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
}