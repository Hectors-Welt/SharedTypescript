import { IMailingService } from '../interfaces/IMailingService';
import { SendEmailRequest } from '../models/MailingService/SendEmailRequest';
import { SmtpResponse } from '../models/MailingService/SmtpResponse';
export declare class MailingService implements IMailingService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    sendEmail(request: SendEmailRequest): Promise<SmtpResponse>;
}
