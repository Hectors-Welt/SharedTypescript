import * as popsicle from 'popsicle'
import { ICheckinOutService } from '../interfaces/ICheckinOutService'
import { CheckinStatus } from '../models/CheckinOutService/CheckinStatus'

export class CheckinOutService implements ICheckinOutService {
  constructor(private host: string, private port: number) {
  }

  getCheckinStatus(customerId: number): Promise<CheckinStatus> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getCheckinStatus/${customerId}`,
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
        reject(new Error('failed to retrieve checkin status from checkinout service'));
      });
    })
  }
}