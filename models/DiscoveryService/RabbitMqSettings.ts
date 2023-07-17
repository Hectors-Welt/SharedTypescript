export class RabbitMqSettings {
  host: string;
  port: number;
  vhost: string;
  username: string;
  password: string;
  useTls: boolean;

  constructor(settings: any) {
    if (!settings || !settings.host) {
      throw new Error('invalid data. ensure host is present.');
    }

    this.host = settings.host;
    this.port = settings.port || 5672;
    this.vhost = settings.vhost;
    this.username = settings.username;
    this.password = settings.password;
    this.useTls = settings.useTls;
  }
}
