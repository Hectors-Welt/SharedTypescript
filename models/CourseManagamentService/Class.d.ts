import { Course } from "./Course";
import { CourseLevel } from "./CourseLevel";
import { Instructor } from "./Instructor";
import { CourseType } from "./CourseType";
import { Room } from "./Room";
import { ReservationInformation } from "./ReservationInformation";
import { ClassAttendee } from "./ClassAttendee";
export declare class Class {
    id: number;
    beginning: string;
    ending: string;
    course: Course;
    instructor: Instructor;
    courseLevel: CourseLevel;
    courseTypes: CourseType[];
    reservationInformation: ReservationInformation;
    room: Room;
    studioId: number;
    isCancelled: boolean;
    isReplacement: boolean;
    childcareAvailable: boolean;
    status: string;
    inviteAttendeesForRating: boolean;
    attendees: ClassAttendee[];
}
