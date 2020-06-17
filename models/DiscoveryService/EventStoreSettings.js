"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStoreSettings = void 0;
class EventStoreSettings {
    constructor(settings) {
        if (!settings || !settings.host || !settings.tcpPort || !settings.httpPort) {
            throw new Error('invalid data. ensure host and ports are present.');
        }
        this.host = settings.host;
        this.tcpPort = settings.tcpPort;
        this.httpPort = settings.httpPort;
        this.username = settings.username;
        this.password = settings.password;
    }
}
exports.EventStoreSettings = EventStoreSettings;
