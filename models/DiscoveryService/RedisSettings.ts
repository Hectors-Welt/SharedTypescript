export class RedisSettings {
  host: string;

  constructor(settings: any) {
    if (!settings || !settings.host) {
      throw new Error('invalid data. ensure host is present.');
    }

    this.host = settings.host;
  }
}