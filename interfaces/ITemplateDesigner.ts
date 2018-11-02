import { RenderFileType } from '../models/TemplateDesigner/RenderFileType';
import { TemplateModel } from '../models/TemplateDesigner/TemplateModel';
import { IService } from './IService';

export interface ITemplateDesigner extends IService {
  render(data: any, templateId: any, type: RenderFileType, asUrl?: boolean, persist?: boolean): Promise<any>;

  renderUrl(url: string, data: any, asUrl?: boolean, persist?: boolean): Promise<any>;

  getModels(): Promise<Array<TemplateModel>>;

  getModel(id: string): Promise<TemplateModel>;

  updateModel(id: string, data: TemplateModel): Promise<any>;

  createModel(id: string, data: TemplateModel): Promise<any>;

  deleteModel(id: string): Promise<any>;
}
