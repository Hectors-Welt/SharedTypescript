import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';
import { MarkdownModel } from '../models/MarkdownEditor/MarkdownModel';
export declare class MarkdownEditor implements IMarkdownEditor {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    getMarkdowns(): Promise<Array<MarkdownModel>>;
    getMarkdown(id: string): Promise<MarkdownModel>;
    createMarkdown(data: any): Promise<any>;
    updateMarkdown(id: string, data: any): Promise<any>;
    deleteMarkdown(id: string): Promise<any>;
    renderHtml(id: string, asUrl?: boolean): Promise<any>;
    renderText(id: string, asUrl?: boolean): Promise<any>;
    renderPdf(id: string, asUrl?: boolean): Promise<any>;
}
