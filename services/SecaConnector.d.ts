import { ISecaConnector } from "../interfaces/ISecaConnector";
import { DeleteSecaMeasurementCommandResult } from '../models/SecaConnector/DeleteSecaMeasurementCommandResult';
export declare class SecaConnector implements ISecaConnector {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getMeasurementsCompact(customerId: number): Promise<any>;
    getMeasurementsPaginated(customerId: number, pageNumber?: number, pageSize?: number): Promise<any>;
    getMeasurementDetails(customerId: number, measurementId: string): Promise<any>;
    deleteMeasurement(customerId: number, measurementId: string): Promise<DeleteSecaMeasurementCommandResult>;
}
