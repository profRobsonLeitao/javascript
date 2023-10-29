// Aula 08 - funcoes
// funcoes em programacao refere-se a um conjunto de instrucoes
// que possuem determinado utilidade e que pode ser reaproveitado
// a qualquer momento, por exemplo, quando utilizamos o console.log
// o log é uma funcao que existe dentro de console.
// toda funcao é caracterizada pelo uso dos parenteses.

function imprimeMsg() {
    console.log("Sou uma funcao textual")
}

imprimeMsg()

// existem funcoes sem retorno e com retorno, a funcao acima nao possui
// retorno, pois apenas imprime uma mensagem. Vamos criar uma funcao com
// retorno.

function imprimeMeuNome(nome) {
    console.log(`ola ${nome}, voce esta dentro de uma funcao!!`);
    return 10;
}

const valorFunc = imprimeMeuNome('Robson');

// qual sera o valor da variavel abaixo?
console.log(valorFunc);


// atividade
// crie uma funcao chamado 'somar', esta funcao deve receber 2 valores
// numericos, e deve retornar a soma deles. Imprima o resultado da soma
// no console.


// funcoes podem ter valores padrao nos parametros

function soma(a = 1, b = 1) {
    return a + b;
}

console.log(soma(5));

// funcoes anonimas
// voce pode criar funcoes anonimas e atribuir a uma variavel

const funcMult = function mult(a, b) {
    return a * b;
}

console.log(funcMult(3, 5));
