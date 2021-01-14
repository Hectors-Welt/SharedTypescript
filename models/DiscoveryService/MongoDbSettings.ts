export class MongoDbSettings {
  host: string;
  port: number;
  username: string;
  password: string;

  constructor(settings: any) {
    if (!settings || !settings.host) {
      throw new Error('invalid data. ensure host is present.');
    }

    this.host = settings.host;
    this.port = settings.port || 27017;
    this.username = settings.username;
    this.password = settings.password;
  }

  getConnectionUri(database: string): string {
    return this.username
      ? `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${database}?authSource=admin`
      : `mongodb://${this.host}:${this.port}/${database}`;
  }
}
