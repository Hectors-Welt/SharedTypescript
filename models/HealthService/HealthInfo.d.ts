export declare class HealthInfo {
    version: string;
    healthy: Object;
    unhealthy: Object;
    constructor(version: string);
    readonly timestamp: string;
    readonly isHealthy: boolean;
    toJSON(): {
        version: string;
        healthy: Object;
        unhealthy: Object;
        timestamp: string;
        isHealthy: boolean;
    };
}
