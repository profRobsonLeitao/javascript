// Aula 02 - Operadores lógicos

/*

&& - AND (todas as expressoes precisam ser verdade para o resultado final ser verdadeiro)
|| - OR (Se pelo menos 1 expressao for verdade o resultado final sera verdadeiro)
! - NOT (nega a expressao, se for verdadeiro se torna falso e vice versa)

os operadores logicos analizam se determinada informacao
é verdadeiro ou falso, e retorna verdadeiro ou falso de 
acordo com o resultado final da expressão avaliada.

na programacao, os valores binarios tambem possuem estado verdadeiro ou falso

0 - falso
1 - verdadeiro

obs: a maioria das expressoes diferentes de 0 retornam verdadeiro

*/

const num1 = 10;
const num2 = '19';

console.log(num1 === 10 && num2 === 19) // false