export interface ILoggerService {
    info(message: string, payload: object): any;
    error(message: string, error: Error): any;
}
