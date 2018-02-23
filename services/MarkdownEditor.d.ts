import { IMarkdownEditor } from '../interfaces/IMarkdownEditor';
export declare class MarkdownEditor implements IMarkdownEditor {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    getMarkdowns(): Promise<Array<any>>;
    getMarkdown(id: string): Promise<any>;
    createMarkdown(data: any): Promise<any>;
    updateMarkdown(id: string, data: any): Promise<any>;
    deleteMarkdown(id: string): Promise<any>;
    renderHtml(id: string): Promise<any>;
    renderPdf(id: string): Promise<any>;
}
