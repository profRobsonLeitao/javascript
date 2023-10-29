// Aula 07 - Arrays
// arrays são um tipo diferente de variavel, onde ela tambem
// aponta para um endereco na memoria em formato de lista

const meuArray = ['valor1', 'valor2'];

console.log(meuArray[0]);

// num array voce pode inserir qualquer tipo de dado, porem,
// não é uma boa prática ter diferentes tipos no mesmo array,
// o ideal é manter a consistencia.

// atividade
// crie um array chamado 'nomes', então insira os nomes abaixo:
// Fernando, Clara, Alice, Beatriz
// agora, insira seu nome no final do array.


// funcoes para arrays

// inserir novo elemento no fim do array - push

let frutas = ['banana'];
frutas.push('acerola');
console.log(frutas);

// inserir novo elemento no inicio do array - unshift

frutas.unshift('goiaba');
console.log(frutas);

// remove um elemento do final do array - pop

frutas.pop()
console.log(frutas);

// remove um elemento do inicio do array - shift

frutas.shift()
console.log(frutas);

// atividade - vai precisar do conteudo de strings
// imprima no console o array 'nomes' que voce criou,
// sem os 2 ultimos nomes. Voce nao pode alterar o array.
// obs: faca esta impressao de 2 maneiras diferentes.



// Variaveis const mutáveis
// const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, 
// não podemos fazer algo assim:

// const nome = 'luiz';
// nome = 'joão'; // Erro: Assignment to constant variable.
// Porém, existe uma diferença entre variável e valor.

// Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

// Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores 
// são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). 
// Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

// Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos 
// internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

// Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não 
// permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

// Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém 
// os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um 
// objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo 
// local na memória), apenas a alteração de um valor interno do mesmo objeto.

// Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa 
// que não vamos conseguir fazer é reatribuir o valor da variável.

// Exemplos:

// Isso pode

// const array = [1, 2, 3, 4, 5];
// array.pop();
// array[0] = 1024;
// console.log(array); // [ 1024, 2, 3, 4 ]

// Isso NÃO pode

// const array = [1, 2, 3, 4, 5];
// array = 'Legal'; // Assignment to constant variable.