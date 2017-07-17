class MongoDbSettings {
    host: string
    port: number
    username: string
    password: string

    constructor(settings: any) {
        if(!settings || !settings.host || !settings.port){
            throw new Error("invalid data. ensure host and port are present.");
        }

        this.host = settings.host;
        this.port = settings.port;
        this.username = settings.username;
        this.password = settings.password;
    }

    getConnectionUri(database: string): string {
        const db = this.username ? 
            `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${database}?authSource=admin` : 
            `mongodb://${this.host}:${this.port}/${database}`;

        return db;
    }
}

export default MongoDbSettings