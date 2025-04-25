import { BistroAccountDetails } from './BistroAccountDetails';

export class BistroAccount {
  balance: number;
  bonusIncluded: number;
  commissionIncluded: number;
  availableForPayback: number;
  details: BistroAccountDetails;
}
