import { AppointmentType } from './AppointmentType';
import { Instructor } from './Instructor';
import { Room } from './Room';

export class Appointment {
  id: number;
  appointmentTypeId: number;
  employeeIds: number[];
  roomId: number;
  studioId: number;
  begin: string;
  end: string;
}