/*
  Calculadora - Nível I

  Valor padrão (default) dos parametros
*/

function soma(num1 = 0,num2 = 0){
  // num1 = 5
  // num2 = 0
  // 5 + undefined = NaN -> Nao é um número
  return num1 + num2;
}

console.log('Soma: ' , soma(5));

function subtracao(num1,num2){
  return num1 - num2;
}

function divisao(num1,num2){
  return num1 / num2;
}
function multiplicacao(num1,num2){
  return num1 * num2;
}

/*
  Calculadora - Nível II
*/

console.log ("-------------- Teste de Operações / Calculadora --------------");
console.log('Soma: ' , soma(5,6));


/*
Calculadora - Nível III - Funções Extras
*/

function quadradoDoNumero(n){
  // return n*n;
  const quadrado = multiplicacao(n,n);
  return quadrado
}

function mediaDeTresNumeros(num1,num2,num3){
  // return (num1+num2+num3)/3;
  const soma1 = soma(num1,num2);
  const soma2 = soma(soma1,num3);
  const resultado = divisao(soma2,3);
  return resultado;

  // return divisao(soma(num1,soma(num2,num3)),3);
}

function calculaPorcentagem(numero,porcentagem){
  // return numero*(porcentagem/100);
  const percentual = divisao(porcentagem,100);
  return multiplicacao(numero,percentual);
}

function geradorDePorcentagem(valorPercentual,valor){
  // return (valorPercentual/valor)*100;
  const percentual = divisao(valorPercentual,valor);
  return multiplicacao(percentual,100);
}