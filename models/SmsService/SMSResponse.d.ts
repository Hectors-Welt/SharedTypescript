import { SMSRequest } from './SMSRequest';
export declare class SMSResponse {
    _id: string;
    name: string;
    data: SMSRequest;
    type: string;
    priority: number;
    nextRunAt: Date;
    lastModifiedBy: string;
    lockedAt: Date;
    lastRunAt: Date;
    failCount: number;
    failedAt: Date;
    lastFinishedAt: Date;
}
