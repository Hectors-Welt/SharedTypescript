import { BankAccount } from './BankAccount';
import { SepaMandate } from './SepaMandate';

export class PaymentInformation {
  paymentType: string;
  bankAccount: BankAccount;
  sepaMandate: SepaMandate;
  stopDirectDebit: boolean;
}
