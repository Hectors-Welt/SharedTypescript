export class HectorDbSettings {
  host: string
  port: number
  username: string
  password: string
  mdb1: string
  mdb2: string
  mdb4: string
  mdb5: string
  mdb8: string
  mdb12: string
  hpdotdata: string
  hpdotsystem: string

  constructor(settings: any) {
    if (!settings || !settings.host || !settings.port) {
      throw new Error("invalid data. ensure host and port are present.");
    }

    this.host = settings.host;
    this.port = settings.port;
    this.username = settings.username;
    this.password = settings.password;
    this.mdb1 = settings.mdb1;
    this.mdb2 = settings.mdb2;
    this.mdb4 = settings.mdb4;
    this.mdb5 = settings.mdb5;
    this.mdb8 = settings.mdb8;
    this.mdb12 = settings.mdb12;
    this.hpdotdata = settings.hpdotdata;
    this.hpdotsystem = settings.hpdotsystem;
  }
}