import { Customer } from './Customer';
export declare class UpdateCustomerCommandResult {
    success: boolean;
    message: string;
    errors: any;
    customer: Customer;
}
