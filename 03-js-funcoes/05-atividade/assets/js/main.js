// Atividade
// criar as funcionalidades da calculadora
// utilizando as factory functions.

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        iniciar() {
            this.cliqueBotoes()
        },
        
        cliqueBotoes() {
            document.addEventListener('click', event => {
                const elemento = event.target;
                
                if(elemento.classList.contains('btn-clear')) {
                    this.limparDisplay()
                }

                if(elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText)
                }

                if(elemento.classList.contains('btn-del')) {
                    this.apagarUmValorDisplay()
                }
            })
        },
        
        btnParaDisplay(valor) {
            this.display.value += valor
        },

        limparDisplay() {
            this.display.value = '';
        },

        apagarUmValorDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        }
    }
}

const minhaCalc = criaCalculadora();
minhaCalc.iniciar();