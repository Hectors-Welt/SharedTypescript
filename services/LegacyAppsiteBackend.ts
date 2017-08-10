import * as popsicle from 'popsicle'
import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend'

export class LegacyAppsiteBackend implements ILegacyAppsiteBackend {

  constructor(private host: string, private port: number) { }

  login(loginRequest: any): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/login`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: loginRequest
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error('failed to login at legacy appsite backend'));
          }
          else {
            resolve(result.body);
          }
        })
        .catch((error) => {
          reject(new Error('failed to login at legacy appsite backend'));
        });
    });
  }

  getAppsettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/appsettings`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error('failed to get appsettings from legacy appsite backend'));
          }
          else {
            resolve(result.body);
          }
        })
        .catch((error) => {
          reject(new Error('failed to get appsettings from legacy appsite backend'));
        });
    });
  }
}