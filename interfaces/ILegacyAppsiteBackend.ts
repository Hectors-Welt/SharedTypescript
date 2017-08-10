export interface ILegacyAppsiteBackend {
  login(loginRequest: any) : Promise<any>
  getAppsettings(): Promise<any>
  getCoursetypes(): Promise<any>
  getCourselevels(): Promise<any>
  getClubs(): Promise<any>
  getInstructors(clubId: number): Promise<any>
}