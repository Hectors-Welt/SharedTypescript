import MongoDbSettings from '../models/MongoDbSettings';
declare class LoggerService {
    private logger;
    constructor(settings: MongoDbSettings, serviceName: string);
    info(message: string, payload: object): void;
    error(message: string, error: Error): void;
}
export default LoggerService;
