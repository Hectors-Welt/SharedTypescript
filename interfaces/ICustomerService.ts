import { Customer } from '../models/CustomerService/Customer';
import { Address } from '../models/CustomerService/Address';
import { BankAccount } from '../models/CustomerService/BankAccount';
import { Contact } from '../models/CustomerService/Contact';
import { File } from '../models/CustomerService/File';
import { Interaction } from '../models/CustomerService/Interaction';
import { StatusEntry } from '../models/CustomerService/StatusEntry';

export interface ICustomerService {
  getStatusEntriesAvailable(): Promise<StatusEntry[]>;

  findDoublets(name: string, birthday: string): Promise<Customer[]>;

  getCustomerByCustomerId(customerId: number): Promise<Customer>;

  getCustomerByTagId(tagId: number): Promise<Customer>;

  getProfilePicture(customerId: number): Promise<File>;

  updateAddress(customerId: number, address: Address): Promise<void>;

  updateBankAccount(customerId: number, bankAccount: BankAccount): Promise<void>;

  updateContactData(customerId: number, contact: Contact): Promise<void>;

  addCustomerInteraction(customerId: number, interaction: Interaction): Promise<void>;
}