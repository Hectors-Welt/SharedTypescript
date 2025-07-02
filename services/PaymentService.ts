import { ApiClient } from './ApiClient';

import { IPaymentService } from '../interfaces/IPaymentService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';
import { RevokePaymentCommandResult } from '../models/PaymentService/RevokePaymentCommandResult';

export class PaymentService implements IPaymentService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}`;
  }

  async getPaymentRunById(paymentRunId: number): Promise<PaymentRun> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/paymentRuns/${paymentRunId}`);
    } catch (err) {
      throw new Error('failed to retrieve payment run from payment service');
    }
  }

  async revokePayment(paymentRunId: number, customerId: number, reason: string, fee?: number): Promise<RevokePaymentCommandResult> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/paymentRuns/${paymentRunId}/customers/${customerId}`, {
        reason,
        fee,
      }, true);
    } catch (err) {
      throw new Error('failed to revoke payment at payment service');
    }
  }
}
