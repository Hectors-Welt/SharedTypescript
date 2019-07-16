import { Notification } from './Notification';
import { NotificationResponse } from './NotificationResponse';

export class NotificationLog {
  sent: Date = new Date();
  notification: Notification;
  appleResponse: NotificationResponse;
  androidResponse: NotificationResponse;
}
