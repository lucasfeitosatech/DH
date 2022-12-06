
// CommonJS Modules modules.exports (Exportar) e require (Importar)


// Função, valor, um array, um objeto

const calculadora = {
  PI:3.141263837812126387121263378212678,
  soma(a,b,c){
    return a + b + c;
  },
  subtracao(a,b){
    return a - b;
  },
  divisao(a,b){
    return a/b;
  },
  multiplicacao(a,b){
    return a*b;
  }
}

module.exports = calculadora;



// module.exports.PI = 3.1473981273891273
// module.exports.soma = function soma(a,b,c){
//   return a + b + c;
// }

