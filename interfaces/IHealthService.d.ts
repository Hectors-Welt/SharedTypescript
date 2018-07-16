import { HealthInfo } from '../models/HealthService/HealthInfo';
export interface IHealthService {
    healthInfo: HealthInfo;
    registerHealthy(check: string, message: string): any;
    unregisterHealthy(check: string): any;
    registerUnhealthy(check: string, message: string): any;
    unregisterUnhealthy(check: string): any;
}
