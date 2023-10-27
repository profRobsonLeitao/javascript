// Aula 03 - Aprendendo sobre as variáveis e suas funções.

// variavel é o nome dado para um elemento que possui nomes especificos
// onde ela reserva um espaço na memória para guardar temporariamente sua 
// informação. Cada linguagem de programação possui variáveis e nomes reservados.
// No caso do JS temos: Var, Let e Const. O var não é mais utilizado.

var nome = "Robson";
let sobrenome = "Leitão";
const idade = 28;

// no código acima estou declarando o tipo de variavel, o nome da variavel e o seu valor.

console.log("O valor da variavel nome é:",nome);

nome = "Fernanda";

console.log("O valor da variavel nome é:",nome);

// Como nomear variaveis?
// nao pode começar com numeros
// nao pode utilizar palavras reservadas pela linguagem
// as variaveis no JS são case sensitive. A <> a

let num = 10;
let Num = 20;

// variaveis const não podem ter seu valor alterado, também não podem ser inicializadas sem um valor.

// const valorVazio;
// const numero = 200;
// numero = "Teste";

// toda variavel pode armazenar o valor de outra variavel.

const armazenaVar = sobrenome;
console.log(armazenaVar);

sobrenome = "Alves";
console.log(sobrenome);


// atividade
// imprima no console a seguinte mensagem:
// O nome do meu gato é (variavel), ele tem (variavel) de idade, seu peso é: (variavel).