// Aula 15 - Tratando e lançando erros
// é comum nosso codigo apresentar alguns erros, e precisamos
// saber tratar esses erros, para isto temos o TRY CATCH

try {
    if(teste) {
        console.log('entrei.')
    }
} catch(erro) {
    console.log(erro)
}

// nunca mostre um erro interno do seu codigo para o usuario.
// ele nao pode ter acesso a vulnerabilidades do seu codigo.
// Outra forma que temos é lançar nosso proprio erro para o JS.

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        // o throw permite a gente definir a mensagem de erro.
        throw new Error('x e y precisam ser numeros.')
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma("1", 2));
} catch (error) {
    console.log(error)
}

// Alem do try catch, temos o finally tambem. Ele significa que
// apos a tentativa de excutar o codigo e a verificação de erro
// temos a possibilidade de acrescentar outro código que executará
// ao final de tudo.

try {
    console.log(variavel)
} catch (error) {
    console.log('tem erro')
}finally {
    console.log('Sou executado sempre.')
}

// obs: vale lembrar que o try irá tentar executar as
// instrucoes dentro de seu escopo, se por acaso houver um
// erro de programação (não erro de logica), aí sim, ele irá
// passar o erro para o bloco catch com um variavel possuindo o
// erro ocorrido. E após tudo isto o bloco finally irá executar 
// seu bloco de instruções no fim.