// Calculadora - Nível I

function soma(num1 = 0,num2 = 0){
  return num1 + num2;
}

function subtracao(num1 = 0,num2 = 0){
  return num1 - num2;
}

function multiplicacao(num1 = 1,num2 = 1){
  return num1 * num2;
}

function divisao(num1 = 1,num2 = 1){
  return num1 / num2;
}

// Calculadora - Nível II

console.log ("-------------- Teste de Operações / Calculadora --------------");
console.log('Função soma: ' , soma(6,5));
console.log('Função subtração: ' , subtracao(10,8));
console.log('Função multiplicação: ' , multiplicacao(5.5,90));
console.log('Função divisão: ' , divisao(7.56/1.97));
console.log('Função divisão por 0: ' , divisao(100,0));


// Calculadora - Nível III - Funções Extras

function quadradoDoNumero(numero){
  return multiplicacao(numero,numero);
}

console.log('Função quadrado: ' , quadradoDoNumero(5));

function mediaDeTresNumeros(num1,num2,num3){
  const somaNum1Num2 = soma(num1,num2);
  const resultadoSoma = soma(somaNum1Num2,num3);
  return divisao(resultadoSoma,3);

  // return divisao(soma(soma(num1,num2),num3),3);

  // return (num1 + num2 + num3)/3;
}

console.log('Função media de três:  ' , mediaDeTresNumeros(5,7.5,8));

function calculaPorcentagem(valorTotal,valorPercentual){
  // 15%300 -> (15/100)*300
  // return (valorTotal*valorPercentual)/100;
  const resultadoMultiplicao = multiplicacao(valorTotal,valorPercentual);
  return divisao(resultadoMultiplicao,100);
}

console.log('Função calcula Porcentagem  ' , calculaPorcentagem(300,15));
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem() {
  const resultadoDaDivisao = divisao(2,200);
  return multiplicacao(resultadoDaDivisao,100)+'%';
}

console.log('Gerador de porcentagem:  ' , geradorDePorcentagem(2,200));