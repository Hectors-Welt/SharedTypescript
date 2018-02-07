export declare class ApiClient {
    static headers: any;
    static GET(url: string, headers?: any): Promise<any>;
    static POST(url: string, body?: any, headers?: any): Promise<any>;
    static PUT(url: string, body?: any, headers?: any): Promise<any>;
    static DELETE(url: string, headers?: any): Promise<any>;
    private static makeRequest(method, url, body?, headers?);
}
