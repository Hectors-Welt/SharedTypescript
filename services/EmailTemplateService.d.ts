/// <reference types="node" />
import { IEmailTemplateService } from "../interfaces/IEmailTemplateService";
export declare class EmailTemplateService implements IEmailTemplateService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getHtml(name: string, data: object): Promise<string>;
    getPdf(name: string, data: object): Promise<Buffer>;
}
