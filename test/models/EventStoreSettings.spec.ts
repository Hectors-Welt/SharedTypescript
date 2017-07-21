import {expect} from 'chai';
import { EventStoreSettings } from '../../models/EventStoreSettings'

describe('EventStoreSettings', () => {

    describe('constructor validation', () => {
        const validationError = 'invalid data. ensure host and ports are present.';

        it('should throw error when invalid data passed in', () => {
            expect(()=>new EventStoreSettings({})).to.throw(validationError);
        });

        it('should succeed with valid data passed in', () => {
            expect(()=>new EventStoreSettings({host:'host', tcpPort:12345, httpPort: 54321})).to.not.throw(validationError);
        });
    });
});