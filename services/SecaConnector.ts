import { ISecaConnector } from "../interfaces/ISecaConnector";
import { DeleteSecaMeasurementCommandResult } from '../models/SecaConnector/DeleteSecaMeasurementCommandResult';
import { ApiClient } from "./ApiClient";

export class SecaConnector implements ISecaConnector {
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

    async getMeasurementsCompact(customerId: number): Promise<any> {
        try {
            return await ApiClient.GET(`${this.baseUrl}/internal/customers/${customerId}/measurementsCompact`);
        } catch (err) {
            throw new Error(`failed to retrieve measurements from seca connector: ${err.message}`);
        }
    }

    async getMeasurementsPaginated(customerId: number, pageNumber: number = 1, pageSize: number = 10): Promise<any> {
        try {
            return await ApiClient.GET(`${this.baseUrl}/internal/customers/${customerId}/measurementsPaginated?pageNumber=${pageNumber}&pageSize=${pageSize}`);
        } catch (err) {
            throw new Error(`failed to retrieve measurements from seca connector: ${err.message}`);
        }
    }

    async getMeasurementDetails(customerId: number, measurementId: string) {
        try {
            return await ApiClient.GET(`${this.baseUrl}/internal/customers/${customerId}/measurements/${measurementId}`);
        } catch (err) {
            throw new Error(`failed to retrieve measurement from seca connector: ${err.message}`);
        }
    }

    async deleteMeasurement(customerId: number, measurementId: string): Promise<DeleteSecaMeasurementCommandResult> {
        try {
            return await ApiClient.DELETE(`${this.baseUrl}/internal/customers/${customerId}/measurements/${measurementId}`);
        } catch (err) {
            throw new Error(`failed to delete measurement from seca connector: ${err.message}`);
        }
    }
}