import { Customer } from '../models/CustomerService/Customer';
import { ICustomerService } from '../interfaces/ICustomerService';
import { Address } from '../models/CustomerService/Address';
export declare class CustomerService implements ICustomerService {
    private host;
    private port;
    constructor(host: string, port: number);
    getCustomerByCustomerId(customerId: number): Promise<Customer>;
    getCustomerByTagId(tagId: number): Promise<Customer>;
    updateAddress(customerId: number, address: Address): Promise<void>;
}
