import { IMailingService } from '../interfaces/IMailingService';
import { SendEmailRequest } from '../models/MailingService/SendEmailRequest';
import { SmtpResponse } from '../models/MailingService/SmtpResponse';
export declare class MailingService implements IMailingService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    sendEmail(request: SendEmailRequest): Promise<SmtpResponse>;
}
