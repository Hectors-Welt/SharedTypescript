export declare class HealthInfo {
    version: string;
    healthy: object;
    unhealthy: object;
    readonly timestamp: string;
    readonly isHealthy: boolean;
    constructor(version: string);
    toJSON(): {
        version: string;
        healthy: object;
        unhealthy: object;
        timestamp: string;
        isHealthy: boolean;
    };
}
