
// São váriaveis de arquivo o qual possui informações a respeito do arquivo criado
// module
// A definição que eu vou exportar par quem requerir o meu módulo 
// exports

// Os dois são a mesma coisa, sendo o exports uma simplificação para acessar essa variável
// module.exports === exports

exports.prop1 = 1;
exports.prop2 = 2;
exports.soma = function(num1,num2){
  return num1 + num2;
}

exports.subtracao = function(){
  return num1 - num2;
}

exports.multiplicao = function(){
  return num1 * num2;
}


exports.minhaFuncao = function () {
  console.log("Meu módulo funcionou");
}

exports.mediaDeTres = function(){
  console.log("Média de três...");
}

// exports = {
//   prop1:1,
//   prop2:2,
//   soma(num1,num2){
//     return num1 + num2;
//   },
//   func1() {
//     return "Minha função"
//   }
// }

// Não necessariamente um objeto precisa ser exportado

