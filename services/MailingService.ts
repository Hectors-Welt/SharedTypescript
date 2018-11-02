import { IMailingService } from '../interfaces/IMailingService'
import { SendEmailRequest } from '../models/MailingService/SendEmailRequest'
import { SmtpResponse } from '../models/MailingService/SmtpResponse'
import { ApiClient } from './ApiClient';

export class MailingService implements IMailingService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
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