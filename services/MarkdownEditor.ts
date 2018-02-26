import * as popsicle from 'popsicle';
import { ApiClient } from './ApiClient';
import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';

export class MarkdownEditor implements IMarkdownEditor {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}/api`;
  }

  async getMarkdowns(): Promise<Array<any>> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/md`);
    } catch (err) {
      throw new Error('failed to call getMarkdowns on markdown editor');
    }
  }

  async getMarkdown(id: string): Promise<any> {
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

  async renderHtml(id: string): Promise<any> {
    try {
      const result = await popsicle.request({
        url: `${this.baseUrl}/md/${id}/html`,
        method: 'GET',
      });

      return result.body;
    } catch (err) {
      throw new Error('failed to call renderHtml on markdown editor');
    }
  }

  async renderPdf(id: string): Promise<any> {
    try {
      const result = await popsicle.request({
        url: `${this.baseUrl}/md/${id}/pdf`,
        method: 'GET',
      });
      return result.body;
    } catch (err) {
      throw new Error('failed to call renderPdf on markdown editor');
    }
  }
}