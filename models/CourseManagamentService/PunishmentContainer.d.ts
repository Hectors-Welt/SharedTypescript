export declare class PunishmentContainer {
    customerId: number;
    current: Punishment;
    history: Punishment[];
}
export declare class Punishment {
    classId: number;
    created: string;
    hoursToDelayFutureReservations: number;
    validTill: string;
}
