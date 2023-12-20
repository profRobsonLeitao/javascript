// Aula 03 - DefineProperty
// é um método que permite adicionar uma nova propriedade 
// ou modificar uma propriedade existente em um objeto. Este 
// método fornece controle preciso sobre as características de 
// uma propriedade, como se ela é enumerável, configurável e 
// gravável.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // o this indica que vamos definir propriedades do proprio objeto, e depois dizemos qual chave iremos 
    // configurar.
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);



// Outro exemplo real
function Pessoa(nome, idade) {
    this.nome = nome;
  
    // Utilizando Object.defineProperty para personalizar o getter e setter da idade
    Object.defineProperty(this, 'idade', {
      get: function() {
        return idade;
      },
      set: function(novaIdade) {
        // Certificando-se de que a idade seja um número positivo
        if (novaIdade >= 0) {
          idade = novaIdade;
        } else {
          console.log("Idade deve ser um número positivo.");
        }
      },
      enumerable: true,
      configurable: true
    });
}
  
// Criando uma instância de Pessoa
const pessoa1 = new Pessoa('João', 30);

// Acessando a propriedade idade através do getter
console.log(pessoa1.idade); // Saída: 30

// Usando o setter para modificar a idade
pessoa1.idade = 35;
console.log(pessoa1.idade); // Saída: 35

// Tentando definir uma idade negativa (o setter exibirá uma mensagem)
pessoa1.idade = -5; // Saída no console: "Idade deve ser um número positivo."
console.log(pessoa1.idade); // Continua sendo 35, pois a idade não foi modificada devido à entrada inválida


// podemos fazer essas configurações em mais de uma chave

function Animal(nome, raca, codigo) {
    this.nome = nome;
    this.raca = raca;

    Object.defineProperties(this, {
        nome: {
            enumerable: true
        }
    })
}
  