// Aula 01 - Tipos de declaracao de funcoes

// declaracao de funcao - function hoisting
// quando o motor de renderizacao do navegador executa
// nosso js, por padrao, ele coloca todas nossas funcoes
// para serem lidas primeiro.

olaMundo();

function olaMundo() {
    console.log('ola mundo!')
}

// no exemplo acima, podemos chamar a funcao primeiro, e colocar o 
// codigo em baixo, nao ha diferença.

// expressao de funcao
// quando voce atribui uma funcao para uma variavel

const minhaFuncao = function() {
    console.log('ola de novo!')
}

// arrow functions 
const funcaoArrow = () => {
    console.log('sou uma arrow function!')
}

// funcoes anonimas
// sao funcoes que nao possuem nome, no exemplo acima
// a arrow function nao tem nome.