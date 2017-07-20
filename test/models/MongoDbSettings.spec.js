"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const MongoDbSettings_1 = require("../..//models/MongoDbSettings");
describe('MongoDbSettings', function () {
    describe('constructor validation', function () {
        const validationError = 'invalid data. ensure host and port are present.';
        it('should throw error when invalid data passed in', function () {
            chai_1.expect(() => new MongoDbSettings_1.MongoDbSettings({})).to.throw(validationError);
        });
        it('should succeed with valid data passed in', function () {
            chai_1.expect(() => new MongoDbSettings_1.MongoDbSettings({ host: 'host', port: 12345 })).to.not.throw(validationError);
        });
    });
    describe('getConnectionUri', function () {
        it('should return authSource=admin when credentials provided', function () {
            const host = 'host';
            const port = 12345;
            const username = 'username';
            const password = 'password';
            const database = 'database';
            const settings = new MongoDbSettings_1.MongoDbSettings({
                host: host,
                port: port,
                username: username,
                password: password
            });
            chai_1.expect(settings.getConnectionUri(database)).to.equal(`mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`);
        });
        it('should return simple uri without credentials provided', function () {
            const host = 'host';
            const port = 12345;
            const database = 'database';
            const settings = new MongoDbSettings_1.MongoDbSettings({
                host: host,
                port: port
            });
            chai_1.expect(settings.getConnectionUri(database)).to.equal(`mongodb://${host}:${port}/${database}`);
        });
    });
});
