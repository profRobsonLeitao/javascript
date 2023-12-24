// Aula 06 - Conceito de Herança de prototypes

// criando uma constructor function com 2 funcoes no prototype: aumento e desconto
function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

// Criando mais uma constructor function para herdar as 2 funcoes de Produto
function Camiseta(nome, preco, cor) {
    // a funcao call precisa saber qual obj será passado para ela. No caso, será
    // o obj que for instanciado com Camiseta, por isso utiliza o this abaixo.
    Produto.call(this, nome, preco);
    this.cor = cor
}

// o prototype é um obj vazio, entao criamos um obj com o prototype de Produto e passamos
// para o prototype de Camiseta.
Camiseta.prototype = Object.create(Produto.prototype);

// esta linha serve para redefinir o contrutor de Camiseta para ela mesma. Sem essa linha
// o contrutor de Camiseta será Produto.
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10)
console.log(camiseta)