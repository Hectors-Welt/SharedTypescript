import { IPaymentService } from '../interfaces/IPaymentService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';
export declare class PaymentgService implements IPaymentService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getPaymentRunById(paymentRunId: number): Promise<PaymentRun>;
}
