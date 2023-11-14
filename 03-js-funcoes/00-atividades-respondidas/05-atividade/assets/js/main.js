function criaCalculadora() {
    return {
      display: document.querySelector('.display'),

      iniciar() {
          this.cliqueBotoes()
      },
      
      cliqueBotoes() {
          const buttonFunctions = {
              'btn-clear': () => this.limparDisplay(),
              'btn-num': (elemento) => this.btnParaDisplay(elemento.innerText),
              'btn-del': () => this.apagarUmValorDisplay(),
              'btn-eq': () => this.calcular()
          };
      
          document.addEventListener('click', event => {
              const elemento = event.target;
              const buttonClass = Array.from(elemento.classList).find(classe => buttonFunctions[classe]);
      
              if (buttonClass) {
                  buttonFunctions[buttonClass](elemento);
              }
          });
      },
      
      btnParaDisplay(valor) {
          this.display.value += valor
      },

      limparDisplay() {
          this.display.value = '';
      },

      apagarUmValorDisplay() {
          this.display.value = this.display.value.slice(0, -1);
      },

      calcular() {
            let conta = this.display.value;
            try {
            // esta funcao eval é perigosa pois executa qualquer js informado.
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        }
    }
}

const minhaCalc = criaCalculadora();
minhaCalc.iniciar();