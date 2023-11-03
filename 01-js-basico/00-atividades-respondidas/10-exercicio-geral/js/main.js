function Escopo() {
    // com o querySelector podemos capturar tags, classes ou id.
    const form = document.querySelector('#meuForm');
    const divInfo = document.querySelector('#info');
    const pessoas = [];

    function recebeEvento(evento) {
        // impede a pagina de ser atualizada.
        evento.preventDefault();

        const nome = form.querySelector('#nome').value;
        const sobrenome = form.querySelector('#sobrenome').value;
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;

        const Pessoa = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        };

        pessoas.push(Pessoa);

        divInfo.innerHTML += `
            <p>${Pessoa.nome} ${Pessoa.sobrenome} ${Pessoa.peso}Kg ${Pessoa.altura}cm</p>
        `;
    }
    
    // addEventListener escuta os eventos da pagina.
    // Quando o evento submit acontecer, a funcao recebeEvento será chamada.
    form.addEventListener('submit', recebeEvento);
}

Escopo();