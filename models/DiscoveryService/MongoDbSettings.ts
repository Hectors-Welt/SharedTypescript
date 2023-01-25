export class MongoDbSettings {
  host: string;
  port?: number;
  username: string;
  password: string;
  useAtlas: boolean;

  constructor(settings: any) {
    if (!settings || !settings.host) {
      throw new Error('invalid data. ensure host is present.');
    }

    this.host = settings.host;
    this.port = settings.useAtlas ? null : settings.port || 27017;
    this.username = settings.username;
    this.password = settings.password;
    this.useAtlas = settings.useAtlas;
  }

  getConnectionUri(database: string): string {
    if (this.useAtlas) {
      return `mongodb+srv://${this.username}:${this.password}@${this.host}/${database}?retryWrites=true&w=majority`;
    }
    return this.username
      ? `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${database}?authSource=admin`
      : `mongodb://${this.host}:${this.port}/${database}`;
  }
}
