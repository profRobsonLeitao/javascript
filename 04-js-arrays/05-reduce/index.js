// Aula 05 - REDUCE
// serve para quando queremos reduzir um array de acordo com algum criterio
// Por exemplo: retorne um array com a soma dos numeros.

const arrayNum = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const total = arrayNum.reduce((acumulador, valor) => {
    return acumulador += valor;
    // o acumulador inicia com o valor 0, definido abaixo.
}, 0);
console.log(total);

// retorne a pessoa mais velha

const pessoas = [
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Luiz', idade: 62},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const pessoaVelha = pessoas.reduce((acc, pessoa) => {
    console.log(acc.idade, pessoa.idade)
    if(acc.idade > pessoa.idade) return acc;
    return pessoa;
});
console.log(pessoaVelha);

