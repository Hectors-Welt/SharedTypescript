import { EmailRenderResult } from '../models/EmailTemplateService/EmailRenderResult';

export interface IEmailTemplateService {
  getHtml(name: string, data: object): Promise<EmailRenderResult>;
  getPdf(name: string, data: object): Promise<Buffer>;
}
