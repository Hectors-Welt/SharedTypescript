export class EventStoreSettings {
  host: string
  tcpPort: number
  httpPort: number
  username: string
  password: string

  constructor(settings: any) {
    if (!settings || !settings.host || !settings.tcpPort || !settings.httpPort) {
      throw new Error('invalid data. ensure host and ports are present.');
    }

    this.host = settings.host;
    this.tcpPort = settings.tcpPort;
    this.httpPort = settings.httpPort;
    this.username = settings.username;
    this.password = settings.password;
  }
}