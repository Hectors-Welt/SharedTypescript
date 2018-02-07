import { expect } from 'chai';
import { EventStoreSettings } from '../../../models/DiscoveryService/EventStoreSettings';

describe('EventStoreSettings', () => {

  before(() => {
    this.validationError = 'invalid data. ensure host and ports are present.';
  });

  describe('constructor validation', () => {

    it('should throw error when invalid data passed in', () => {
      expect(() => new EventStoreSettings(null)).to.throw(this.validationError);
    });

    it('should succeed with valid data passed in', () => {
      expect(() => new EventStoreSettings({
        host: 'host',
        tcpPort: 12345,
        httpPort: 54321,
      })).to.not.throw(this.validationError);
    });
  });
});