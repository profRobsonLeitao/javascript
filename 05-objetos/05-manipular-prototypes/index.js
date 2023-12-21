// Aula 05 - Manipulando Prototypes
// nesta aula vamos aprender sobre como manipular o prototype dos objetos, reaproveitando
// funcões para outros objetos.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// vale lembrar que, não criamos funcoes dentro do nosso obj, mas utilizamos o prototype
// para isto. Desta forma nosso código fica mais performatico.
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const meuProd = new Produto('Banana', 1000);
console.log(meuProd)
meuProd.desconto(10)
console.log(meuProd)

// objeto literal
const Carro = {
    modelo: 'Uno',
    marca: 'Fiat',
    preco: 20000
}

// Como podemos reaproveitar a funcao "desconto" do obj Produto dentro do obj Carro?
// utilizando o prototype

Object.setPrototypeOf(Carro, Produto.prototype);

Carro.desconto(10)
console.log(Carro)