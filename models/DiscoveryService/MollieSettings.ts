export class MollieSettings {
  apiKey: string;
  apiKeys: Map<number, string>;

  constructor(settings: any) {
    if (!settings || !settings.apiKey) {
      throw new Error('invalid data. ensure apiKey is present.');
    }

    this.apiKey = settings.apiKey;
    this.apiKeys = settings.apiKeys;
  }
}