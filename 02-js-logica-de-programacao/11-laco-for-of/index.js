// Aula 11 - laço FOR OF
// diferente do laco for in, que lê o index, o for of lê
// o valor diretamente.
// obs: objetos não sao iteraveis, ou seja, o for of nao funciona
// com objetos.

const frutas = ['banana', 'maça', 'acerola'];

for (let fruta of frutas) {
    console.log(fruta);
}