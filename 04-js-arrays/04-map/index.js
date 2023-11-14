// Aula 04 - MAP
// serve para mapear todo o array e fazer algo com cada valor
// dentro dele. O map altera os valores iniciais do array.

const arrayNum = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(arrayNum);
const arrayNovo = arrayNum.map(valor => {
    return valor ** 2;
});
console.log(arrayNovo);

// atividade
// para cada elemento:
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave 'nome' do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

let ativPessoas = pessoas.map(pessoa => pessoa.nome);
console.log(ativPessoas);

ativPessoas = pessoas.map(pessoa => pessoa.idade);
console.log(ativPessoas);

ativPessoas = pessoas.map((pessoa, indice) => {
    pessoa.id = indice + 1;
    return pessoa
});
console.log(ativPessoas);
