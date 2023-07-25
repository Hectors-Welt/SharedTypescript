import { Customer } from '../models/CustomerService/Customer';
import { Address } from '../models/CustomerService/Address';
import { BankAccount } from '../models/CustomerService/BankAccount';
import { Contact } from '../models/CustomerService/Contact';
import { File } from '../models/CustomerService/File';
import { Interaction } from '../models/CustomerService/Interaction';
import { StatusEntry } from '../models/CustomerService/StatusEntry';
import { IService } from './IService';
import { StatusValues } from '../models/CustomerService/StatusValues';
import { AddTagIdCommand} from '../models/CustomerService/AddTagIdCommand';
import { InteractionDTO } from '../models/CustomerService/InteractionDTO';
import { LookupCriteria } from '../models/CustomerService/LookupCriteria';
import { SearchCriteria } from '../models/CustomerService/SearchCriteria';
import { AddCustomerCommand } from '../models/CustomerService/AddCustomerCommand';
import { AddCustomerCommandResult } from '../models/CustomerService/AddCUstomerCOmmandResult';

export interface ICustomerService extends IService {
  addCustomer(command: AddCustomerCommand): Promise<AddCustomerCommandResult>;

  getDefaultStatusValues(): Promise<StatusValues>;

  getStatusEntriesAvailable(): Promise<StatusEntry[]>;

  lookupCustomers(lookupCriteria: LookupCriteria): Promise<Customer[]>;

  search(searchCriteria: SearchCriteria): Promise<Customer[]>;

  findDoublets(name: string, birthday: string): Promise<Customer[]>;

  getCustomerByCustomerId(customerId: number): Promise<Customer>;

  getCustomerByTagId(tagId: string): Promise<Customer>;

  getProfilePicture(customerId: number): Promise<File>;

  setProfilePicture(customerId: number, file: File): Promise<any>;

  getTagIds(customerId: number, format: number): Promise<string[]>;

  registerTagId(customerId: number, command: AddTagIdCommand): Promise<void>;

  updateAddress(customerId: number, address: Address): Promise<void>;

  updateBankAccount(customerId: number, bankAccount: BankAccount): Promise<void>;

  updateContactData(customerId: number, contact: Contact): Promise<void>;

  updateCompany(customerId: number, company: string): Promise<void>;

  addCustomerInteraction(customerId: number, interaction: Interaction): Promise<void>;

  getCustomerInteractions(customerId: number): Promise<InteractionDTO[]>;

  lookupInteractions(customerId: number, contactType: number, selectTop: number): Promise<InteractionDTO[]>;

  getInteractionAttachment(interactionId: number): Promise<File>;

  deleteCustomerRelatedData(customerId: number): Promise<any>;
}
