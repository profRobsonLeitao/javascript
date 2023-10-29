// Aula 06 - Strings
// Já aprendemos como criar strings utilizando as aspas
// simples ou duplas, porém, vamos aprender a criar textos
// utilizando um conceito chamado template strings.

console.log('método com aspas simples');
console.log("método com aspas duplas");
console.log(`método template strings com a crase.`);

// a vantagem de se utilizar template strings é que ela consegue 
// ler textos normais, como também consegue interpretar variaveis

let texto = 'ola mundo!';

console.log(`${texto}, cheguei`);

// no JS as strings são indexadas, o que significa que conseguimos
// acessar uma posicao especifica dentro da string.

console.log("index da variavel texto:", texto[2]);


// algumas funcoes para strings

let meuTexto = 'Um dia serei um programador de alto nível.';

// length - tamanho da variavel
console.log(meuTexto.length);

// replace - altera o texto
console.log(meuTexto.replace(/a/g, '#'));
console.log(meuTexto.replace(/l/, '%'));

// slice - corta uma parte do texto
// no slice vc define de onde quer começar a cortar e onde termina
// ou vc pode somente dizer onde inicia o corte.
console.log("texto recortado:", meuTexto.slice(16, 28));


// split - recorta toda a string a partir de um caractere informado,
// e armazena num tipo especifico de variavel.
// aonde tiver espaco sera feito o corte:
console.log("fui cortado:",meuTexto.split(' '));