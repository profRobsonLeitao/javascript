// Aula 13 - Laco While e do while
// o laco for é um tipo de loop que tem determinado
// uma quantidade de vezes que ele ira executar um
// código. O laço while permanece iteravel enquanto
// uma determinada expressao for verdadeiro.

let i = 10;

while(i > 0) {
    console.log(i);
    i--;
}

// existe tambem o laço Do While, que primeiro faz uma
// acao, e depois verifica se o resultado ainda é verdadeiro,
// se sim, então continua iterando.

function numAleatorio(min, max) {
    // gera um numero aleatorio entre os valores passados
    // e depois remove as casas decimais com o floor
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const minimo = 1;
const maximo = 15;
let numero;

do {
    numero = numAleatorio(minimo, maximo);''
    console.log('ainda sou verdadeiro:', numero);
}while(numero !== 10);