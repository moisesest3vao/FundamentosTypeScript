import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
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
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao._valor}</td>
                        <td>${negociacao._quantidade}</td>
                    </tr>
                    `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
}
