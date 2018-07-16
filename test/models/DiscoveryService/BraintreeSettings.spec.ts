import { expect } from 'chai';
import { BraintreeSettings } from '../../../models/DiscoveryService/BraintreeSettings';

describe('BraintreeSettings', () => {

  before(() => {
    this.validationError = 'invalid data. ensure merchantId, privateKey and publicKey are present.';
  });

  describe('constructor validation', () => {

    it('should throw error when invalid data passed in', () => {
      expect(() => new BraintreeSettings(null)).to.throw(this.validationError);
    });

    it('should succeed with valid data passed in', () => {
      expect(() => new BraintreeSettings({
        merchantId: 'test',
        privateKey: 12345,
        publicKey: 54321,
      })).to.not.throw(this.validationError);
    });
  });
});