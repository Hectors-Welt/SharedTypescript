export class SclInfo {
    bic: string
    name: string
    sct: boolean
    sdd: boolean
    cor1: boolean
    b2b: boolean
    scc: boolean

    constructor(data: any) {
        this.bic = data.bic;
        this.name = data.name;
        this.sct = data.sct == '1';
        this.sdd = data.sdd == '1';
        this.cor1 = data.cor1 == '1';
        this.b2b = data.b2b == '1';
        this.scc = data.scc == '1';
    }
}