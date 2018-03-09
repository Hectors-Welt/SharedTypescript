import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
import { Checkin } from '../models/CheckinOutService/Checkin';
export interface ICheckinOutService {
    getCheckinStatus(customerId: number): Promise<CheckinStatus>;
    getCheckins(customerId: number): Promise<Checkin>;
    isAccessAllowed(customerId: number, timeSlotRequired: boolean): Promise<boolean>;
}
