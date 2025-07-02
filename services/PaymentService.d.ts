import { IPaymentService } from '../interfaces/IPaymentService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';
export declare class PaymentService implements IPaymentService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getPaymentRunById(paymentRunId: number): Promise<PaymentRun>;
    revokePayment(paymentRunId: number, customerId: number, reason: string, fee?: number): Promise<void>;
}
