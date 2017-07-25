import { MongoDbSettings } from '../models/DiscoveryService/MongoDbSettings';
export declare class LoggerService {
    private logger;
    constructor(settings: MongoDbSettings, serviceName: string);
    info(message: string, payload: Object): void;
    error(message: string, error: Error): void;
}
