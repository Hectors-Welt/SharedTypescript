import * as handlebars from 'handlebars';

import { ApiClient } from './ApiClient';
import { IPushTemplateService } from '../interfaces/IPushTemplateService';
import { Template } from '../models/PushTemplateService/Template';

export class PushTemplateService implements IPushTemplateService {
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

  async getTemplate(name: string, data: any): Promise<Template> {
    try {
      const template: Template = await ApiClient.GET(`${this.baseUrl}/api/templates/${name}`);

      if (data) {
        template.short = (handlebars.compile(template.short))(data);
        template.long = (handlebars.compile(template.long))(data);
      }

      return template;
    } catch (err) {
      throw new Error('failed to retrieve template from push template service');
    }
  }
}