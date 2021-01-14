"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbSettings = void 0;
class MongoDbSettings {
    constructor(settings) {
        if (!settings || !settings.host) {
            throw new Error('invalid data. ensure host is present.');
        }
        this.host = settings.host;
        this.port = settings.port || 27017;
        this.username = settings.username;
        this.password = settings.password;
    }
    getConnectionUri(database) {
        return this.username
            ? `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${database}?authSource=admin`
            : `mongodb://${this.host}:${this.port}/${database}`;
    }
}
exports.MongoDbSettings = MongoDbSettings;
