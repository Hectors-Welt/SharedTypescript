import { Template } from '../models/PushTemplateService/Template';

export interface IPushTemplateService {
  getTemplate(name: string, data: any): Promise<Template>;
}