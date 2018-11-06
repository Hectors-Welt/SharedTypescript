import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
import { Checkin } from '../models/CheckinOutService/Checkin';
import { AccessArea } from '../models/CheckinOutService/AccessArea';
import { CheckinOutResponse } from '../models/CheckinOutService/CheckinOutResponse';
import { IService } from './IService';
export interface ICheckinOutService extends IService {
    getAccessAreasAvailable(): Promise<AccessArea[]>;
    getCheckinStatus(customerId: number): Promise<CheckinStatus>;
    getCheckins(customerId: number): Promise<Checkin>;
    isAccessAllowed(customerId: number, timeSlotRequired: boolean, accessAreas?: string[]): Promise<boolean>;
    checkin(customerId: number, tagId?: number, accessPosibility?: number, accessLevel?: number, checkoutIfAlreadyPresent?: boolean): Promise<CheckinOutResponse>;
    checkout(customerId: number, accessPosibility?: number, accessLevel?: number): Promise<CheckinOutResponse>;
    getCustomersPresent(): Promise<CheckinStatus[]>;
}
