import { ITemplateDesigner } from '../interfaces/ITemplateDesigner';
import { RenderFileType } from '../models/TemplateDesigner/RenderFileType';
import { TemplateModel } from '../models/TemplateDesigner/TemplateModel';
export declare class TemplateDesigner implements ITemplateDesigner {
    private host;
    private port;
    headers: any;
    constructor(host: string, port: number);
    render(data: any, templateId: any, type?: RenderFileType, asUrl?: boolean): Promise<any>;
    renderUrl(url: string, data: any, asUrl?: boolean): Promise<any>;
    getModels(): Promise<Array<TemplateModel>>;
    getModel(id: string): Promise<TemplateModel>;
    updateModel(id: string, data: TemplateModel): Promise<any>;
    createModel(id: string, data: TemplateModel): Promise<any>;
    deleteModel(id: string): Promise<any>;
}
