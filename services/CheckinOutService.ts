import { ICheckinOutService } from '../interfaces/ICheckinOutService';
import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
import { Checkin } from '../models/CheckinOutService/Checkin';
import { ApiClient } from './ApiClient';
import { AccessArea } from '../models/CheckinOutService/AccessArea';
import { CurrentCheckins } from '../models/CheckinOutService/CurrentCheckins';
import { CommandResult } from '../models/CheckinOutService/CommandResult';
import { CheckinCommand } from '../models/CheckinOutService/CheckinCommand';
import { CheckinOutCommandResult } from '../models/CheckinOutService/CheckinOutCommandResult';
import { CheckoutCommand } from '../models/CheckinOutService/CheckoutCommand';
import { AccessAreaInformation } from '../models/CheckinOutService/AccessAreaInformation';

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
      return await ApiClient.GET(`${this.baseUrl}/accessAreas`);
    } catch (err) {
      throw new Error('failed to retrieve access areas from checkinout service');
    }
  }

  async getAccessAreasInformation(accessArea: string): Promise<AccessAreaInformation> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/accessAreas/${accessArea}/information`);
    } catch (err) {
      throw new Error('failed to retrieve access area information from checkinout service');
    }
  }

  async getCheckins(customerId: number): Promise<Checkin[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/checkins`);
    } catch (err) {
      throw new Error('failed to retrieve checkins from checkinout service');
    }
  }

  async getCheckinStatus(customerId: number): Promise<CheckinStatus> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/checkinStatus`);
    } catch (err) {
      throw new Error('failed to retrieve checkin status from checkinout service');
    }
  }

  async getCurrentCheckinCount(studioNumber: number): Promise<CurrentCheckins> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/studios/${studioNumber}/checkinCount`);
    } catch (err) {
      throw new Error('failed to retrieve current checkin count from checkinout service');
    }
  }

  async getCustomersPresent(studioNumber?: number): Promise<CheckinStatus[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/checkinStatuses?studioNumber=${studioNumber}`);
    } catch (err) {
      throw new Error('failed to retrieve checkin statuses from checkinout service');
    }
  } 

  async isAccessAllowed(customerId: number, timeSlotRequired: boolean, checkOpeningHours: boolean, accessAreas?: string[]): Promise<boolean> {
    try {
      const result = await ApiClient.GET(
        `${this.baseUrl}/customers/${customerId}/accessAllowed?accessAreas=${
          accessAreas != null ? accessAreas.join(',') : ''
        }&checkOpeningHours=${checkOpeningHours}&timeSlotRequired=${timeSlotRequired}`,
      );
      return result.accessGranted;
    } catch (err) {
      throw new Error('failed to get access granted information from checkinout service');
    }
  }

  async isCheckoutAllowed(customerId: number): Promise<boolean> {
    try {
      const result = await ApiClient.GET(
        `${this.baseUrl}/customers/${customerId}/checkoutAllowed`,
      );
      return result.accessGranted;
    } catch (err) {
      throw new Error('failed to get checkout allowed information from checkinout service');
    }
  }

  async getCurrentCheckinCounts(): Promise<CurrentCheckins[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/checkinCounts`);
    } catch (err) {
      throw new Error('failed to retrieve current checkin counts from checkinout service');
    }
  }

  async checkin(
    customerId: number,
    checkinCommand: CheckinCommand,
  ): Promise<CheckinOutCommandResult> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/commands/checkin`, {
        customerId,
        ...checkinCommand,
      });
      return result;
    } catch (err) {
      throw new Error('failed to checkin customer at checkinout service');
    }
  }

  async checkout(customerId: number, checkoutCommand: CheckoutCommand): Promise<CheckinOutCommandResult> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/commands/checkout`, {
        customerId,
        ...checkoutCommand,
      });
      return result;
    } catch (err) {
      throw new Error('failed to checkout customer at checkinout service');
    }
  }  

  async enterLocation(customerId: number, location: string, studioNumber: number): Promise<any> {
    try {
      const result = await ApiClient.PUT(
        `${this.baseUrl}/customers/${customerId}/location`,
        {
          name: location,
          studioNumber,
        },
      );
      return result;
    } catch (err) {
      throw new Error('failed to get enter location at checkinout service');
    }
  }

  async leaveLocation(customerId: number, studioNumber: number): Promise<any> {
    try {
      const result = await ApiClient.DELETE(
        `${this.baseUrl}/customers/${customerId}/location`,
        {
          studioNumber,
        },
      );
      return result;
    } catch (err) {
      throw new Error('failed to get enter location at checkinout service');
    }
  }
  
  async setAccessGrantedTill(customerId: number, accessGrantedTill: string): Promise<any> {
    try {
      const result = await ApiClient.POST(`${this.baseUrl}/customers/${customerId}/accessGranted`, {
        till: accessGrantedTill,
      });
      return result;
    } catch (err) {
      throw new Error('failed to set accessGrantedTill at checkinout service');
    }
  }

  async removeAccessGrantedTill(customerId: number): Promise<any> {
    try {
      const result = await ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}/accessGranted`);
      return result;
    } catch (err) {
      throw new Error('failed to remove accessGrantedTill at checkinout service');
    }
  }

  async getAccessAreasCurrentlyAllowed(customerId: number): Promise<AccessArea[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/accessAreas`);
    } catch (err) {
      throw new Error('failed to retrieve access areas allowed for customer from checkinout service');
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
