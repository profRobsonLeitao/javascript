// Aula 15 - Tratando e lançando erros
// é comum nosso codigo apresentar alguns erros, e precisamos
// saber tratar desses erros, para isto temos o TRY CATCH

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

try {
    console.log(variavel)
} catch (erro) {
    throw('meu erro.')
}
