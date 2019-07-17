import * as popsicle from 'popsicle';
import { ApiClient } from './ApiClient';
import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';
import { MarkdownModel } from '../models/MarkdownEditor/MarkdownModel';

export class MarkdownEditor implements IMarkdownEditor {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}/api`;
  }

  async getMarkdowns(): Promise<Array<MarkdownModel>> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/md`);
    } catch (err) {
      throw new Error('failed to call getMarkdowns on markdown editor');
    }
  }

  async getMarkdown(id: string): Promise<MarkdownModel> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/md/${id}`);
    } catch (err) {
      throw new Error('failed to call getMarkdown on markdown editor');
    }
  }

  async createMarkdown(data: any): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/md`, data);
    } catch (err) {
      throw new Error('failed to call createMarkdown on markdown editor');
    }
  }

  async updateMarkdown(id: string, data: any): Promise<any> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/md/${id}`, data);
    } catch (err) {
      throw new Error('failed to call updateMarkdown on markdown editor');
    }
  }

  async deleteMarkdown(id: string): Promise<any> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/md/${id}`);
    } catch (err) {
      throw new Error('failed to call deleteMarkdown on markdown editor');
    }
  }

  async renderHtml(id: string, asUrl?: boolean): Promise<any> {
    const url = `${this.baseUrl}/md/${id}/html`;
    try {
      if (asUrl) {
        return url;
      }

      const result = await popsicle.request({
        url,
        method: 'GET',
      });

      return result.status < 400 ? result.body : null;
    } catch (err) {
      throw new Error('failed to call renderHtml on markdown editor');
    }
  }

  async renderText(id: string, asUrl?: boolean): Promise<any> {
    const url = `${this.baseUrl}/md/${id}/text`;
    try {
      if (asUrl) {
        return url;
      }

      const result = await popsicle.request({
        url,
        method: 'GET',
      });

      return result.status < 400 ? result.body : null;
    } catch (err) {
      throw new Error('failed to call renderText on markdown editor');
    }
  }

  async renderPdf(id: string, asUrl?: boolean): Promise<any> {
    const url = `${this.baseUrl}/md/${id}/pdf`;
    try {
      const result = await popsicle.request({
        url,
        method: 'GET',
        transport: popsicle.createTransport({
          type: 'buffer',
          buffer: true,
          maxBufferSize: 200000000,
        } as any),
      });

      if (asUrl && result.status === 200) {
        return url;
      }

      return result.status < 400 ? result.body : null;
    } catch (err) {
      throw new Error('failed to call renderPdf on markdown editor');
    }
  }

  async renderUrlAsPdf(documentUrl: string, asUrl?: boolean): Promise<string | Buffer> {
    const url = `${this.baseUrl}/render?url=${documentUrl}`;
    try {
      if (asUrl) {
        return url;
      }
      const result = await popsicle.request({
        url,
        method: 'GET',
        transport: popsicle.createTransport({
          type: 'buffer',
          buffer: true,
          maxBufferSize: 200000000,
        } as any),
      });

      return result.status < 400 ? result.body : null;
    } catch (err) {
      throw new Error('failed to call renderPdf on markdown editor');
    }
  }
}
