import { IService } from "./IService";

export interface ISecaConnector extends IService {
    getMeasurementsCompact(customerId: number): Promise<any>;
    getMeasurementsPaginated(customerId: number, pageNumber: number, pageSize: number): Promise<any>;
    getMeasurementDetails(customerId: number, measurementId: string);
    deleteMeasurement(customerId: number, measurementId: string);
  }