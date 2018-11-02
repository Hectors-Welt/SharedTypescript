import { ISMSService } from '../interfaces/ISMSService';
import { SMSRequest } from '../models/SmsService/SMSRequest';
import { SMSResponse } from '../models/SmsService/SMSResponse';
import { ApiClient } from './ApiClient';

export class SMSService implements ISMSService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}/api`;
  }

  async sendSMS(request: SMSRequest): Promise<SMSResponse> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/sendSMS`, request);
    } catch (err) {
      throw new Error('failed to call sendSMS on sms service');
    }
  }

  async getJobs(): Promise<Array<SMSResponse>> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/jobs`);
    } catch (err) {
      throw new Error('failed to call getJobs on sms service');
    }
  }

  async getJob(id: any): Promise<SMSResponse> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/jobs/${id}`);
    } catch (err) {
      throw new Error('failed to call getJob on sms service');
    }
  }

  async deleteJob(id: any): Promise<SMSResponse> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/jobs/${id}`);
    } catch (err) {
      throw new Error('failed to call deleteJob on sms service');
    }
  }
}