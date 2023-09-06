"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisSettings = void 0;
class RedisSettings {
    constructor(settings) {
        if (!settings || !settings.host) {
            throw new Error('invalid data. ensure host is present.');
        }
        this.host = settings.host;
    }
}
exports.RedisSettings = RedisSettings;
