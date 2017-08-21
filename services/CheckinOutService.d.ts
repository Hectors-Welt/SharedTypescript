import { ICheckinOutService } from '../interfaces/ICheckinOutService';
import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
export declare class CheckinOutService implements ICheckinOutService {
    private host;
    private port;
    constructor(host: string, port: number);
    getCheckinStatus(customerId: number): Promise<CheckinStatus>;
}
