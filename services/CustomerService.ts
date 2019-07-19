import { Customer } from '../models/CustomerService/Customer';
import { ICustomerService } from '../interfaces/ICustomerService';
import { Address } from '../models/CustomerService/Address';
import { BankAccount } from '../models/CustomerService/BankAccount';
import { Contact } from '../models/CustomerService/Contact';
import { File } from '../models/CustomerService/File';
import { ApiClient } from './ApiClient';
import { Interaction } from '../models/CustomerService/Interaction';
import { StatusEntry } from '../models/CustomerService/StatusEntry';
import { StatusValues } from '../models/CustomerService/StatusValues';
import { AddTagIdCommand } from '../models/CustomerService/AddTagIdCommand';

export class CustomerService implements ICustomerService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}`;
  }

  async getDefaultStatusValues(): Promise<StatusValues> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getDefaultStatusValues`);
    } catch (err) {
      throw new Error('failed to get default status values from customer service');
    }
  }

  async getStatusEntriesAvailable(): Promise<StatusEntry[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getStatusEntriesAvailable`);
    } catch (err) {
      throw new Error('failed to get status entries from customer service');
    }
  }

  async findDoublets(name: string, birthday: string): Promise<Customer[]> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/findDoublets`, {
        name,
        birthday,
      });
    } catch (err) {
      throw new Error('failed to retrieve doublet from customer service');
    }
  }

  async getCustomerByCustomerId(customerId: number): Promise<Customer> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCustomerByCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve customer from customer service');
    }
  }

  async getCustomerByTagId(tagId: number): Promise<Customer> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCustomerByTagId/${tagId}`);
    } catch (err) {
      throw new Error('failed to retrieve customer from customer service');
    }
  }

  async getProfilePicture(customerId: number): Promise<File> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customer/${customerId}/profilePicture`);
    } catch (err) {
      throw new Error('failed to retrieve profile picture from customer service');
    }
  }

  async setProfilePicture(customerId: number, file: File): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/customer/${customerId}/profilePicture`, file);
    } catch (err) {
      throw new Error('failed to set profile picture at customer service');
    }
  }

  async getTagIds(customerId: number, format: number = 0): Promise<string[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customer/${customerId}/getTagIds?format=${format}`);
    } catch (err) {
      throw new Error('failed to retrieve tag ids from customer service');
    }
  }

  async registerTagId(customerId: number, command: AddTagIdCommand): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/customer/${customerId}/registerTagId`, command);
    } catch (err) {
      throw new Error('failed to register tag id at customer service');
    }
  }

  async updateAddress(customerId: number, address: Address): Promise<void> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customer/${customerId}/address`, address);
    } catch (err) {
      throw new Error('failed to update address at customer service');
    }
  }

  async updateBankAccount(customerId: number, bankAccount: BankAccount): Promise<void> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customer/${customerId}/bankAccount`, bankAccount);
    } catch (err) {
      throw new Error('failed to update bank account at customer service');
    }
  }

  async updateContactData(customerId: number, contact: Contact): Promise<void> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customer/${customerId}/contact`, contact);
    } catch (err) {
      throw new Error('failed to update contact data at customer service');
    }
  }

  async addCustomerInteraction(customerId: number, interaction: Interaction): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/customer/${customerId}/interaction`, interaction);
    } catch (err) {
      throw new Error('failed to customer interaction at customer service');
    }
  }
}
