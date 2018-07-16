export class RabbitMqSettings {
  host: string;
  port: number;
  vhost: string;
  username: string;
  password: string;

  constructor(settings: any) {
    if (!settings || !settings.host || !settings.port || !settings.vhost) {
      throw new Error('invalid data. ensure host, port and vhost are present.');
    }

    this.host = settings.host;
    this.port = settings.port;
    this.vhost = settings.vhost;
    this.username = settings.username;
    this.password = settings.password;
  }
}