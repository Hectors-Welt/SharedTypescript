import { ISMSService } from '../interfaces/ISMSService';
import { SMSRequest } from '../models/SmsService/SMSRequest';
import { SMSResponse } from '../models/SmsService/SMSResponse';
export declare class SMSService implements ISMSService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    sendSMS(request: SMSRequest): Promise<SMSResponse>;
    getJobs(): Promise<Array<SMSResponse>>;
    getJob(id: any): Promise<SMSResponse>;
    deleteJob(id: any): Promise<SMSResponse>;
}
