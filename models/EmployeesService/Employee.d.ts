import { Worktime } from './Worktime';
export declare class Employee {
    id: number;
    customerId: number;
    name: string;
    surname: string;
    rights: string[];
    roles: string[];
    studioIds: number[];
    currentWorktime?: Worktime;
    isZmv: boolean;
}
