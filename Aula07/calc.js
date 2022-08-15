/* Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.

Crie uma função adicionar, 
que deverá receber dois parâmetros e retornar a soma deles.

Crie uma função de subtração, que deverá 
receber dois parâmetros e retornar a 
subtração do primeiro menos o segundo.

Crie uma função de multiplicação, que deverá receber dois 
parâmetros e retornar o resultado de sua multiplicação.

Crie uma função de divisão, que receberá dois 
parâmetros e retornará o resultado da divisão do 
primeiro sobre o segundo. */

// Crie uma função adicionar, 
// que deverá receber dois parâmetros e retornar a soma deles.
// const readlineSync = require('readline-sync');
// readlineSync.questionInt()

function adicionar(numero1,numero2,numero3 = 0){
  return numero1 + numero2 + numero3;
}

let retorno = adicionar(5,6);
console.log(retorno);

function subtrair(numero1,numero2){
  return numero1 - numero2;
}

retorno = subtrair(5,6);
console.log(retorno);

function dividir(numero1,numero2){
  return numero1/numero2;
}

retorno = dividir(5,6);
console.log(retorno);

function multiplicar(numero1,numero2){
  // numero1 = 4
  // numero2 = 4
  return numero1*numero2;
}

retorno = multiplicar(5,6);
console.log(retorno);

/* Crie uma função chamada quadradoDoNumero, 
que recebe um número como parâmetro e deve retornar esse número 
multiplicado por ele mesmo, ou seja, ao quadrado.
Importante: quadradoDoNumero() deve usar a 
função multiplicação() para calcular o quadrado do parâmetro 
inserido em power(). */

function quadradoDoNumero(numero){
  // numero = 4
  return multiplicar(numero,numero);
}

retorno = quadradoDoNumero(4);
console.log(retorno);

/* Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, 
que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas 
funções criadas anteriormente em nossa calculadora. */

function mediaDeTresNumeros(numero1,numero2,numero3){
  // let soma = numero1 + numero2 + numero3;
  // return soma/3;
  let soma1 = adicionar(numero1,numero2);
  let soma2 = adicionar(soma1,numero3);
  return dividir(soma2,3);
  
}

/* Crie a função calculaPorcentagem, que receberá dois parâmetros: 
o número total e a porcentagem que deseja calcular, e que deverá retornar 
x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  
(deve retornar 45, pois é 15% de 300). 

Importante: calculaPorcentagem() você precisará usar algumas funções criadas 
anteriormente em nossa calculadora. */


// 30%500
// (0.3)*500


function calculaPorcentagem(numero,percentual){
  // return (percentual/100)*numero;
  let valorPercentual = dividir(percentual,100);
  return multiplicar(numero,valorPercentual);
}

retorno = calculaPorcentagem(300,15);
console.log(retorno);

/* Crie uma função geradorDePorcentagem que leva dois parâmetros, 
e que deverá retornar a porcentagem do primeiro em relação ao 
segundo parâmetro.
Exemplo: geradorDePorcentagem 
(2, 200) (deve retornar 1 já que 2 é 1% de 200). */

function geradorDePorcentagem(valorParcial,valorTotal){
  // return (valorParcial/valorTotal)*100;
  let percentual = dividir(valorParcial,valorTotal);
  return multiplicar(percentual,100);
}

retorno = geradorDePorcentagem(100,200);//50%
console.log(retorno);

