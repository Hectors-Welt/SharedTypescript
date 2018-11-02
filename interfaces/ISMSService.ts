import { SMSResponse } from '../models/SmsService/SMSResponse';
import { SMSRequest } from '../models/SmsService/SMSRequest';
import { IService } from './IService';

export interface ISMSService extends IService {
  getJobs(): Promise<Array<SMSResponse>>;

  getJob(id: any): Promise<SMSResponse>;

  deleteJob(id: any): Promise<SMSResponse>;

  sendSMS(request: SMSRequest): Promise<SMSResponse>;
}
