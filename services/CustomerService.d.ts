import { Customer } from '../models/CustomerService/Customer';
import { ICustomerService } from '../interfaces/ICustomerService';
export declare class CustomerService implements ICustomerService {
    private host;
    private port;
    constructor(host: string, port: number);
    getCustomerByCustomerId(customerId: number): Promise<Customer>;
}
