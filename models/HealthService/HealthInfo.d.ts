export declare class HealthInfo {
    version: string;
    backendId: string;
    healthy: Object;
    unhealthy: Object;
    constructor(version: string);
    get timestamp(): string;
    get isHealthy(): boolean;
    toJSON(): {
        version: string;
        backendId: string;
        healthy: Object;
        unhealthy: Object;
        timestamp: string;
        isHealthy: boolean;
    };
}
