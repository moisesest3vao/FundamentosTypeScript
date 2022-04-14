export class Negociacao {

    constructor(private _data: Date,
                public readonly _quantidade: number,
                public readonly _valor: number) {
    }

    public get data(): Date {
        const data = new Date(this._data.getTime())
        return this._data;
    }

    public get volume(): number {
        return this._quantidade * this._valor;
    }
}