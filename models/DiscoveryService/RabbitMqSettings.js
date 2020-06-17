"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMqSettings = void 0;
class RabbitMqSettings {
    constructor(settings) {
        if (!settings || !settings.host || !settings.port || !settings.vhost) {
            throw new Error('invalid data. ensure host, port and vhost are present.');
        }
        this.host = settings.host;
        this.port = settings.port;
        this.vhost = settings.vhost;
        this.username = settings.username;
        this.password = settings.password;
    }
}
exports.RabbitMqSettings = RabbitMqSettings;
