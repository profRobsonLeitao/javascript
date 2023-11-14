// Aula 07 - Filter
// serve para filtrar o retorno de um array

const arrayNum = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const novoArray = arrayNum.filter(valor => valor > 37 && valor <= 72);
console.log(novoArray);

// atividade
// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cojos nomes terminam com a letra A

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

let filterPessoas = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log(filterPessoas);

filterPessoas = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(filterPessoas);

filterPessoas = pessoas.filter(pessoa => pessoa.nome.endsWith('a'));
console.log(filterPessoas);
