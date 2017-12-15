import * as popsicle from 'popsicle';
import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';

export class MembershipService implements IMembershipService {

  constructor(private host: string, private port: number) {

  }

  getContractTemplatesAvailable(): Promise<ContractTemplate[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getContractTemplatesAvailable`,
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
        reject(new Error('failed to retrieve contract templates from membership service'));
      });
    })
  }

  getCurrentContractsByCustomerId(customerId: number): Promise<Contract[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getCurrentContractsByCustomerId/${customerId}`,
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
        reject(new Error('failed to retrieve contracts from membership service'));
      });
    })
  }
}