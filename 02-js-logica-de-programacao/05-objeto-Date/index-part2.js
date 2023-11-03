// Sempre é importante consultar a documentacao
// para entender como algumas coisas funcionam no JS.
// Existe uma forma muito mais simplificada para obtermos
// a data e hora atuais.

const data = new Date();

const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
});

const tagP = document.querySelector('.metodo1');
tagP.innerHTML = dataFormatada.format(data)