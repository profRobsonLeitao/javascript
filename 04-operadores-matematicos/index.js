// aula 04 - operadores matemáticos

// símbolos e suas funcoes:
//  + --> somar | contatenar
//  - --> subtracao
//  * --> multiplicacao
//  / --> divisao
//  % --> módulo
//  ++ --> incrementar
//  -- --> decrementar
//  += --> atribuicao e soma
//  -= --> decremento e atribuicao
//  *= --> multiplicar e atribuicao
//  /= --> dividir e atribuicao
//  %= --> modulo e atribuicao

let soma = 10 + 15;
console.log("soma:",soma);

let concatenar = "10" + 15;
console.log("concatenar:",concatenar);

let sub = 10 - 15;
console.log("subtracao:",sub);

let mult = 10 * 15;
console.log("multiplicacao:",mult);

let div = 50 / 2;
console.log("divisao:",div);

let modulo = 10 % 2;
console.log("modulo:",modulo);

// +=, -=, *=, %=, /=
let valorA = 10;
valorA += 3;
console.log("atribuicao:",valorA);

// incrementar e decrementar
let incrementar = 1;
incrementar++;
console.log("incrementar:",incrementar);
let decrementar = 10;
decrementar--;
console.log("decrementar:",decrementar);

// atividade
// 01 - crie uma variavel e faça o incremento dela dentro do console.log()
// 02 - crie uma variavel que incremente de 5 em 5.

// Erro NaN - not a number
// este erro acontece quando se tenta fazer calculos com valores nao numericos
// Ex: 10 - "dez"
console.log(10 - "dez");

// Convertendo strings para number
// (parseInt - converte para inteiro)
// (parseFloat - converte para real)
// (Number - converte para um dos dois)

let texto = "10.5";
let converte = Number(texto);
console.log("valor convertido:",typeof(converte), converte);
