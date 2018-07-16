export interface ILoggerService {
  info(message: string, payload: Object);

  error(message: string, error: Error);
}