export class BackendSettings {
  baseUrl: string;
  backendId: string;

  constructor(settings: any) {
    if (!settings || !settings.baseUrl) {
      throw new Error('invalid data. ensure baseUrl is present.');
    }

    this.baseUrl = settings.baseUrl;
    this.backendId = settings.backendId;
  }
}