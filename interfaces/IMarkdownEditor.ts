export interface IMarkdownEditor {
  getMarkdowns(): Promise<Array<any>>;

  getMarkdown(id: string): Promise<any>;

  createMarkdown(data: any): Promise<any>;

  updateMarkdown(id: string, data: any): Promise<any>;

  deleteMarkdown(id: string): Promise<any>;

  renderHtml(id: string): Promise<any>;

  renderPdf(id: string): Promise<any>;
}
