import * as popsicle from 'popsicle';
import { ITemplateDesigner } from '../interfaces/ITemplateDesigner';
import { RenderFileType } from '../models/TemplateDesigner/RenderFileType';
import { TemplateModel } from '../models/TemplateDesigner/TemplateModel';

export class TemplateDesigner implements ITemplateDesigner {
  headers: any = {
    'content-type': 'application/json',
    accept: 'application/json',
    referer: `http://${this.host}:${this.port}/`,
  };

  constructor(private host: string, private port: number) {
  }

  render(data: any, templateId: any, type: RenderFileType = RenderFileType.PDF, asUrl?: boolean): Promise<any> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/render/${templateId}?type=${type}${asUrl ? '&url' : ''}`,
      method: 'POST',
      headers: this.headers,
      body: data,
    })
    .use(asUrl ? popsicle.plugins.parse('json') : (self, next) => next())
    .then(result => asUrl ? result.body.url : result.body)
    .catch(() => new Error('failed to call render on template service'));
  }

  renderHtml(url: string, data: any, asUrl?: boolean): Promise<any> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/renderHtml${asUrl ? '?url' : ''}`,
      method: 'POST',
      headers: this.headers,
      body: {
        url,
        data,
      },
    })
    .use(asUrl ? popsicle.plugins.parse('json') : (self, next) => next())
    .then(result => asUrl ? result.body.url : result.body)
    .catch(() => new Error('failed to call renderHtml on template service'));
  }

  getModels(): Promise<Array<TemplateModel>> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/models`,
      method: 'GET',
      headers: this.headers,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call getModels on template service'));
  }

  getModel(id: string): Promise<TemplateModel> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/model/${id}`,
      method: 'GET',
      headers: this.headers,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call getModel on template service'));
  }

  updateModel(id: string, data: TemplateModel): Promise<any> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/model/${id}`,
      method: 'PUT',
      headers: this.headers,
      body: data,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call updateModel on template service'));
  }

  createModel(id: string, data: TemplateModel): Promise<any> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/model/${id}`,
      method: 'POST',
      headers: this.headers,
      body: data,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call createModel on template service'));
  }

  deleteModel(id: string): Promise<any> {
    return popsicle.request({
      url: `http://${this.host}:${this.port}/api/model/${id}`,
      method: 'DELETE',
      headers: this.headers,
    })
    .use(popsicle.plugins.parse('json'))
    .then(result => result.body)
    .catch(() => new Error('failed to call deleteModel on template service'));
  }

}