"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HealthInfo_1 = require("../models/HealthService/HealthInfo");
class HealthService {
    constructor(version) {
        this.healthInfo = new HealthInfo_1.HealthInfo(version);
    }
    registerHealthy(check, message) {
        this.healthInfo.healthy[check] = message;
    }
    unregisterHealthy(check) {
        delete this.healthInfo.healthy[check];
    }
    registerUnhealthy(check, message) {
        this.healthInfo.unhealthy[check] = message;
    }
    unregisterUnhealthy(check) {
        delete this.healthInfo.unhealthy[check];
    }
}
exports.HealthService = HealthService;
