const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');

let segundos = 0;
let minutos = 0;
let horas = 0;
let pausarTimer;

function atualizarCronometro() {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
    if (minutos == 60) {
        minutos = 0;
        horas++;
    }
  }
  relogio.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function removeClasseCronometro() {
    const classesRelogio = relogio.classList;

    for(let classe in classesRelogio) {
        if(classesRelogio[classe] === 'pausaCronometro') {
            relogio.classList.remove('pausaCronometro')
        }
    }
}

// inicia o cronometro
btnIniciar.addEventListener('click', function() {
    removeClasseCronometro();
    pausarTimer = setInterval(atualizarCronometro, 1000);
})

// pausa o cronometro
btnPausar.addEventListener('click', function() {
    clearInterval(pausarTimer);
    relogio.classList.add('pausaCronometro');
})

// reseta o cronometro
btnZerar.addEventListener('click', function() {
    segundos = 0;
    minutos = 0;
    horas = 0;
    removeClasseCronometro();
    clearInterval(pausarTimer);
    relogio.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
})