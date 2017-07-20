"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const EventStoreSettings_1 = require("../../models/EventStoreSettings");
describe('EventStoreSettings', function () {
    describe('constructor validation', function () {
        const validationError = 'invalid data. ensure host and ports are present.';
        it('should throw error when invalid data passed in', function () {
            chai_1.expect(() => new EventStoreSettings_1.EventStoreSettings({})).to.throw(validationError);
        });
        it('should succeed with valid data passed in', function () {
            chai_1.expect(() => new EventStoreSettings_1.EventStoreSettings({ host: 'host', tcpPort: 12345, httpPort: 54321 })).to.not.throw(validationError);
        });
    });
});
