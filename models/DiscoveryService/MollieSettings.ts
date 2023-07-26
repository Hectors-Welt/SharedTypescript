export class MollieSettings {
  apiKey: string;
  apiKeys: Map<number, string>;

  constructor(settings: any) {
    if (!settings) {
      throw new Error('invalid data.');
    }

    this.apiKey = settings.apiKey;
    this.apiKeys = settings.apiKeys;
  }
}