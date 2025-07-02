import { IService } from './IService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';
export interface IPaymentService extends IService {
    getPaymentRunById(paymentRunId: number): Promise<PaymentRun>;
    revokePayment(paymentRunId: number, customerId: number, reason: string, fee?: number): Promise<void>;
}
