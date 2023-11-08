// Aula 02 - Parametros de uma funcao
// Os parametros sao apelidos que nomeamos
// para variaveis que queremos que uma funcao
// receba.

// x e y sao apelidos para serem substituidos pelos
// valores informaados na chamada da funcao. Tambem
// podemos definir um valor default para a variavel
// caso ela nao seja informada. No exemplo abaixo
// a variavel y tera o valor 4 caso nao seja informado
// na chamada da funcao.

function somar(x, y = 4) {
    return x + y;
}
console.log(somar(2));

// tambem podemos passar uma funcao como parametro
// para outra funcao.

function recebeFuncao(funcao) {
    const funcSomar = funcao;
    return console.log(funcSomar(4,10));
}
recebeFuncao(somar);

// tambem podemos passar parametros para uma funcao utilizando
// a desestruturacao.

const Pessoa = {
    nome: 'Robson',
    cargo: 'Professor'
}

function recebeDados({nome, cargo}) {
    return console.log(nome, cargo);
}
recebeDados(Pessoa);

const minhasFrutas = ['banana', 'morango', 'acerola'];

function recebeFrutas([fruta1, fruta2, fruta3]) {
    return console.log(fruta1, fruta2, fruta3);
}

recebeFrutas(minhasFrutas);

// existe outra forma de passar parametros para uma funcao
// rest operator

// vamos fazer uma funcao que recebe varios valores

function funcaoRest(valor1, valor2, ...resto) {
    return console.log(`${valor1} ${valor2}: restante: ${resto}`);
}
funcaoRest(10, 20, ['a', 'b', 'c']);

// rest operator sempre deve ser o ultimo parametro da funcao,
// ele sera responsavel por guardar o restante dos valores passados
// para a funcao, colocando em um array ou objeto.