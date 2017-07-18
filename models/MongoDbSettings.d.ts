declare class MongoDbSettings {
    host: string;
    port: number;
    username: string;
    password: string;
    constructor(settings: any);
    getConnectionUri(database: string): string;
}
export default MongoDbSettings;
