export class LocationInfo {
  studioName: string;
  studioNumber: number;
  studioId: number;
  clubId: string;
  contact: any;
  maxCheckinsAllowed: number;

  constructor(data: any) {
    this.studioName = data.studioName;
    this.studioNumber = data.studioNumber;
    this.studioId = data.studioId;
    this.clubId = data.clubId;
    this.contact = data.contact;
    this.maxCheckinsAllowed = data.maxCheckinsAllowed;
  }
}
