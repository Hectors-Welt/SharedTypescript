import * as popsicle from 'popsicle';

import { IMailingService } from '../interfaces/IMailingService'
import { SendEmailRequest } from '../models/MailingService/SendEmailRequest'
import { SmtpResponse } from '../models/MailingService/SmtpResponse'

export class MailingService implements IMailingService {
    constructor(private host: string, private port: number) {}

    sendEmail(request: SendEmailRequest): Promise<SmtpResponse> {
        return new Promise((resolve, reject) => {
            popsicle.request({
              url: `http://${this.host}:${this.port}/api/sendEmail`,
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
              },
              body: request
            })
              .use(popsicle.plugins.parse('json'))
              .then((result) => {
                resolve(result.body);
              })
              .catch((error) => {
                reject(new Error('failed to call sendEmail on mailing service'));
              });
          })
    }
}