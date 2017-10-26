import { SendEmailRequest } from '../models/MailingService/SendEmailRequest'
import { SmtpResponse } from '../models/MailingService/SmtpResponse'

export interface IMailingService {
    sendEmail(request: SendEmailRequest): Promise<SmtpResponse>
}