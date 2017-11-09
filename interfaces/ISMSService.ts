import { SMSResponse } from '../models/SmsService/SMSResponse';
import { SMSRequest } from '../models/SmsService/SMSRequest';

export interface ISMSService {
  getJobs(): Promise<Array<SMSResponse>>;

  getJob(id: any): Promise<SMSResponse>;

  deleteJob(id: any): Promise<SMSResponse>;

  sendSMS(request: SMSRequest): Promise<SMSResponse>;
}
