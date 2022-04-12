const id = "abcdf123!@#";
let contador = 0;
contador++;//1
contador++;//2
console.log(contador);
const calculadora = require('../../modulos/calculadora/calculadora.js');

//Declaração de função
calculadora.minhaFuncao();
//Execução da função
// minhaFuncao();
// minhaFuncao();
// minhaFuncao();

// function soma(num1,num2){
//   return num1 + num2;
//   let x = num1 + num2;
// }
console.log(calculadora.soma(2,4));
//Tradicional - Possui escopo global
calculadora.mediaDeTres();

