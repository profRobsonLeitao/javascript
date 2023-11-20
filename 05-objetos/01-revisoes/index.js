// Aula 01 - Revisão sobre objetos
// Vejamos alguns recursos para manipular os objetos

const Pessoa = {
    nome: 'Robson',
    sobrenome: 'Leitao'
}

// deletar chaves de um objeto
// delete Pessoa.sobrenome
console.log(Pessoa)

// loop para objetos FOR IN
for(let chave in Pessoa) {
    console.log(chave);
    console.log(Pessoa[chave]);
}

// obs: podemos acessar ao conteudo de um objeto utilizando colchetes,
// como o exemplo acima, isso possibilita outras forma de resolucionar
// problemas.


// Factory functions
function Carro(marca, modelo, ano) {
    return {
        marca,
        modelo,
        ano
    }
}
const meuCarro = Carro('Nissan', 'GTR-R35', 2018);
for(let chave in meuCarro) {
    console.log(meuCarro[chave]);
}


// Constructor functions
function Animal(nome, raca) {
    this.nome = nome,
    this.raca = raca
}
const meuAnimal = new Animal('bob', 'gato');

// obs: tambem podemos acessar as chaves de um objeto por meio da propriedade
// Object.keys()