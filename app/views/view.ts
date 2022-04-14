import { Negociacoes } from "../models/negociacoes.js";

export abstract class View<T>{
    protected elemento: HTMLElement;
    
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    abstract template(model:T): string

    update(model:T): void{
        this.elemento.innerHTML = this.template(model)
    }
}