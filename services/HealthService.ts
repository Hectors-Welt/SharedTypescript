import { IHealthService } from '../interfaces/IHealthService';
import { HealthInfo } from '../models/HealthService/HealthInfo';

export class HealthService implements IHealthService {
  healthInfo: HealthInfo;

  constructor(private version: string) {
    this.healthInfo = new HealthInfo(version);
  }

  public registerHealthy(check: string, message: string) {
    this.healthInfo.healthy[check] = message;
  }

  public unregisterHealthy(check: string) {
    delete this.healthInfo.healthy[check];
  }

  public registerUnhealthy(check: string, message: string) {
    this.healthInfo.unhealthy[check] = message;
  }

  public unregisterUnhealthy(check: string) {
    delete this.healthInfo.unhealthy[check];
  }
}