import { Customer } from '../models/CustomerService/Customer';

export interface ICustomerService {
  getCustomerByCustomerId(customerId: number): Promise<Customer>;

  getCustomerByTagId(tagId: number): Promise<Customer>;
}