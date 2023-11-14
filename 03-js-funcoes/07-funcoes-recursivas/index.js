// Funcoes recursivas
// sao funcoes que chamam a si mesma dentro de seu codigo.
// obs: sua preocupacao deve ser o fim da execucao da funcao.
// senao, seu código estara num loop infinito.

function somaAutomatica(valorMax) {
    console.log(valorMax)
    if (valorMax >= 10) return;
    valorMax++;
    somaAutomatica(valorMax)
}

somaAutomatica(0)