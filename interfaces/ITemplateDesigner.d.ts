import { RenderFileType } from '../models/TemplateDesigner/RenderFileType';
import { TemplateModel } from '../models/TemplateDesigner/TemplateModel';
export interface ITemplateDesigner {
    render(data: any, templateId: any, type: RenderFileType): Promise<any>;
    renderHtml(url: string, data: any): Promise<any>;
    getModels(): Promise<Array<TemplateModel>>;
    getModel(id: string): Promise<TemplateModel>;
    updateModel(id: string, data: TemplateModel): Promise<any>;
    createModel(id: string, data: TemplateModel): Promise<any>;
    deleteModel(id: string): Promise<any>;
}
