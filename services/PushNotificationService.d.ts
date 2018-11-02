import { IPushNotificationService } from '../interfaces/IPushNotificationService';
import { DeviceRegistration } from '../models/PushNotificationService/DeviceRegistration';
import { Notification } from '../models/PushNotificationService/Notification';
import { NotificationLog } from '../models/PushNotificationService/NotificationLog';
export declare class PushNotificationService implements IPushNotificationService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    registerDevice(deviceRegistration: DeviceRegistration): Promise<void>;
    unregisterDevice(deviceId: string, appId: string): Promise<void>;
    getSubscriptions(deviceId: string, appId: string): Promise<string[]>;
    addSubscription(deviceId: string, appId: string, subscription: string): Promise<void>;
    deleteSubscription(deviceId: string, appId: string, subscription: string): Promise<void>;
    sendNotification(notification: Notification): Promise<NotificationLog>;
}
