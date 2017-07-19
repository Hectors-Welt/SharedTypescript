export interface ILoggerService {
  info(message: string, payload: object)
  error(message: string, error: Error)
}