import { Contact } from './Contact';
import { PersonalData } from './PersonalData';
import { Address } from './Address';
import { PaymentInformation } from './PaymentInformation';

export class Customer {
  id: number;
  defaultStudioNumber: number;
  status: string;
  isCheckinBlocked: boolean;
  personalData: PersonalData;
  contact: Contact;
  address: Address;
  paymentInformation: PaymentInformation;
  recruiterId?: number;
  supervisorId?: number;
}