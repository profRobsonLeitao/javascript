// Aula 09 - objetos

// objetos em programação representam estruturas do mundo real.
// quais caracteristicas semelhantes os seres humanos possuem?
// quais propriedades semelhantes existem em automovéis?
// Como representar essas caracteristicas de forma computacional?

const Pessoa = {
    nome: 'Robson',
    sobrenome: 'Leitão',
    idade: 28
}

// uma diferença entre arrays e objetos é que nos arrays queremos que seus dados
// sejam do mesmo tipo, já em objetos não temos essa necessidade.

// Objetos e funcções
// podemos ter funcoes dentro de objetos, chamamos essas funcoes de método.

const Carro = {
    marca: 'Ferrari',
    modelo: 'Enzo Ferrari',
    ano: 2020,

    ligar() {
        console.log("O carro ligou.")
    }
}

console.log(Carro.marca, Carro.modelo, Carro.ano);
console.log(Carro.ligar());