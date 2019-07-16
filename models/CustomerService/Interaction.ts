import { File } from './File';

export class Interaction {
  contactCategory: number;
  contactType: number;
  employeeId: number;
  subject: string;
  note: string;
  attachment: File;
  rawData: string;
}
