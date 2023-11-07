const inputTarefa = document.querySelector('#tarefa');
const tarefas = document.querySelector('#tarefas');
const btnTarefa = document.querySelector('#btnTarefa');
const form = document.querySelector('#form');

function criaTagLi() {
    return document.createElement('li')
}

function criaTarefa(texto) {
    const li = criaTagLi();
    li.innerHTML = texto;
    tarefas.appendChild(li);
    limpaInput();
    criarBtnApagar(li);
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBtnApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Excluir';
    botaoApagar.setAttribute('id', 'btnExcluir');
    li.appendChild(botaoApagar);
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value);
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

document.addEventListener('click', function(e) {
    const elemento = e.target;
    if(elemento.id === 'btnExcluir') {
        elemento.parentElement.remove();
    }
})