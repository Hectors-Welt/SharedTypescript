"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const HealthInfo_1 = require("../..//models/HealthInfo");
describe('HealthInfo', function () {
    const healthInfo = new HealthInfo_1.HealthInfo('');
    it('should return valid timestamp', function () {
        chai_1.expect(Date.parse(healthInfo.timestamp)).not.to.be.NaN;
    });
    it('should return healthy with no unhealthy checks present', function () {
        chai_1.expect(Object.keys(healthInfo.unhealthy).length).to.equal(0);
        chai_1.expect(healthInfo.isHealthy).to.be.true;
    });
    it('should return unhealthy with unhealthy checks present', function () {
        healthInfo.unhealthy['check'] = 'message';
        chai_1.expect(Object.keys(healthInfo.unhealthy).length).to.equal(1);
        chai_1.expect(healthInfo.isHealthy).to.be.false;
    });
});
