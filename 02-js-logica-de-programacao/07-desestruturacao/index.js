// Aula 07 - Atriuicao via desestruturacao
// podemos usar outra forma para atribuir valores numa variavel

const numeros = [25, 14, 27, 48];
const [num1, num2, num3, num4] = numeros;
console.log(num1, num2, num3, num4)

// podemos aplicar a desestruturacao com arrays e objetos

const Pessoa = {
    nome: 'Fernando',
    idade: 18,
    endereco: {
        rua: 'Rua X',
        numero: '1427'
    }
}

const {nome: nomeRenomeado} = Pessoa;
console.log(nomeRenomeado);

// atividade
// imprima no console a rua e o numero com desestruturacao.

