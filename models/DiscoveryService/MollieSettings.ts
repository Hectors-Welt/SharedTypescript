export class MollieSettings {
  apiKey: string;

  constructor(settings: any) {
    if (!settings || !settings.apiKey) {
      throw new Error('invalid data. ensure apiKey is present.');
    }

    this.apiKey = settings.apiKey;
  }
}