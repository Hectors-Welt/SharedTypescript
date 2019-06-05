export interface IEmailTemplateService {
    getHtml(name: string, data: object): Promise<string>;
    getPdf(name: string, data: object): Promise<Buffer>;
}