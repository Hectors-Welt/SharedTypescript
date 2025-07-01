import { IService } from './IService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';

export interface IPaymentService extends IService {
  getPaymentRunById(paymentRunId: number): Promise<PaymentRun>;
}
