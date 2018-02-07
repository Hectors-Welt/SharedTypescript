import { IPushNotificationService } from '../interfaces/IPushNotificationService'
import { DeviceRegistration } from '../models/PushNotificationService/DeviceRegistration'
import { Notification } from '../models/PushNotificationService/Notification'
import { NotificationLog } from '../models/PushNotificationService/NotificationLog'
import { ApiClient } from './ApiClient';

export class PushNotificationService implements IPushNotificationService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async registerDevice(deviceRegistration: DeviceRegistration): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/devices`, deviceRegistration);
    } catch (err) {
      throw new Error('failed to register device at push notification service');
    }
  }

  async unregisterDevice(deviceId: string, appId: string): Promise<void> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/devices/${deviceId}/${appId}`);
    } catch (err) {
      throw new Error('failed to unregister device from push notification service');
    }
  }

  async getSubscriptions(deviceId: string, appId: string): Promise<string[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/devices/${deviceId}/${appId}/subscriptions`);
    } catch (err) {
      throw new Error('failed to get subscriptions from push notification service');
    }
  }

  async addSubscription(deviceId: string, appId: string, subscription: string): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/devices/${deviceId}/${appId}/subscriptions/${subscription}`);
    } catch (err) {
      throw new Error('failed to add subscription at push notification service');
    }
  }

  async deleteSubscription(deviceId: string, appId: string, subscription: string): Promise<void> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/devices/${deviceId}/${appId}/subscriptions/${subscription}`);
    } catch (err) {
      throw new Error('failed to remove subscription at push notification service');
    }
  }

  async sendNotification(notification: Notification): Promise<NotificationLog> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/sendNotification`, notification);
    } catch (err) {
      throw new Error('failed to send notification from push notification service');
    }
  }
}