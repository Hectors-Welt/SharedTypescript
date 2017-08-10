export interface ILegacyAppsiteBackend {
    login(loginRequest: any): Promise<any>;
    getAppsettings(): Promise<any>;
}
