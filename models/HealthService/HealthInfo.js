"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthInfo {
    constructor(version) {
        this.version = version;
        this.healthy = {};
        this.unhealthy = {};
    }
    get timestamp() {
        return new Date().toJSON();
    }
    get isHealthy() {
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
exports.HealthInfo = HealthInfo;
