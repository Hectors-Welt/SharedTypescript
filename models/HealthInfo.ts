class HealthInfo {
    public version: string;
    public healthy: object;
    public unhealthy: object;

    public get timestamp() {
        return new Date().toJSON();
    }
    public get isHealthy() {
        return Object.keys(this.unhealthy).length == 0;
    }

    constructor(version: string) {
        this.version = version;
        this.healthy = {};
        this.unhealthy = {};
    }

    toJSON() {
        return {
            version: this.version,
            healthy: this.healthy,
            unhealthy: this.unhealthy,
            timestamp: this.timestamp,
            isHealthy: this.isHealthy
        }
    }
}

export default HealthInfo;