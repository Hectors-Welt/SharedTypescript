export class BackendSettings {
  baseUrl: string;
  backendId: string;
  seoTitle: string;
  cloudOnly: boolean;

  constructor(settings: any) {
    if (!settings || !settings.baseUrl) {
      throw new Error('invalid data. ensure baseUrl is present.');
    }

    this.baseUrl = settings.baseUrl;
    this.backendId = settings.backendId;
    this.seoTitle = settings.seoTitle;
    this.cloudOnly = settings.cloudOnly || false;
  }
}
