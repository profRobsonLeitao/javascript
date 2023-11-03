// Aula 03 - IF ELSE
// if else faz parte de toda linguagem de programacao
// ela faz parte de um grupo chamado estruturas condicionais
// que servem para avaliar determinada expressao e fazer algo
// a partir do resultado dessa avaliacao.

const num1 = 16;

if(num1 === 15) {
    console.log('a variavel é 15');
}else {
    console.log('a variavel é:', num1);
}

// operador ternario
// existe outra forma de fazer if else numa unica linha
// expressao ? verdadeiro : falso

const result = 10 > 9 ? 'é maior' : 'é menor';
console.log(result);