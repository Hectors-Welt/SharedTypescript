import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
import { Checkin } from '../models/CheckinOutService/Checkin';
import { AccessArea } from '../models/CheckinOutService/AccessArea';
export interface ICheckinOutService {
    getAccessAreasAvailable(): Promise<AccessArea[]>;
    getCheckinStatus(customerId: number): Promise<CheckinStatus>;
    getCheckins(customerId: number): Promise<Checkin>;
    isAccessAllowed(customerId: number, timeSlotRequired: boolean): Promise<boolean>;
    checkin(customerId: number, tagId?: number, accessPosibility?: number, accessLevel?: number, checkoutIfAlreadyPresent?: boolean): Promise<boolean>;
    checkout(customerId: number, accessPosibility?: number, accessLevel?: number): Promise<boolean>;
}
