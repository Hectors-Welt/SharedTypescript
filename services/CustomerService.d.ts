import Customer from '../models/Customer';
import ICustomerService from '../interfaces/ICustomerService';
declare class CustomerService implements ICustomerService {
    private host;
    private port;
    constructor(host: string, port: number);
    getCustomerByCustomerId(customerId: number): Promise<Customer>;
}
export default CustomerService;
