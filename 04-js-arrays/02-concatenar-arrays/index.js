// Aula 02 - Concatenacao de arrays
// para unir 2 ou mais arrays podemos utilizar o concat
// ou o operador spread.

const meuArray = [1, 2, 3, 4];
const meuArray2 = [5, 6, 7, 8, 9];
const novoArray = meuArray.concat(meuArray2);
console.log(novoArray);

const arraySpread = [...meuArray, ...meuArray2, 'Array com spread']
console.log(arraySpread)

// obs: o operador (...) tem 2 funcoes: pegar o restante ou espalhar os elementos
// utilizamos o rest como parametro de uma funcao para armazenar todos os valores 
// passados para a funcao. Utilizamos o operador spread para espalhar os valores
// de um array para serem atribuidos em outra variavel compativel. 