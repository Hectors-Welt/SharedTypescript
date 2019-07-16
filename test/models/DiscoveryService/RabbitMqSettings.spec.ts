import { expect } from 'chai';
import { RabbitMqSettings } from '../../../models/DiscoveryService/RabbitMqSettings';

describe('RabbitMqSettings', () => {
  before(() => {
    this.validationError = 'invalid data. ensure host, port and vhost are present.';
  });

  describe('constructor validation', () => {
    it('should throw error when invalid data passed in', () => {
      expect(() => new RabbitMqSettings(null)).to.throw(this.validationError);
    });

    it('should succeed with valid data passed in', () => {
      expect(
        () =>
          new RabbitMqSettings({
            host: 'host',
            port: 12345,
            vhost: 'test',
          }),
      ).to.not.throw(this.validationError);
    });
  });
});
