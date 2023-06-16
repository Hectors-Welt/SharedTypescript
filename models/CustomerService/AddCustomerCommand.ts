import { Address } from './Address';
import { BankAccount } from './BankAccount';
import { Contact } from './Contact';
import { PersonalData } from './PersonalData';

export class AddCustomerCommand {
  studioNumber: number;
  personalData: PersonalData;
  bankAccount: BankAccount;
  contact: Contact;
  address: Address;
  customerStatus: number;
  employeeId: string;
}