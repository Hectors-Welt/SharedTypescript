import { IHealthService } from '../interfaces/IHealthService';
import { HealthInfo } from '../models/HealthService/HealthInfo';
export declare class HealthService implements IHealthService {
    healthInfo: HealthInfo;
    constructor(version: string);
    registerHealthy(check: string, message: string): void;
    unregisterHealthy(check: string): void;
    registerUnhealthy(check: string, message: string): void;
    unregisterUnhealthy(check: string): void;
}
