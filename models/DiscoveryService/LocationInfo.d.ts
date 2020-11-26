import { Address } from "../CustomerService/Address";
export declare class LocationInfo {
    studioName: string;
    studioNumber: number;
    studioId: number;
    clubId: string;
    contact: any;
    maxCheckinsAllowed: number;
    address: Address;
    constructor(data: any);
}
