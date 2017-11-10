import * as popsicle from 'popsicle'

import { ITwoFactorAuthenticationService } from '../interfaces/ITwoFactorAuthenticationService'

export class TwoFactorAuthenticationService implements ITwoFactorAuthenticationService {

  constructor(private host: string, private port: number) {
  }

  generateToken(key: string): Promise<string> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/api/token/generate`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: {
          key
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status === 200) {
          resolve(result.body.token);
        }
        else {
          reject(new Error("two factor authentication service responded with status " + result.status))
        }
      })
      .catch((error) => {
        reject(new Error('failed to retrieve token from two factor authentication service'));
      });
    })
  }

  validateToken(key: string, token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/api/token/validate`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: {
          key,
          token
        }
      })
      .then((result) => {
        if (result.status === 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
        reject(new Error('failed to validate token by two factor authentication service'));
      });
    })
  }

}