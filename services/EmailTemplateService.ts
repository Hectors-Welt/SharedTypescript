import * as popsicle from 'popsicle';
import { IEmailTemplateService } from '../interfaces/IEmailTemplateService';
import { ApiClient } from './ApiClient';
import { EmailRenderResult } from '../models/EmailTemplateService/EmailRenderResult';

export class EmailTemplateService implements IEmailTemplateService {
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

  async getHtml(name: string, data: object): Promise<EmailRenderResult> {
    try {
      return ApiClient.POST(`${this.baseUrl}/api/rendering/email/${name}`, data);
    } catch (err) {
      throw new Error(`failed to retrieve html from email template service: ${err.message}`);
    }
  }

  async getPdf(name: string, data: object): Promise<Buffer> {
    try {
      const request: any = {
        url: `${this.baseUrl}/api/rendering/email/${name}/pdf`,
        method: 'POST',
        body: data,
      };

      const result = await popsicle.request(request);

      return result.status === 200 ? Buffer.from(result.body, 'binary') : null;
    } catch (err) {
      throw new Error(`failed to retrieve html from email template service: ${err.message}`);
    }
  }
}