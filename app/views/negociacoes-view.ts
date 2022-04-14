import { Negociacoes } from './../models/negociacoes.js';
import { View } from './view.js';
export class NegociacoesView extends View<Negociacoes>{

    protected override template(model:Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>VALOR</th>
                        <th>QUANTIDADE</th>
                    </tr>
                </thead>
                <tbody>
                ${model.lista().map(negociacao => {
                    return `
                    <tr>
                        <td>${this.formataData(negociacao.data)}</td>
                        <td>${negociacao._valor}</td>
                        <td>${negociacao._quantidade}</td>
                    </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
    }

    private formataData(data: Date):string{
        return new Intl.DateTimeFormat().format(data);
    }
}