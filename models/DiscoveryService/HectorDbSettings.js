"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HectorDbSettings = void 0;
class HectorDbSettings {
    constructor(settings) {
        if (!settings || !settings.server || !settings.username || !settings.password) {
            throw new Error('invalid data. ensure host and credentials are present.');
        }
        this.host = settings.server;
        this.instance = settings.instance;
        this.username = settings.username;
        this.password = settings.password;
        this.mdb1 = settings.mdb1;
        this.mdb2 = settings.mdb2;
        this.mdb4 = settings.mdb4;
        this.mdb5 = settings.mdb5;
        this.mdb8 = settings.mdb8;
        this.mdb12 = settings.mdb12;
        this.hpdotdata = settings.hpDotData;
        this.hpdotsystem = settings.hpDotSystem;
    }
}
exports.HectorDbSettings = HectorDbSettings;
