import { Notification } from './Notification';
import { NotificationResponse } from './NotificationResponse';
export declare class NotificationLog {
    sent: Date;
    notification: Notification;
    appleResponse: NotificationResponse;
    androidResponse: NotificationResponse;
}
