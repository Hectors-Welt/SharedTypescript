import { Customer } from '../models/CustomerService/Customer';
import { ICustomerService } from '../interfaces/ICustomerService';
import { Address } from '../models/CustomerService/Address';
import { BankAccount } from '../models/CustomerService/BankAccount';
import { Contact } from '../models/CustomerService/Contact';
import { File } from '../models/CustomerService/File';
export declare class CustomerService implements ICustomerService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    findDoublets(name: string, birthday: string): Promise<Customer[]>;
    getCustomerByCustomerId(customerId: number): Promise<Customer>;
    getCustomerByTagId(tagId: number): Promise<Customer>;
    getProfilePicture(customerId: number): Promise<File>;
    updateAddress(customerId: number, address: Address): Promise<void>;
    updateBankAccount(customerId: number, bankAccount: BankAccount): Promise<void>;
    updateContactData(customerId: number, contact: Contact): Promise<void>;
}
