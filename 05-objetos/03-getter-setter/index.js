// Aula 03 - Getters e Setters
// são metodos utilizados na orientacao a objetos
// para acessar e manipular dados de um objeto mantendo
// a integridade do mesmo.

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => {
            return estoquePrivado
        },

        // obs: nao podemos utilizar this.estoque = valorEtoque dentro do metodo set,
        // pois isso geraria um loop infinito, para isto, precisamos criar uma variavel
        // auxiliar para manipular o valor do estoque.
        set: (valorEstoque) => {
            if (typeof valorEstoque !== 'number') {
                console.log('nao é número');
                return;
            }
            estoquePrivado = valorEstoque
        }
    })
}

const meuProduto = new Produto('Camisa', 18, 20);
console.log(meuProduto.estoque);
meuProduto.estoque = 5;
console.log(meuProduto.estoque);


// atividade
// refaça o objeto Animal, validando os parametros como string
// o usuario não pode passar valores numericos para o objeto.