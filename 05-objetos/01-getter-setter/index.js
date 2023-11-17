// Aula 01 - Getters e Setters
// são metodos utilizados na orientacao a objetos
// para acessar e manipular dados de um objeto mantendo
// a integridade do mesmo.

function Animal(nome, tipo) {
    // lembrando que isso é uma factory function, pois retorna um objeto
    // e não necessita do new para ser instanciado.
    return {
        get nome() {
            return nome; 
        },
        
        get tipo() {
          return tipo;
        },

        set nome(nomeAnimal) {
            nome = nomeAnimal
        },

        set tipo(tipoAnimal) {
            tipo = tipoAnimal
        }
    }
}

const meuAnimal = Animal('bob', 'gato');
console.log();
console.log(meuAnimal.nome, meuAnimal.tipo);
meuAnimal.nome = 'Breach';
meuAnimal.tipo = 'passaro';
console.log(meuAnimal.nome, meuAnimal.tipo);

// atividade
// refaça o objeto Animal, validando os parametros como string
// o usuario não pode passar valores numericos para o objeto.