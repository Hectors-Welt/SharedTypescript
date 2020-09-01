import { IPaypalIntegrationService } from "../interfaces/IPaypalIntegrationService";
import { CreateSimpleOrderRequest } from "../models/PaypalIntegrationService/CreateSimpleOrderRequest";
import { CaptureOrderRequest } from "../models/PaypalIntegrationService/CaptureOrderRequest";
import { OrderStatus } from "../models/PaypalIntegrationService/OrderStatus";
export declare class PaypalIntegrationService implements IPaypalIntegrationService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    createSimpleOrderRequest(orderRequest: CreateSimpleOrderRequest): Promise<OrderStatus>;
    captureOrder(captureRequest: CaptureOrderRequest): Promise<OrderStatus>;
}
