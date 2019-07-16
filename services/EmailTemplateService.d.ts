import { IEmailTemplateService } from '../interfaces/IEmailTemplateService';
import { EmailRenderResult } from '../models/EmailTemplateService/EmailRenderResult';
export declare class EmailTemplateService implements IEmailTemplateService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getHtml(name: string, data: object): Promise<EmailRenderResult>;
    getPdf(name: string, data: object): Promise<Buffer>;
}
