import { expect } from 'chai';
import { HectorDbSettings } from '../../../models/DiscoveryService/HectorDbSettings';

describe('HectorDbSettings', () => {
  before(() => {
    this.validationError = 'invalid data. ensure host and credentials are present.';
  });

  describe('constructor validation', () => {
    it('should throw error when invalid data passed in', () => {
      expect(() => new HectorDbSettings(null)).to.throw(this.validationError);
    });

    it('should succeed with valid data passed in', () => {
      expect(
        () =>
          new HectorDbSettings({
            server: 'host',
            username: 12345,
            password: 54321,
          }),
      ).to.not.throw(this.validationError);
    });
  });
});
