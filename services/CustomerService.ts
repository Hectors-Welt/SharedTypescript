import { Customer } from '../models/CustomerService/Customer';
import { ICustomerService } from '../interfaces/ICustomerService';
import { Address } from '../models/CustomerService/Address';
import { BankAccount } from '../models/CustomerService/BankAccount';
import { Contact } from '../models/CustomerService/Contact';
import { File } from '../models/CustomerService/File';
import { ApiClient } from './ApiClient';
import { StatusEntry } from '../models/CustomerService/StatusEntry';
import { StatusValues } from '../models/CustomerService/StatusValues';
import { InteractionDTO } from '../models/CustomerService/InteractionDTO';
import { AddCustomerCommand } from '../models/CustomerService/AddCustomerCommand';
import { AddCustomerCommandResult } from '../models/CustomerService/AddCustomerCommandResult';
import { AddInteractionCommandResult } from '../models/CustomerService/AddInteractionCommandResult';
import { AddInteractionCommand } from '../models/CustomerService/AddInteractionCommand';
import { DeleteCustomerCommandResult } from '../models/CustomerService/DeleteCustomerCommandResult';
import { CommandResult } from '../models/CustomerService/CommandResult';
import { LicensePlates } from '../models/CustomerService/LicensePlates';
import { HealthInsurance } from '../models/CustomerService/HealthInsurance';
import { RegisterCardCommandResult } from '../models/CustomerService/RegisterCardCommandResult';
import { RegisterCardCommand } from '../models/CustomerService/RegisterCardCommand';

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
  
  async addCustomer(command: AddCustomerCommand): Promise<AddCustomerCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/customers`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to add customer on customer service',
        errors: [err],
        customer: null,
      };
    }
  }

  async findDoublets(name: string, birthday: string): Promise<Customer[]> {
    try {
      var result = await ApiClient.GET(`${this.baseUrl}/paginated/customers?name=${encodeURIComponent(name)}&birthday=${birthday}&take=100`);
      return result.data;
    } catch (err) {
      throw new Error('failed to retrieve doublet from customer service');
    }
  }

  async getCustomerByCustomerId(customerId: number): Promise<Customer> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve customer from customer service');
    }
  }

  async getCustomerByTagId(tagId: string): Promise<Customer> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/tagIds/${tagId}/customer`);
    } catch (err) {
      throw new Error('failed to retrieve customer from customer service');
    }
  }

  async getProfilePicture(customerId: number): Promise<File> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/profilePicture`);
    } catch (err) {
      throw new Error('failed to retrieve profile picture from customer service');
    }
  }

  async setProfilePicture(customerId: number, file: File): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/customers/${customerId}/profilePicture`, file);
    } catch (err) {
      throw new Error('failed to set profile picture at customer service');
    }
  }

  async getTagIds(customerId: number): Promise<string[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customer/${customerId}/tagIds`);
    } catch (err) {
      throw new Error('failed to retrieve tag ids from customer service');
    }
  }

  async registerCard(customerId: number, command: RegisterCardCommand): Promise<RegisterCardCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/customers/${customerId}/cards`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to register card at customer service',
        errors: [err],
      };
    }
  }

  async updateAddress(customerId: number, address: Address): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/address`, address);
    } catch (err) {
      return { 
        success: false,
        message: 'failed to update address at customer service',
        errors: [err],
      };
    }
  }

  async updateBankAccount(customerId: number, bankAccount: BankAccount): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/bankAccount`, bankAccount, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update bank account at customer service',
        errors: [err],
      };
    }
  }

  async deleteDirectDebitGroup(customerId: number): Promise<CommandResult> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}/directDebitGroup`, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update bank account at customer service',
        errors: [err],
      };
    }
  }

  async updateContactData(customerId: number, contact: Contact): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/contact`, contact, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update contact data at customer service',
        errors: [err],
      };
    }
  }

  async updateCompany(customerId: number, company: string): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/company/${encodeURIComponent(company)}`, {}, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update company at customer service',
        errors: [err],
      };
    }
  }

  async updateCompany2(customerId: number, company: string): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/company2/${encodeURIComponent(company)}`, {}, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update company2 at customer service',
        errors: [err],
      };
    }
  }

  async updateStatus(customerId: number, statusId: number): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/status`, {
        statusId: statusId,
      }, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update status at customer service',
        errors: [err],
      };
    }
  }

  async updateDefaultStudio(customerId: number, studioNumber: number): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/defaultStudio`, {
        defaultStudioNumber: studioNumber,
      }, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update default studio at customer service',
        errors: [err],
      };
    }
  }

  async addCustomerInteraction(customerId: number, command: AddInteractionCommand): Promise<AddInteractionCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/customers/${customerId}/interactions`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to add customer interaction at customer service',
        errors: [err],
        interactionId: null,
      };
    }
  }

  async getCustomerInteractions(customerId: number): Promise<InteractionDTO[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/interactions`);
    } catch (err) {
      throw new Error('failed to retrieve customer interactions from customer service');
    }
  }

  async lookupInteractions(customerId: number, contactType: number, selectTop: number = 1): Promise<InteractionDTO[]> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/interactions/search`, {
        customerId,
        contactTypeIds: [contactType],
        selectTop
      });
    } catch (err) {
      throw new Error('failed to get customer interactions from customer service');
    }
  }

  async getInteractionAttachment(interactionId: number): Promise<File> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/interactions/${interactionId}/file`);
    } catch (err) {
      throw new Error('failed to retrieve file from customer service');
    }
  }

  async deleteCustomerRelatedData(customerId: number): Promise<any[]> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}`);
    } catch (err) {
      throw new Error('failed to delete customer related data at customer service');
    }
  }

  async deleteCustomer(customerId: number): Promise<DeleteCustomerCommandResult> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}`, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to delete customer at customer service',
        errors: [err],
      };
    }
  }

  async getLicensePlates(customerId: number): Promise<LicensePlates> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/customers/${customerId}/licensePlates`);
    } catch (err) {
      throw new Error('failed to retrieve license plates from customer service');
    }
  }

  async updateLicensePlates(customerId: number, licensePlates: LicensePlates): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/licensePlates`, licensePlates, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update license plates at customer service',
        errors: [err],
      };
    }
  }

  async updateHealthInsurance(customerId: number, healthInsuranceId: number): Promise<CommandResult> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/healthInsurance`, {
        healthInsuranceId: healthInsuranceId,
      }, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update status at customer service',
        errors: [err],
      };
    }
  }

  async getHealthInsurances(): Promise<HealthInsurance[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/healthInsurances`);
    } catch (err) {
      throw new Error('failed to retrieve health insurances from customer service');
    }
  }

  async getDefaultStatusValues(): Promise<StatusValues> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/statusValues`);
    } catch (err) {
      throw new Error('failed to get default status values from customer service');
    }
  }

  async getStatusEntriesAvailable(): Promise<StatusEntry[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/statusEntries`);
    } catch (err) {
      throw new Error('failed to get status entries from customer service');
    }
  }
}
