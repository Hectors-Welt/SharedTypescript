import * as popsicle from 'popsicle';
import { ITemplateDesigner } from '../interfaces/ITemplateDesigner';
import { RenderFileType } from '../models/TemplateDesigner/RenderFileType';
import { TemplateModel } from '../models/TemplateDesigner/TemplateModel';
import { ApiClient } from './ApiClient';

export class TemplateDesigner implements ITemplateDesigner {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}/api`;
  }

  async render(data: any, templateId: any, type: RenderFileType = RenderFileType.PDF, asUrl?: boolean): Promise<any> {
    try {
      const result = await popsicle.request({
        url: `${this.baseUrl}/render/${templateId}?type=${type}${asUrl ? '&url' : ''}`,
        method: 'POST',
        headers: Object.assign({}, ApiClient.headers, { referer: this.baseUrl }),
        body: data,
      })
      .use(asUrl ? popsicle.plugins.parse('json') : (self, next) => next());

      if (asUrl) {
        return result.body.url;
      }
      return result.body;
    } catch (err) {
      throw new Error('failed to call render on template service');
    }
  }

  async renderUrl(url: string, data: any, asUrl?: boolean): Promise<any> {
    try {
      const result = await popsicle.request({
        url: `${this.baseUrl}/renderUrl${asUrl ? '?url' : ''}`,
        method: 'POST',
        headers: Object.assign({}, ApiClient.headers, { referer: this.baseUrl }),
        body: {
          url,
          data,
        },
      })
      .use(asUrl ? popsicle.plugins.parse('json') : (self, next) => next());

      if (asUrl) {
        return result.body.url;
      }
      return result.body;
    } catch (err) {
      throw new Error('failed to call renderUrl on template service');
    }
  }

  async getModels(): Promise<Array<TemplateModel>> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/models`);
    } catch (err) {
      throw new Error('failed to call getModels on template service');
    }
  }

  async getModel(id: string): Promise<TemplateModel> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/model/${id}`);
    } catch (err) {
      throw new Error('failed to call getModel on template service');
    }
  }

  async updateModel(id: string, data: TemplateModel): Promise<any> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/model/${id}`, data);
    } catch (err) {
      throw new Error('failed to call updateModel on template service');
    }
  }

  async createModel(id: string, data: TemplateModel): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/model/${id}`, data);
    } catch (err) {
      throw new Error('failed to call createModel on template service');
    }
  }

  async deleteModel(id: string): Promise<any> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/model/${id}`);
    } catch (err) {
      throw new Error('failed to call deleteModel on template service');
    }
  }

}