// Aula 06 - Switch case
// Switch case faz parte de toda linguagem de programacao
// ela faz parte de um grupo chamado estruturas condicionais
// que servem para avaliar determinada expressao e fazer algo
// a partir do resultado dessa avaliacao.

const data = new Date('2023-11-2');
const diaSemana = data.getDay();

switch(diaSemana) {
    case 0: {
        console.log('Hoje é domingo.');
        break;
    }
    case 1: {
        console.log('Hoje é segunda-feira.');
        break;
    }
    case 2: {
        console.log('Hoje é terça-feira.');
        break;
    }
    case 3: {
        console.log('Hoje é quarta-feira.');
        break;
    }
    case 4: {
        console.log('Hoje é quinta-feira.');
        break;
    }
    case 5: {
        console.log('Hoje é sexta-feira.');
        break;
    }
    case 6: {
        console.log('Hoje é sábado.');
        break;
    }
    default: {
        console.log('Data inválida');
        break;
    }
}