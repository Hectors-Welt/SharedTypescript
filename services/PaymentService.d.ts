import { IPaymentService } from '../interfaces/IPaymentService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';
import { RevokePaymentCommandResult } from '../models/PaymentService/RevokePaymentCommandResult';
export declare class PaymentService implements IPaymentService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getPaymentRunById(paymentRunId: number): Promise<PaymentRun>;
    revokePayment(paymentRunId: number, customerId: number, reason: string, fee?: number): Promise<RevokePaymentCommandResult>;
}
