import { DeviceRegistration } from '../models/PushNotificationService/DeviceRegistration';
export interface IPushNotificationService {
    registerDevice(deviceRegistration: DeviceRegistration): Promise<void>;
    unregisterDevice(deviceId: string, appId: string): Promise<void>;
    getSubscriptions(deviceId: string, appId: string): Promise<string[]>;
    addSubscription(deviceId: string, appId: string, subscription: string): Promise<void>;
    deleteSubscription(deviceId: string, appId: string, subscription: string): Promise<void>;
}
