export declare class HealthInfo {
    version: string;
    healthy: Object;
    unhealthy: Object;
    readonly timestamp: string;
    readonly isHealthy: boolean;
    constructor(version: string);
    toJSON(): {
        version: string;
        healthy: Object;
        unhealthy: Object;
        timestamp: string;
        isHealthy: boolean;
    };
}
