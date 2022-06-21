// module -> Modulo;
// module.exports = exports
// module -> Modulo
// exports -> Exportar 


module.exports = {
  soma(num1,num2,num3 = 0){
    return num1+num2+num3;
  },
  subtracao(num1,num2){
    return num1-num2;
  },
  multiplicacao(num1,num2){
    return num1*num2;
  },
  divisao(num1,num2){
    return num1/num2;
  }
}

// exports.numero = 1;
// exports.func1 = function(){

// }
// exports.prop1 = 2;
// exports.prop2 = 3;





// console.log(module.exports);
// console.log(exports);