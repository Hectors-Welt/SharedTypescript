import { Customer } from './Customer';

export class UpdateCustomerCommandResult {
  success: boolean;
  message: string;
  errors: any;
  customer: Customer;
}