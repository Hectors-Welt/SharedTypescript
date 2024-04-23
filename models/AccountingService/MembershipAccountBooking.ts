import { PaymentType } from './PaymentType';

export class MembershipAccountBooking {
  date: string;
  amount: number;
  amountFrom: string;
  amountTill: string;
  note: string;
  paymentType: PaymentType;
  contractId: number;
  contractName: string;
}
