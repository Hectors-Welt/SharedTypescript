import { expect } from 'chai';
import { HealthInfo } from '../..//models/HealthInfo'

describe('HealthInfo', () => {
    const healthInfo = new HealthInfo('');

    it('should return valid timestamp', () => {
        expect(Date.parse(healthInfo.timestamp)).not.to.be.NaN;
    });

    it('should return healthy with no unhealthy checks present', () => {
        expect(Object.keys(healthInfo.unhealthy).length).to.equal(0);
        expect(healthInfo.isHealthy).to.be.true;
    });

    it('should return unhealthy with unhealthy checks present', () => {

        healthInfo.unhealthy['check'] = 'message';
        expect(Object.keys(healthInfo.unhealthy).length).to.equal(1);
        expect(healthInfo.isHealthy).to.be.false;
    });
});