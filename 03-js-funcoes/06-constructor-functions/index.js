// Aula 06 - Funcoes construtoras
// elas são semelhantes a factory functions pois retornam objetos
// mudando somente alguns detalhes.

function Carro(modelo, marca) {
    this.marca = marca,
    this.modelo = modelo,
    
    this.saudacao = () => {
        console.log('Seu carro é: ' + this.marca + ' modelo: ' + this.modelo);
    }
}

const meuCarro = new Carro('Uno', 'Fiat');
meuCarro.saudacao();

