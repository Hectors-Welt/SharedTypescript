import { IService } from "./IService";
import { CreateSimpleOrderRequest } from "../models/PaypalIntegrationService/CreateSimpleOrderRequest";
import { OrderStatus } from "../models/PaypalIntegrationService/OrderStatus";
import { CaptureOrderRequest } from "../models/PaypalIntegrationService/CaptureOrderRequest";

export interface IPaypalIntegrationService extends IService {
    createSimpleOrderRequest(orderRequest: CreateSimpleOrderRequest): Promise<OrderStatus>;
    captureOrder(captureRequest: CaptureOrderRequest): Promise<OrderStatus>;
}