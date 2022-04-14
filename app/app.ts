import { NegociacoesView } from './views/negociacoes-view.js';
import { Negociacao } from './models/negociacao';
import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});


