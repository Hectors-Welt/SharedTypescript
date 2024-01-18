import { ICheckinOutService } from '../interfaces/ICheckinOutService';
import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
import { Checkin } from '../models/CheckinOutService/Checkin';
import { ApiClient } from './ApiClient';
import { AccessArea } from '../models/CheckinOutService/AccessArea';
import { CheckinOutResponse } from '../models/CheckinOutService/CheckinOutResponse';
import { CurrentCheckins } from '../models/CheckinOutService/CurrentCheckins';
import { CommandResult } from '../models/CheckinOutService/CommandResult';

export class CheckinOutService implements ICheckinOutService {
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

  async getAccessAreasAvailable(): Promise<AccessArea[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getAccessAreasAvailable`);
    } catch (err) {
      throw new Error('failed to retrieve access areas from checkinout service');
    }
  }

  async getCheckinStatus(customerId: number): Promise<CheckinStatus> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCheckinStatus/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve checkin status from checkinout service');
    }
  }

  async getCheckins(customerId: number): Promise<Checkin[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCheckins/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve checkins from checkinout service');
    }
  }

  async isAccessAllowed(customerId: number, timeSlotRequired: boolean, checkOpeningHours: boolean, accessAreas?: string[]): Promise<boolean> {
    try {
      const result = await ApiClient.GET(
        `${this.baseUrl}/isAccessAllowed/${customerId}/WithTimeSlotRequired/${timeSlotRequired}?accessAreas=${
          accessAreas != null ? accessAreas.join(',') : ''
        }&checkOpeningHours=${checkOpeningHours}`,
      );
      return result.accessGranted;
    } catch (err) {
      throw new Error('failed to get access granted information from checkinout service');
    }
  }

  async checkin(
    customerId: number,
    tagId?: number,
    accessPossibility?: number,
    accessLevel?: number,
    checkoutIfAlreadyPresent?: boolean,
  ): Promise<CheckinOutResponse> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/checkin`, {
        customerId,
        tagId,
        accessPossibility,
        accessLevel,
        checkoutIfAlreadyPresent,
      });
      return result;
    } catch (err) {
      throw new Error('failed to checkin customer at checkinout service');
    }
  }

  async checkout(customerId: number, accessPossibility?: number, accessLevel?: number): Promise<CheckinOutResponse> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/checkout`, {
        customerId,
        accessPossibility,
        accessLevel,
      });
      return result;
    } catch (err) {
      throw new Error('failed to checkout customer at checkinout service');
    }
  }

  async getCustomersPresent(): Promise<CheckinStatus[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCustomersPresent`);
    } catch (err) {
      throw new Error('failed to retrieve customers present from checkinout service');
    }
  }

  async getCurrentCheckinCount(studioNumber: number): Promise<CurrentCheckins> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCurrentCheckinCount/${studioNumber}`);
    } catch (err) {
      throw new Error('failed to retrieve current checkin count from checkinout service');
    }
  }

  async getCurrentCheckinCounts(): Promise<CurrentCheckins[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCurrentCheckinCounts`);
    } catch (err) {
      throw new Error('failed to retrieve current checkin counts from checkinout service');
    }
  }

  async setAccessGrantedTill(customerId: number, accessGrantedTill: string): Promise<any> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/accessGrantedTill`, {
        customerId,
        accessGrantedTill,
      });
      return result;
    } catch (err) {
      throw new Error('failed to set accessGrantedTill at checkinout service');
    }
  }

  async removeAccessGrantedTill(customerId: number): Promise<any> {
    try {
      const result = await ApiClient.DELETE(`${this.baseUrl}/accessGrantedTill/${customerId}`);
      return result;
    } catch (err) {
      throw new Error('failed to remove accessGrantedTill at checkinout service');
    }
  }

  async getAccessAreasCurrentlyAllowed(customerId: number): Promise<AccessArea[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/accessAreas`);
    } catch (err) {
      throw new Error('failed to retrieve access areas from checkinout service');
    }
  }

  async updateCheckinRemark(customerId: number, checkinRemark: string): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/checkinRemark`, {
        checkinRemark: checkinRemark,
      });
    } catch (err) {
      throw new Error('failed to update checkin remark at checkinout service');
    }
  }
}
