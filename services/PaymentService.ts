import { ApiClient } from './ApiClient';

import { IPaymentService } from '../interfaces/IPaymentService';
import { PaymentRun } from '../models/PaymentService/PaymentRun';

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
      new Error('failed to retrieve payment run from payment service');
    }
  }
}
