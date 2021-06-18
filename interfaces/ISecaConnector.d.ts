import { IService } from "./IService";
export interface ISecaConnector extends IService {
    getMeasurements(customerId: number): Promise<any>;
    getMeasurementDetails(customerId: number, measurementId: string): any;
}
