import { Attachment } from './Attachment';

export class Interaction {
  contactCategory: number;
  contactType: number;
  employeeId: number;
  subject: string;
  note: string;
  attachment: Attachment;
  rawData: string;
}
