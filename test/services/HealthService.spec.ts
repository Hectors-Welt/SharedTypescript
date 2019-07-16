import { expect } from 'chai';
import { HealthService } from '../../services/HealthService';

describe('HealthService', () => {
  before(() => {
    this.service = new HealthService('1.0.0');
  });

  it('registerHealthy', () => {
    this.service.registerHealthy('check', 'test');
    expect(this.service.healthInfo.healthy).to.have.keys('check');
  });

  it('unregisterHealthy', () => {
    this.service.unregisterHealthy('check');
    expect(this.service.healthInfo.healthy).to.not.have.keys;
  });

  it('registerUnhealthy', () => {
    this.service.registerUnhealthy('check', 'test');
    expect(this.service.healthInfo.unhealthy).to.have.keys('check');
  });

  it('unregisterUnhealthy', () => {
    this.service.unregisterUnhealthy('check');
    expect(this.service.healthInfo.unhealthy).to.not.have.keys;
  });
});
