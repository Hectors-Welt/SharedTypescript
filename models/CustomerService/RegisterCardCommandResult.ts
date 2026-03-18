export class RegisterCardCommandResult {
  success: boolean;
  message: string;
  errors: any;
  returnValue?: number;
  depositPrice?: number;
  depositPayment?: number;
  costsPrice?: number;
  costsPayment?: number;
}