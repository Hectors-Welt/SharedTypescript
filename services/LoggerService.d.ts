import { MongoDbSettings } from '../models/MongoDbSettings';
export declare class LoggerService {
    private logger;
    constructor(settings: MongoDbSettings, serviceName: string);
    info(message: string, payload: object): void;
    error(message: string, error: Error): void;
}
