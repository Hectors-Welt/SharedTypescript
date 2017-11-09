import * as popsicle from 'popsicle';
import { ISMSService } from '../interfaces/ISMSService';
import { SMSRequest } from '../models/SmsService/SMSRequest';
import { SMSResponse } from '../models/SmsService/SMSResponse';

export class SMSService implements ISMSService {
  headers: any = {
    'content-type': 'application/json',
    'accept': 'application/json',
  };

  constructor(private host: string, private port: number) {
  }

  sendSMS(request: SMSRequest): Promise<SMSResponse> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/sendSMS`,
      method: 'POST',
      headers: this.headers,
      body: request,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call sendSMS on sms service'));
  }

  getJobs(): Promise<Array<SMSResponse>> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/jobs`,
      method: 'GET',
      headers: this.headers,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call getJobs on sms service'));
  }

  getJob(id: any): Promise<SMSResponse> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/jobs/${id}`,
      method: 'GET',
      headers: this.headers,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call getJob on sms service'));
  }

  deleteJob(id: any): Promise<SMSResponse> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/jobs/${id}`,
      method: 'DELETE',
      headers: this.headers,
    })
    .then(result => result.body)
    .catch(() => new Error('failed to call deleteJob on sms service'));
  }
}