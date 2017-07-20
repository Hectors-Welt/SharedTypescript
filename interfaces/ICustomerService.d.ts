import { Customer } from '../models/Customer';
export interface ICustomerService {
    getCustomerByCustomerId(customerId: number): Promise<Customer>;
}
