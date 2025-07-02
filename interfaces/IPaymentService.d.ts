import { IService } from './IService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';
import { RevokePaymentCommandResult } from '../models/PaymentService/RevokePaymentCommandResult';
export interface IPaymentService extends IService {
    getPaymentRunById(paymentRunId: number): Promise<PaymentRun>;
    revokePayment(paymentRunId: number, customerId: number, reason: string, fee?: number): Promise<RevokePaymentCommandResult>;
}
