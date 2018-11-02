import { ISMSService } from '../interfaces/ISMSService';
import { SMSRequest } from '../models/SmsService/SMSRequest';
import { SMSResponse } from '../models/SmsService/SMSResponse';
export declare class SMSService implements ISMSService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    sendSMS(request: SMSRequest): Promise<SMSResponse>;
    getJobs(): Promise<Array<SMSResponse>>;
    getJob(id: any): Promise<SMSResponse>;
    deleteJob(id: any): Promise<SMSResponse>;
}
