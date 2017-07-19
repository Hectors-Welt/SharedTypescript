let winston = require('winston');
require('winston-mongodb').MongoDB;
import { MongoDbSettings } from '../models/MongoDbSettings'

export class LoggerService {
  private logger: any;

  constructor(settings: MongoDbSettings, serviceName: string) {
    let transports = [
      new winston.transports.Console({
        colorize: true,
        timestamp: true,
        json: true
      })
    ]

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
    })
  }

  public info(message: string, payload: object) {
    this.logger.info(message, payload);
  }

  public error(message: string, error: Error) {
    this.logger.error(message, error)
  }
}