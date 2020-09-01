import { IPaypalIntegrationService } from "../interfaces/IPaypalIntegrationService";
import { CreateSimpleOrderRequest } from "../models/PaypalIntegrationService/CreateSimpleOrderRequest";
import { CaptureOrderRequest } from "../models/PaypalIntegrationService/CaptureOrderRequest";
import { OrderStatus } from "../models/PaypalIntegrationService/OrderStatus";
import { ApiClient } from "./ApiClient";

export class PaypalIntegrationService implements IPaypalIntegrationService {
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

  async createSimpleOrderRequest(orderRequest: CreateSimpleOrderRequest): Promise<OrderStatus> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/api/createSimpleOrder`, orderRequest, null, true);
    } catch (err) {
      throw new Error('failed to create simple order request at paypal integration service');
    }
  }

  async captureOrder(captureRequest: CaptureOrderRequest): Promise<OrderStatus> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/api/captureOrder`, captureRequest, null, true);
    } catch (err) {
      throw new Error('failed to capture order at paypal integration service');
    }
  }
}