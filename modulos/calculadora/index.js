
const calculadora = {
  PI:3.1473917398217312897389127389127389213,
  soma(a,b,c){
    return a + b + c;
  },
  subtracao(a,b){
    return a - b;
  },
  multiplcao(a,b){
    return a * b;
  }
}

module.exports = calculadora;

// é um objeto -> Definir que queremos enviar para outro arquivo
// module.exports = 1;
// é um objeto vazio inicialmente
// module.exports = {}
// module.exports.soma = function (a,b){
//   return a + b;
// } 

// module.exports.PI = 3.143981273891273891273;

// module.exports.subtracao = function (a,b) {
//   return a - b;
// }


