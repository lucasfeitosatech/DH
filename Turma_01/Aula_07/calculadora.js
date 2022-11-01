// Calculadora - Nível I

const soma = function(num1,num2){
  return num1 + num2;
}

function subtracao(num1,num2){
  return num1 - num2;
}

function multiplicacao(num1,num2){
  return num1 * num2;
}

function divisao(num1,num2){
  return num1 / num2;
}

// Calculadora - Nível II

console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log("Função soma: ",soma(5,8));
console.log("Função subtração: ",subtracao(10,2));
console.log("Função multiplicação: ",multiplicacao(5.6,3.2));
console.log("Função divisão: ",divisao(5,20));
console.log("Função divisão: ",divisao(5,Infinity));


// Calculadora - Nível III - Funções Extras

function quadradoDoNumero(numero = 5){
  return multiplicacao(numero,numero);
}

console.log("Função quadrado: ",quadradoDoNumero(5));

function mediaDeTresNumeros(num1,num2,num3){
  const somaNum1Num2 = soma(num1,num2);
  const resultadoSoma = soma(somaNum1Num2,num3);
  return divisao(resultadoSoma,3);
  
  //return divisao(soma(soma(num1,num2),num3),3);

  // return (num1 + num2 + num3)/3;
}

console.log("Função media de 3: ",mediaDeTresNumeros(5.8,8,7.4));

function calculaPorcentagem(valorTotal,valorPercentual){
  // % -> 1/100
  // 15%300 = (15/100)*300;
  // return (valorPercentual/100)*valorTotal;
  return multiplicacao(divisao(valorPercentual,100),valorTotal);
}

console.log("Função calculaPorcentagem: ",calculaPorcentagem(300,15));

function geradorDePorcentagem(valor,valorTotal){
  return multiplicacao(divisao(valor,valorTotal),100) + '%';
}

console.log("Função geradorDePorcentagem: ",geradorDePorcentagem(2,200));
