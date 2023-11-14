// Aula 06 - Combinando os filtros para arrays
// Atividade:
// retorne a soma do dobro de todos os pares
// 1º: filtrar pares
// 2º: dobrar valores
// 3º: somar tudo

const arrayNum = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const valorFiltrado = arrayNum
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acc, valor) => acc + valor)

console.log(valorFiltrado);
