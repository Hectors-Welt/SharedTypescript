import { expect } from 'chai';
import { HealthInfo } from '../../../models/HealthService/HealthInfo';

describe('HealthInfo', () => {

  before(() => {
    this.healthInfo = new HealthInfo('');
  });

  it('should return valid timestamp', () => {
    expect(Date.parse(this.healthInfo.timestamp)).not.to.be.NaN;
  });

  it('should return healthy with no unhealthy checks present', () => {
    expect(this.healthInfo.unhealthy).to.not.have.keys;
    expect(this.healthInfo.isHealthy).to.be.true;
  });

  it('should return unhealthy with unhealthy checks present', () => {
    this.healthInfo.unhealthy['check'] = 'message';
    expect(this.healthInfo.unhealthy).to.have.keys('check');
    expect(this.healthInfo.isHealthy).to.be.false;
  });

  it('should return proper json', () => {
    this.healthInfo.unhealthy['check'] = 'message';
    expect(this.healthInfo.toJSON()).to.have.keys(['timestamp', 'healthy', 'isHealthy', 'unhealthy', 'version']);
  });
});