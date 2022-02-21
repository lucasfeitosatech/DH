//Somar 

console.log(`

  Bem-vindo ao programa principal: 

  Calculadora.js

`)

function somar(num1,num2){
  return num1 + num2;
}

function subtrair(num1,num2){
  return num1 - num2;
}

function multiplicar(num1,num2){
  return num1 * num2;
}

function dividir(num1,num2){
  return num1 / num2;
}

function quadradoDoNumero(num){
  return multiplicar(num,num);
}

function mediaDeTres(num1,num2,num3){
  const soma1 = somar(num2,num3);
  const soma = somar(num1,soma1);
  return dividir(soma,3);
}

function calculaPorcentagem(valor,percentual){
  return dividir(multiplicar(valor,percentual),100);
}

function geradorDePorcentagem(num1,num2){
  return multiplicar(dividir(num1,num2),100);
}

//Calculadora Nível 2

console.log(`
  Soma: ${somar(5,4)}
  Subtrair: ${subtrair(4,3)}
  Multiplicar: ${multiplicar(2,3)}
  Dividir: ${dividir(10,0)}
  Quadrado: ${quadradoDoNumero(4)}
  Media: ${mediaDeTres(6,9,10)}
  Porcentagem: ${calculaPorcentagem(200,50)}
  Gerador de Porcentagem: ${geradorDePorcentagem(5,100)}%
`);

