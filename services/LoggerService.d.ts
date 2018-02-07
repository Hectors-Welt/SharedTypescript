import { ILoggerService } from '../interfaces/ILoggerService';
import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
export declare class LoggerService implements ILoggerService {
    private settings;
    private serviceName;
    private logger;
    constructor(settings: MongoDbSettings, serviceName: string);
    info(message: string, payload: Object): void;
    error(message: string, error: Error): void;
}
