export interface ILoggerService {
    info(message: string, payload: Object): any;
    error(message: string, error: Error): any;
}
