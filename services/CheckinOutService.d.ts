import { ICheckinOutService } from '../interfaces/ICheckinOutService';
import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus';
import { Checkin } from '../models/CheckinOutService/Checkin';
import { AccessArea } from '../models/CheckinOutService/AccessArea';
import { CheckinOutResponse } from '../models/CheckinOutService/CheckinOutResponse';
export declare class CheckinOutService implements ICheckinOutService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    getAccessAreasAvailable(): Promise<AccessArea[]>;
    getCheckinStatus(customerId: number): Promise<CheckinStatus>;
    getCheckins(customerId: number): Promise<Checkin>;
    isAccessAllowed(customerId: number, timeSlotRequired: boolean, accessAreas?: string[]): Promise<boolean>;
    checkin(customerId: number, tagId?: number, accessPossibility?: number, accessLevel?: number, checkoutIfAlreadyPresent?: boolean): Promise<CheckinOutResponse>;
    checkout(customerId: number, accessPossibility?: number, accessLevel?: number): Promise<CheckinOutResponse>;
}
