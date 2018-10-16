import { ReservationInformation } from './ReservationInformation';
import { ClassAttendee } from './ClassAttendee';
export declare class Class {
    id: number;
    begin: string;
    end: string;
    courseId: number;
    instructorId: number;
    courseLevelId: number;
    courseTypeIds: number[];
    reservationInformation: ReservationInformation;
    roomId: number;
    studioId: number;
    isCancelled: boolean;
    isReplacement: boolean;
    childcareAvailable: boolean;
    status: string;
    inviteAttendeesForRating: boolean;
    attendees: ClassAttendee[];
    maxAttendeesAllowed: number;
}
