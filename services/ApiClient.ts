import * as popsicle from 'popsicle'

export class ApiClient {
  static headers: any = {
    'content-type': 'application/json',
    'accept': 'application/json',
  };

  static async GET(url: string, headers?: any, throwErrorOnFail?: boolean): Promise<any> {
    return throwErrorOnFail ? this.makeRequestThrowingErrorOnFail('GET', url, headers) : this.makeRequest('GET', url, headers);
  }

  static async POST(url: string, body?: any, headers?: any, throwErrorOnFail?: boolean): Promise<any> {
    return throwErrorOnFail ? this.makeRequestThrowingErrorOnFail('POST', url, body, headers) : this.makeRequest('POST', url, body, headers);
  }

  static async PUT(url: string, body?: any, headers?: any, throwErrorOnFail?: boolean): Promise<any> {
    return throwErrorOnFail ? this.makeRequestThrowingErrorOnFail('PUT', url, body, headers) : this.makeRequest('PUT', url, body, headers);
  }

  static async DELETE(url: string, headers?: any, throwErrorOnFail?: boolean): Promise<any> {
    return throwErrorOnFail ? this.makeRequestThrowingErrorOnFail('DELETE', url, headers) : this.makeRequest('DELETE', url, headers);
  }

  private static async makeRequest(method: string, url: string, body?: any, headers?: any): Promise<any> {
    const request: any = {
      url,
      method,
      headers: Object.assign({}, this.headers, headers),
    };
    if (body) {
      request.body = body;
    }

    const result = await popsicle.request(request)
      .use(popsicle.plugins.parse('json'));

    return result.status === 200 || result.status === 204 ? result.body || {} : null;
  }

  private static async makeRequestThrowingErrorOnFail(method: string, url: string, body?: any, headers?: any): Promise<any> {
    const request: any = {
      url,
      method,
      headers: Object.assign({}, this.headers, headers),
    };
    if (body) {
      request.body = body;
    }

    const result = await popsicle.request(request)
      .use(popsicle.plugins.parse('json'));

    if (result.status !== 200 && result.status != 204) {
      throw result.body;
    }

    return result.body || {};
  }
}