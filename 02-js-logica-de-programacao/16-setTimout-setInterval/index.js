// Aula 16 - setTimout e setInterval
// Existem 2 funcoes nativas do JS para controlar intervalos de tempo.

function horaAtual() {
    return new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'medium',
        timeZone: 'America/Sao_Paulo',
    }).format();
}

// Vamos criar um codigo que irá exibir no console, a data e a hora
// a cada 2 segundos automaticamente com o setInterval

const timer = setInterval(function () {
    console.log(horaAtual())
}, 1000) // 1000ms === 1 segundo

// o setInterval precisa de uma funcao interna e o tempo de execucao
// para funcionar corretamente. No codigo acima, passamos a funcao
// anonima onde dentro dela dizemos que a funcao horaAtual devera ser
// chamada a cada 1 segundo.

// temos outra funcao que é muito semelhante ao setInterval,
// porem, ela só executa 1 vez.

setTimeout(function() {
    // para a execucao do setInterval
    clearInterval(timer);
}, 5000);
