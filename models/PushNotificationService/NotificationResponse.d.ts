import { NotificationResult } from './NotificationResult';
export declare class NotificationResponse {
    multicast_id: string;
    failure: number;
    sucess: number;
    canonical_ids: number;
    results: NotificationResult[];
}
