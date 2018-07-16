import { ILoggerService } from '../interfaces/ILoggerService';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';

let winston = require('winston');
require('winston-mongodb').MongoDB;

export class LoggerService implements ILoggerService {
  private logger: any;

  constructor(private settings: MongoDbSettings, private serviceName: string) {
    let transports = [
      new winston.transports.Console({
        colorize: true,
        timestamp: true,
        json: true,
      }),
    ];

    if (settings) {
      transports.push(new winston.transports.MongoDB({
        level: 'info',
        db: settings.getConnectionUri('Logs'),
        collection: serviceName,
      }));
    }

    this.logger = new winston.Logger({
      level: 'info',
      transports,
    })
  }

  public info(message: string, payload: Object) {
    this.logger.info(message, payload);
  }

  public error(message: string, error: Error) {
    this.logger.error(message, error);
  }
}