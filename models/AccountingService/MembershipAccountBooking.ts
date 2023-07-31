import { PaymentType } from './PaymentType';

export class MembershipAccountBooking {
  date: string;
  amount: number;
  note: string;
  paymentType: PaymentType;
  contractId: number;
}
