import { Customer } from '../models/CustomerService/Customer';
import { Address } from '../models/CustomerService/Address';

export interface ICustomerService {
  getCustomerByCustomerId(customerId: number): Promise<Customer>
  getCustomerByTagId(tagId: number): Promise<Customer>
  updateAddress(customerId: number, address: Address): Promise<void>
}