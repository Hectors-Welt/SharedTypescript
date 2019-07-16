export class HealthInfo {
  public version: string;
  public backendId: string;
  public healthy: Object;
  public unhealthy: Object;

  constructor(version: string) {
    this.version = version;
    this.healthy = {};
    this.unhealthy = {};
  }

  public get timestamp() {
    return new Date().toJSON();
  }

  public get isHealthy() {
    return Object.keys(this.unhealthy).length == 0;
  }

  toJSON() {
    return {
      version: this.version,
      backendId: this.backendId,
      healthy: this.healthy,
      unhealthy: this.unhealthy,
      timestamp: this.timestamp,
      isHealthy: this.isHealthy,
    };
  }
}
