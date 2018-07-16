import { NotificationPayload } from './NotificationPayload';
export declare class Notification {
    recipients: number[];
    apiKey: string;
    data: NotificationPayload;
    subscription: string;
    appId: string;
}
