// Aula 05 - Aprendendo a manipular datas
// existe nativamente no JS um objeto para manipular datas

const data = new Date();
console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth() + 1); // os meses comecam em 0
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Minutos:', data.getMinutes());
console.log('Segundos:', data.getSeconds());
console.log('Milesimos de Segundos:', data.getMilliseconds());
console.log('Dia da semana:', data.getDay()); // 0 - domingo 6 - sábado

// o objeto Date trabalha com milésimos de segundos, então podemos
// encontrar códigos assim na internet:

console.log('data atual em milisegundos:', Date.now()); // retorna a data e a hora atual em ms


// criando uma funcao para formatar data e hora
function formatarDataHoraBrasil() {
    const data = new Date();
    console.log('data e hora sem formatacao:', data)
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;

    // obs: toString converte a data para string,
    // padStart formata o valor para 2 casas numericas acrescentando o 0 a esquerda, desde que
    // o valor informado seja uma string.
}

// Exemplo de uso
const dataHoraFormatada = formatarDataHoraBrasil();
console.log('data e hora formatada:', dataHoraFormatada);
