import { Address } from './Address';
import { BankAccount } from './BankAccount';
import { Contact } from './Contact';
import { PersonalData } from './PersonalData';

export class UpdateCustomerCommand {
  studioNumber: number;
  customerStatus: number;
  personalData: PersonalData;
  address: Address;
  contact: Contact;
  bankAccount: BankAccount;
  company: string;
  company2: string;
  checkinRemark: string;
}