import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
export interface ICheckinOutService {
    getCheckinStatus(customerId: number): Promise<CheckinStatus>;
}
