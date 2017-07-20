import {expect} from 'chai';
import { EventStoreSettings } from '../../models/EventStoreSettings'

describe('EventStoreSettings', function () {

    describe('constructor validation', function (){
        const validationError = 'invalid data. ensure host and ports are present.';

        it('should throw error when invalid data passed in', function () {
            expect(()=>new EventStoreSettings({})).to.throw(validationError);
        });

        it('should succeed with valid data passed in', function () {
            expect(()=>new EventStoreSettings({host:'host', tcpPort:12345, httpPort: 54321})).to.not.throw(validationError);
        });
    });
});