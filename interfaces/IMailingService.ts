import { SendEmailRequest } from '../models/MailingService/SendEmailRequest';
import { SmtpResponse } from '../models/MailingService/SmtpResponse';
import { IService } from './IService';

export interface IMailingService extends IService {
  sendEmail(request: SendEmailRequest): Promise<SmtpResponse>;
}
