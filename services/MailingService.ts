import { IMailingService } from '../interfaces/IMailingService'
import { SendEmailRequest } from '../models/MailingService/SendEmailRequest'
import { SmtpResponse } from '../models/MailingService/SmtpResponse'
import { ApiClient } from './ApiClient';

export class MailingService implements IMailingService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async sendEmail(request: SendEmailRequest): Promise<SmtpResponse> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/api/sendEmail`, request);
    } catch (err) {
      throw new Error('failed to call sendEmail on mailing service');
    }
  }
}