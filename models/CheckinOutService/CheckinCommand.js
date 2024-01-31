"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinCommand = void 0;
class CheckinCommand {
    constructor() {
        this.tagId = null;
        this.checkoutIfAlreadyPresent = false;
        this.timeslotRequired = false;
        this.dryRun = false;
    }
}
exports.CheckinCommand = CheckinCommand;
