import { Customer } from './Customer';

export class AddCustomerCommandResult {
  success: boolean;
  message: string;
  errors: any;
  customer: Customer;
}