import { ISecaConnector } from "../interfaces/ISecaConnector";
export declare class SecaConnector implements ISecaConnector {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getMeasurements(customerId: number): Promise<any>;
    getMeasurementDetails(customerId: number, measurementId: string): Promise<any>;
}
