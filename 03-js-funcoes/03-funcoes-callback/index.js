// Aula 03 - Funcoes callbacks
// as funções de callback são funções que são passadas como argumentos 
// para outras funções. Elas são executadas ou "chamadas de volta" após 
// a conclusão de uma operação assíncrona ou de um determinado evento.

function minhaFuncao(callback) {
    console.log("Executando minhaFuncao...");
    setTimeout(function() {
      console.log("Tarefa assíncrona concluída.");
      callback(); // Aqui é onde o callback é invocado
    }, 2000);
  }
  
  function minhaCallback() {
    console.log("Callback executado!");
  }
  
  // Chamando minhaFuncao e passando minhaCallback como argumento (callback)
  minhaFuncao(minhaCallback);
  
//   Neste exemplo, a função minhaFuncao recebe uma função como argumento 
//   (a callback) e a executa após um atraso de 2 segundos, simulado pelo 
//   setTimeout. Após esse atraso, a função de callback (minhaCallback) 
//   é chamada.