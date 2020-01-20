import { MarkdownModel } from '../models/MarkdownEditor/MarkdownModel';
import { IService } from './IService';

export interface IMarkdownEditor extends IService {
  getMarkdowns(): Promise<Array<MarkdownModel>>;

  getMarkdown(id: string): Promise<MarkdownModel>;

  createMarkdown(data: any): Promise<any>;

  updateMarkdown(id: string, data: any): Promise<any>;

  deleteMarkdown(id: string): Promise<any>;

  renderHtml(id: string, asUrl?: boolean): Promise<any>;

  renderHtmlWithData(id: string, body: any): Promise<string>;

  renderText(id: string, asUrl?: boolean): Promise<any>;

  renderTextWithData(id: string, body: any): Promise<string>;

  renderPdf(id: string, asUrl?: boolean): Promise<any>;

  renderPdfWithData(id: string, body: any): Promise<Buffer>;

  renderUrlAsPdf(documentUrl: string, asUrl?: boolean): Promise<any>;
}
