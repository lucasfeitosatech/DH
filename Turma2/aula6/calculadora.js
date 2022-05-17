function soma(num1,num2){
  return num1 + num2;
}

function subtracao(num1,num2){
  return num1 - num2;
}

function divisao(num1,num2){
  return num1 / num2;
}

function multiplicacao(num1,num2){
  return num1 * num2;
}

function quadrado(num){
  return multiplicacao(num,num);
}

function mediaDeTresNumeros(num1,num2,num3){
  // Dividir para conquistar
  let retorno = soma(num1,num2);
  let retorno2 = soma(retorno,num3);
  return divisao(retorno2,3);
}
function calculaPorcentagem(valor,percentual){
  //      (valor*percentual)/100;
  let retorno = multiplicacao(valor,percentual);
  return divisao(retorno,100);
}

function  geradorDePorcentagem(valorPercentual,valorTotal){
  return multiplicacao(divisao(valorPercentual,valorTotal),100);
}


console.log(`Media de três numeros: ${mediaDeTresNumeros(8,9,7.25)}`);



