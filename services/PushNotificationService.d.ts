import { IPushNotificationService } from '../interfaces/IPushNotificationService';
import { DeviceRegistration } from '../models/PushNotificationService/DeviceRegistration';
export declare class PushNotificationService implements IPushNotificationService {
    private host;
    private port;
    constructor(host: string, port: number);
    registerDevice(deviceRegistration: DeviceRegistration): Promise<void>;
    unregisterDevice(deviceId: string, appId: string): Promise<void>;
    getSubscriptions(deviceId: string, appId: string): Promise<string[]>;
    addSubscription(deviceId: string, appId: string, subscription: string): Promise<void>;
    deleteSubscription(deviceId: string, appId: string, subscription: string): Promise<void>;
}
