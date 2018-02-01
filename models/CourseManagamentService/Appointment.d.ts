import { AppointmentType } from "./AppointmentType";
import { Instructor } from "./Instructor";
import { Room } from "./Room";
export declare class Appointment {
    id: number;
    appointmentType: AppointmentType;
    employees: Instructor[];
    room: Room;
    studioId: number;
    begin: string;
    end: string;
}