export class PunishmentContainer {
  customerId: number;
  current: Punishment;
  history: Punishment[];
}

export class Punishment {
  classId: number;
  instructorId: number;
  created: string;
  hoursToDelayFutureReservations: number;
  validTill: string;
}
