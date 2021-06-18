import { ISecaConnector } from "../interfaces/ISecaConnector";
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

    async getMeasurements(customerId: number): Promise<any> {
        try {
            return await ApiClient.GET(`${this.baseUrl}/v2/user/${customerId}`);
        } catch (err) {
            throw new Error(`failed to retrieve measurements from seca connector: ${err.message}`);
        }
    }

    async getMeasurementDetails(customerId: number, measurementId: string) {
        try {
            return await ApiClient.GET(`${this.baseUrl}/v2/user/${customerId}/measurements/${measurementId}`);
        } catch (err) {
            throw new Error(`failed to retrieve measurement from seca connector: ${err.message}`);
        }
    }
}