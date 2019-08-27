import { IPushTemplateService } from '../interfaces/IPushTemplateService';
import { Template } from '../models/PushTemplateService/Template';
export declare class PushTemplateService implements IPushTemplateService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getTemplate(name: string): Promise<Template>;
}
