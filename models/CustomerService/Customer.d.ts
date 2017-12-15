import { Contact } from './Contact';
import { PersonalData } from './PersonalData';
import { Address } from './Address';
import { BankAccount } from './BankAccount';
export declare class Customer {
    id: number;
    personalData: PersonalData;
    contact: Contact;
    address: Address;
    bankAccount: BankAccount;
}
