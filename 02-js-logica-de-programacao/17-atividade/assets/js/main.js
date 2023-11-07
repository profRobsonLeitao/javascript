// Atividade
// criar um cronometro.
// Obs: Somente quando o cronometro estiver em pausa, deve ficar vermelho.

const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');

let segundos = 0;
let minutos = 0;
let horas = 0;
