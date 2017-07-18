"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let winston = require('winston');
require('winston-mongodb').MongoDB;
class LoggerService {
    constructor(settings, serviceName) {
        let transports = [
            new winston.transports.Console({
                colorize: true,
                timestamp: true,
                json: true
            })
        ];
        if (settings) {
            transports.push(new winston.transports.MongoDB({
                level: "info",
                db: settings.getConnectionUri("Logs"),
                collection: serviceName
            }));
        }
        this.logger = new winston.Logger({
            level: 'info',
            transports: transports
        });
    }
    info(message, payload) {
        this.logger.info(message, payload);
    }
    error(message, error) {
        this.logger.error(message, error);
    }
}
exports.default = LoggerService;
