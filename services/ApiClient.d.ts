export declare class ApiClient {
    static headers: any;
    static GET(url: string, headers?: any, throwErrorOnFail?: boolean): Promise<any>;
    static POST(url: string, body?: any, headers?: any, throwErrorOnFail?: boolean): Promise<any>;
    static PUT(url: string, body?: any, headers?: any, throwErrorOnFail?: boolean): Promise<any>;
    static DELETE(url: string, headers?: any, throwErrorOnFail?: boolean): Promise<any>;
    private static makeRequest;
    private static makeRequestThrowingErrorOnFail;
}
