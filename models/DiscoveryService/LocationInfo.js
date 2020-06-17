"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationInfo = void 0;
class LocationInfo {
    constructor(data) {
        this.studioName = data.studioName;
        this.studioNumber = data.studioNumber;
        this.studioId = data.studioId;
        this.clubId = data.clubId;
        this.contact = data.contact;
        this.maxCheckinsAllowed = data.maxCheckinsAllowed;
    }
}
exports.LocationInfo = LocationInfo;
