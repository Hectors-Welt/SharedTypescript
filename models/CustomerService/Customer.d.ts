import { Contact } from './Contact';
import { PersonalData } from './PersonalData';
import { Address } from './Address';
import { PaymentInformation } from './PaymentInformation';
export declare class Customer {
    id: number;
    defaultStudioNumber: number;
    personalData: PersonalData;
    contact: Contact;
    address: Address;
    paymentInformation: PaymentInformation;
}
