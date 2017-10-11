export class LocationInfo {
  studioNumber: number;
  studioId: number;
  clubId: string;

  constructor(data: any) {
    this.studioNumber = data.studioNumber;
    this.studioId = data.studioId;
    this.clubId = data.clubId;
  }
}