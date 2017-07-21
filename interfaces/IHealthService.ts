import { HealthInfo } from '../models/HealthInfo';

export interface IHealthService {

  healthInfo: HealthInfo;

  registerHealthy(check: string, message: string);

  unregisterHealthy(check: string);

  registerUnhealthy(check: string, message: string);

  unregisterUnhealthy(check: string);
}