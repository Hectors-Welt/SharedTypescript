import * as popsicle from 'popsicle';
import { Customer } from '../models/Customer';
import { ICustomerService } from '../interfaces/ICustomerService';

export class CustomerService implements ICustomerService {

  constructor(private host: string, private port: number) {

  }

  getCustomerByCustomerId(customerId: number): Promise<Customer> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getCustomerByCustomerId/${customerId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(new Error('failed to retrieve customer from customer service'));
        });
    })
  }
}