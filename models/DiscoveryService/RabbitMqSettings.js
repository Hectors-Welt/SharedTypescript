"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMqSettings = void 0;
class RabbitMqSettings {
    constructor(settings) {
        if (!settings || !settings.host) {
            throw new Error('invalid data. ensure host is present.');
        }
        this.host = settings.host;
        this.port = settings.port || 5672;
        this.vhost = settings.vhost;
        this.username = settings.username;
        this.password = settings.password;
        this.useTls = settings.useTls;
    }
}
exports.RabbitMqSettings = RabbitMqSettings;
