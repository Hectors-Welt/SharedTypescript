import {expect} from 'chai';
import { MongoDbSettings } from '../..//models/MongoDbSettings'

describe('MongoDbSettings', () => {

    describe('constructor validation', () =>{
        const validationError = 'invalid data. ensure host and port are present.';

        it('should throw error when invalid data passed in', () => {
            expect(()=>new MongoDbSettings({})).to.throw(validationError);
        });

        it('should succeed with valid data passed in', () => {
            expect(()=>new MongoDbSettings({host:'host', port:12345})).to.not.throw(validationError);
        });
    });

    describe('getConnectionUri', function(){
        it('should return authSource=admin when credentials provided', function(){
            const host = 'host';
            const port = 12345;
            const username = 'username';
            const password = 'password';
            const database = 'database';

            const settings = new MongoDbSettings({
                host: host,
                port: port,
                username: username,
                password: password ,
            });

            expect(settings.getConnectionUri(database)).to.equal(`mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`);
        });

        it('should return simple uri without credentials provided', function(){
            const host = 'host';
            const port = 12345;
            const database = 'database';

            const settings = new MongoDbSettings({
                host: host,
                port: port,
            });

            expect(settings.getConnectionUri(database)).to.equal(`mongodb://${host}:${port}/${database}`);
        })
    })
});