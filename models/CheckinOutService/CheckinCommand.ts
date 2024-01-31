export class CheckinCommand {
  studioNumber?: number;
  tagId: string = null;
  accessPossibility?: number;
  accessLevel?: number;
  checkoutIfAlreadyPrersent: boolean = false;
  timeslotRequired: boolean = false;
  dryRun: boolean = false;
}