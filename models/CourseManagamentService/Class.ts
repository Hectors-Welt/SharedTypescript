import { Course } from "./Course";
import { CourseLevel } from "./CourseLevel";
import { Instructor } from "./Instructor";
import { CourseType } from "./CourseType";
import { Room } from "./Room";
import { ReservationInformation } from "./ReservationInformation";
import { ClassAttendee } from "./ClassAttendee";

export class Class {
  id: number
  begin: string
  end: string
  courseId: number
  instructorId: number
  courseLevelId: number
  courseTypeIds: number[]
  reservationInformation: ReservationInformation
  roomId: number
  studioId: number
  isCancelled: boolean
  isReplacement: boolean
  childcareAvailable: boolean
  status: string
  inviteAttendeesForRating: boolean
  attendees: ClassAttendee[]
}