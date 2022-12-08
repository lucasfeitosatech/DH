// Callbacks -> É o ato de passar uma função como parametro para outra função
// Função de mais alta ordem;
function calculadora(num1,num2,operacao){
  return operacao(num1,num2);
}


function soma(num1,num2){
  return num1 + num2;
}
calculadora(1,5,soma);

// Executar um código após x segundos 
setTimeout(() => {
  console.log("Passou 5 segundos")
},5 * 1000);

// tempo ms -> 1s = 1000ms 


var numbers = [1, 4, 9];
var doubles = numbers.map(n => n * 2);

setTimeout(() => {
  soma(5,6);
},3 * 1000)