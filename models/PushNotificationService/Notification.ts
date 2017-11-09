import { NotificationPayload } from './NotificationPayload'

export class Notification {
  recipients: number[];
  apiKey: string;
  data: NotificationPayload;
  subscription: string;
  appId: string;
}