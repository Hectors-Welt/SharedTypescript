import { expect } from 'chai';
import { MongoDbSettings } from '../../../models/DiscoveryService/MongoDbSettings';

describe('MongoDbSettings', () => {

  before(() => {
    this.validationError = 'invalid data. ensure host and port are present.';
    this.host = 'host';
    this.port = 12345;
    this.username = 'username';
    this.password = 'password';
    this.database = 'database';
  });

  describe('constructor validation', () => {

    it('should throw error when invalid data passed in', () => {
      expect(() => new MongoDbSettings(null)).to.throw(this.validationError);
    });

    it('should succeed with valid data passed in', () => {
      expect(() => new MongoDbSettings({
        host: 'host',
        port: 12345,
      })).to.not.throw(this.validationError);
    });
  });

  describe('getConnectionUri', () => {

    it('should return authSource=admin when credentials provided', () => {

      const settings = new MongoDbSettings({
        host: this.host,
        port: this.port,
        username: this.username,
        password: this.password,
      });

      expect(settings.getConnectionUri(this.database)).to.equal(`mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}?authSource=admin`);
    });

    it('should return simple uri without credentials provided', () => {
      const settings = new MongoDbSettings({
        host: this.host,
        port: this.port,
      });

      expect(settings.getConnectionUri(this.database)).to.equal(`mongodb://${this.host}:${this.port}/${this.database}`);
    })
  })
});