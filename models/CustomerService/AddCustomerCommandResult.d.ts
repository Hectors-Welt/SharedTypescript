import { Customer } from './Customer';
export declare class AddCustomerCommandResult {
    success: boolean;
    message: string;
    errors: any[];
    customer: Customer;
}
