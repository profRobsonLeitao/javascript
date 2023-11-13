// Aula 04 - Factory Functions
// as factory functions é uma tecnica que esta relacionado
// com orientacao a objetos. O motivo para utilizar esse recurso
// é criar objetos de forma facil.

function criaPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,

        fala(assunto) {
            return `${nome} está falando sobre ${assunto}`
        }
    }
}

const minhaPessoa = criaPessoa('Robson', 27);

console.log(minhaPessoa.fala('tecnologia'));

// como o exemplo acima mostra, utilizamos uma funcao para
// definir como sera nosso objeto, quais parametros deve possuir
// e quais metodos terá.