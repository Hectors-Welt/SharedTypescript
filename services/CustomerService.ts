import * as popsicle from 'popsicle';
import { Customer } from '../models/CustomerService/Customer';
import { ICustomerService } from '../interfaces/ICustomerService';
import { Address } from '../models/CustomerService/Address';
import { BankAccount } from '../models/CustomerService/BankAccount';
import { Contact } from '../models/CustomerService/Contact';
import { File } from '../models/CustomerService/File';

export class CustomerService implements ICustomerService {

  constructor(private host: string, private port: number) {
  }

  findDoublets(name: string, birthday: string): Promise<Customer[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/findDoublets`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: {
          name,
          birthday
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status === 200) {
          resolve(result.body);
        }
        else {
          reject(new Error('failed to retrieve customer from customer service'));
        }
      })
      .catch((error) => {
        reject(new Error('failed to retrieve customer from customer service'));
      });
    })
  }

  getCustomerByCustomerId(customerId: number): Promise<Customer> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getCustomerByCustomerId/${customerId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status === 404) {
          resolve(null);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to retrieve customer from customer service'));
      });
    })
  }

  getCustomerByTagId(tagId: number): Promise<Customer> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getCustomerByTagId/${tagId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status === 404) {
          resolve(null);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to retrieve customer from customer service'));
      });
    })
  }

  getProfilePicture(customerId: number): Promise<File> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/customer/${customerId}/profilePicture`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status === 200) {
          resolve(result.body);
        }
        else {
          reject(new Error('failed to retrieve profile picture from customer service'));  
        }
      })
      .catch((error) => {
        reject(new Error('failed to retrieve profile picture from customer service'));
      });
    })
  }

  updateAddress(customerId: number, address: Address): Promise<void> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/customer/${customerId}/address`,
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: address
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 204) {
          reject(new Error('failed to update address at customer service'));
        }
        else {
          resolve();
        }
      })
      .catch((error) => {
        reject(new Error('failed to update address at customer service'));
      });
    });
  }

  updateBankAccount(customerId: number, bankAccount: BankAccount): Promise<void> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/customer/${customerId}/bankAccount`,
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: bankAccount
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 204) {
          reject(new Error('failed to update bank account at customer service'));
        }
        else {
          resolve();
        }
      })
      .catch((error) => {
        reject(new Error('failed to update bank account at customer service'));
      });
    });
  }

  updateContactData(customerId: number, contact: Contact): Promise<void> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/customer/${customerId}/contact`,
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: contact
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 204) {
          reject(new Error('failed to update contact data at customer service'));
        }
        else {
          resolve();
        }
      })
      .catch((error) => {
        reject(new Error('failed to update contact data at customer service'));
      });
    });
  }
}