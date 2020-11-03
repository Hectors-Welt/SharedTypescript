export class MollieSettings {
  apiKeys: Map<string, string>;

  constructor(settings: any) {
    if (!settings || !settings.apiKeys) {
      throw new Error('invalid data. ensure apiKeys are present.');
    }

    this.apiKeys = settings.apiKeys;
  }
}