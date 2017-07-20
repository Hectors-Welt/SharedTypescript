"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthInfo {
    get timestamp() {
        return new Date().toJSON();
    }
    get isHealthy() {
        return Object.keys(this.unhealthy).length == 0;
    }
    constructor(version) {
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
        };
    }
}
exports.HealthInfo = HealthInfo;
