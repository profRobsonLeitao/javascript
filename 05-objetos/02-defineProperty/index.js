// Aula 02 - defineProperty && defineProperties
// este recurso permite que controlemos como as chaves de um
// objeto devam se comportar por meio de 4 configs:

// enumerable ---> permite ou nao exibir a chave
// value ---> define o valor da chave
// writable ---> permite ou nao, se pode ser atribuido valor a chave
// configurable ---> permite ou nao, reconfigurar a chave do objeto

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    // this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    })
}

const meuProduto = new Produto('Camisa', 18, 20);
console.log(meuProduto);


// defineProperties
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome

    Object.defineProperties(this, {
        nome: {
            writable: true,
            value: nome,
            enumerable: true,
            configurable: false
        },
        sobrenome: {
            writable: true,
            value: sobrenome,
            enumerable: false,
            configurable: false
        }
    })
}

const pessoa1 = new Pessoa('Robson', 'Leitao');
console.log(pessoa1);