// Aula 10 - laco FOR IN
// este laco lê indices de array e chaves de objetos

const frutas = ['banana', 'maça', 'acerola'];

for(let fruta in frutas) {
    console.log(frutas[fruta])
}

const Carros = {
    marca: 'Lamborghini',
    modelo: 'Gallardo',
    anoLancamento: 2003,
}

for(let carro in Carros) {
    console.log(Carros[carro])
}