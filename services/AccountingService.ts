import * as popsicle from 'popsicle'
import { IAccountingService } from '../interfaces/IAccountingService'
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation'

export class AccountingService implements IAccountingService {
  constructor(private host: string, private port: number) { }

  getClubAccountInformation(customerId: number): Promise<ClubAccountInformation> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getClubAccountInformation/${customerId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(new Error('failed to retrieve club account information from accounting service'));
        });
    })
  }
}