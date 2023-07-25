import { Address } from './Address';
import { BankAccount } from './BankAccount';
import { Contact } from './Contact';
import { PersonalData } from './PersonalData';

export class AddCustomerCommand {
  studioNumber: number;
  customerStatus: number;
  personalData: PersonalData;
  address: Address;
  contact: Contact;
  bankAccount: BankAccount;
  employeeId: string;
  recruiterId?: number;
  supervisorId?: number;
  promotionType: string;
  company: string;
  company2: string;
  checkinRemark: string;
  testRun: boolean;
}