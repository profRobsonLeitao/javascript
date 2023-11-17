// Aula 02 - Prototypes
// os prototypes sao um atributo que esta disponivel em todos os objetos
// podemos entao, criar metodos que serviram para todas as vezes que o 
// objeto for instanciado, fazendo com que nosso codigo seja mais performatico.
// caso contrario, estariamos perdendo desempenho e nosso sistema poderia ficar 
// lento no pc do usuario.

function Pessoa(nome) {
    // obs: esta é uma constructor function
    this.nome = nome;

    this.getNome = () => {
        return `${this.nome}`
    }
};

Pessoa.prototype.funcaoGeral = () => {
    return 'sou uma funcao geral para todas as instancias do objeto Pessoa.';
}

const pessoa1 = new Pessoa('Robson');
console.log(pessoa1.funcaoGeral());

