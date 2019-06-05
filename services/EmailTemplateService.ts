import { IEmailTemplateService } from "../interfaces/IEmailTemplateService";
import { ApiClient } from "./ApiClient";

export class EmailTemplateService implements IEmailTemplateService {
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

    async getHtml(name: string, data: object): Promise<string> {
        try {
            return await ApiClient.POST(`${this.baseUrl}/rendering/email/${name}`, data);
        } catch (err) {
            throw new Error(`failed to retrieve html from email template service: ${err.message}`);
        }
    }

    async getPdf(name: string, data: object): Promise<Buffer> {
        try {
            return await ApiClient.POST(`${this.baseUrl}/rendering/email/${name}/pdf`, data);
        } catch (err) {
            throw new Error(`failed to retrieve html from email template service: ${err.message}`);
        }
    }
}