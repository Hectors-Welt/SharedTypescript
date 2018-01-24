import * as popsicle from 'popsicle'
import { IAccountingService } from '../interfaces/IAccountingService'
import { ClubAccountInformation } from '../models/AccountingService/ClubAccountInformation'
import { SepaBookingSet } from '../models/AccountingService/SepaBookingSet';
import { SalesInfo } from '../models/AccountingService/SalesInfo';

export class AccountingService implements IAccountingService {
  constructor(private host: string, private port: number) {
  }

  getClubAccountInformation(customerId: number): Promise<ClubAccountInformation> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getClubAccountInformationByCustomerId/${customerId}`,
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

  getSepaBookings(customerId: number): Promise<SepaBookingSet[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getSepaBookingsByCustomerId/${customerId}`,
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
        reject(new Error('failed to retrieve sepa bookings from accounting service'));
      });
    })
  }

  getSalesInfo(customerId: number, days: number): Promise<SalesInfo[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getSalesInfoByCustomerId/${customerId}/ForTheLast/${days}/Days`,
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
        reject(new Error('failed to retrieve sepa bookings from accounting service'));
      });
    })
  }
}