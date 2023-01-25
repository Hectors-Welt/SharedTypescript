export declare class MongoDbSettings {
    host: string;
    port?: number;
    username: string;
    password: string;
    useAtlas: boolean;
    constructor(settings: any);
    getConnectionUri(database: string): string;
}
