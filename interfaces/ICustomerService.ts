import { Customer } from '../models/CustomerService/Customer';
import { Address } from '../models/CustomerService/Address';
import { BankAccount } from '../models/CustomerService/BankAccount';
import { Contact } from '../models/CustomerService/Contact';
import { File } from '../models/CustomerService/File';
import { AddInteractionCommand } from '../models/CustomerService/AddInteractionCommand';
import { StatusEntry } from '../models/CustomerService/StatusEntry';
import { IService } from './IService';
import { StatusValues } from '../models/CustomerService/StatusValues';
import { AddTagIdCommand} from '../models/CustomerService/AddTagIdCommand';
import { InteractionDTO } from '../models/CustomerService/InteractionDTO';
import { LookupCriteria } from '../models/CustomerService/LookupCriteria';
import { SearchCriteria } from '../models/CustomerService/SearchCriteria';
import { AddCustomerCommand } from '../models/CustomerService/AddCustomerCommand';
import { AddCustomerCommandResult } from '../models/CustomerService/AddCustomerCommandResult';
import { UpdateCustomerCommand } from '../models/CustomerService/UpdateCustomerCommand';
import { UpdateCustomerCommandResult } from '../models/CustomerService/UpdateCustomerCommandResult';
import { AddInteractionCommandResult } from '../models/CustomerService/AddInteractionCommandResult';
import { DeleteCustomerCommandResult } from '../models/CustomerService/DeleteCustomerCommandResult';
import { CommandResult } from '../models/CustomerService/CommandResult';


export interface ICustomerService extends IService {
  addCustomer(command: AddCustomerCommand): Promise<AddCustomerCommandResult>;

  updateCustomer(customerId: number, command: UpdateCustomerCommand): Promise<UpdateCustomerCommandResult>;

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

  updateAddress(customerId: number, address: Address): Promise<CommandResult>;

  updateBankAccount(customerId: number, bankAccount: BankAccount): Promise<CommandResult>;

  updateContactData(customerId: number, contact: Contact): Promise<CommandResult>;

  updateCompany(customerId: number, company: string): Promise<CommandResult>;

  updateCompany2(customerId: number, company: string): Promise<CommandResult>;
  
  updateStatus(customerId: number, statusId: number): Promise<void>;

  updateDefaultStudio(customerId: number, studioNumber: number): Promise<CommandResult>;

  addCustomerInteraction(customerId: number, command: AddInteractionCommand): Promise<AddInteractionCommandResult>;

  getCustomerInteractions(customerId: number): Promise<InteractionDTO[]>;

  lookupInteractions(customerId: number, contactType: number, selectTop: number): Promise<InteractionDTO[]>;

  getInteractionAttachment(interactionId: number): Promise<File>;

  deleteCustomerRelatedData(customerId: number): Promise<any>;

  deleteCustomer(customerId: number): Promise<DeleteCustomerCommandResult>;
}
