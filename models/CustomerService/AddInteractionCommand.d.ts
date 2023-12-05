import { Attachment } from './Attachment';
export declare class AddInteractionCommand {
    contactCategory: number;
    contactType: number;
    employeeId: number;
    subject: string;
    note: string;
    attachment: Attachment;
    attachments: Attachment[];
    rawData: string;
}
