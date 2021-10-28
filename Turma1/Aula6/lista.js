//Micro Desafio 1

function teste1(x,y){
  return y-x;
}

//console.log(teste1(40,10));

//Micro Desafio 2

function teste2(x,y = 0){
  //console.log(x);
  let soma = x + y;
  let dobro = soma * 2;
  let metade = dobro/2;

  return dobro;
}



//Exercicio 1

//Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function converterPolegadasEmCentrimetros(polegadas){
  const centrimetos = polegadas * 2.54;
  return centrimetos;
}

function converterCentrimetrosEmPolegadas(centrimetos){
  const polegadas = centrimetos/2.54;
  return polegadas;
}

//console.log(converterPolegadasEmCentrimetros(2));
const retorno = converterPolegadasEmCentrimetros(2);
const retorno2 = converterCentrimetrosEmPolegadas(retorno);
// console.log(retorno);
// console.log(retorno2);

//Exercício 2

/* Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br" */

function converterStringEmUrl(string,dominio){
  return "http://www." + string + dominio;
}

//console.log(converterStringEmUrl("digitalhouse",".net"));

//Exercício 3

/* Crie uma função que recebe uma string e 
retorna a mesma frase, mas com o caracter de exclamação ( ! ). */

function adicionaExclamacao(string){
  return string + "!";
}

//console.log(adicionaExclamacao("Eu adoro chocolate"));

//Exercício 4

/* Crie uma função que calcule a idade dos cachorros, 
considerando que 1 ano humano, equivale a 7 anos para eles. */

function calcularIdadeCachorro(idade){
  return idade*7;
}

console.log(calcularIdadeCachorro(4));

//Exercício 5

/* Crie uma função que calcule o valor da sua hora de trabalho, 
tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês. */

function calculaValorHoraDeTrabalho(salario){
  return salario/160;
}

console.log("O valor da sua hora de trabalho é de R$ " + calculaValorHoraDeTrabalho(5000) );


//Exercício 6 

//Crie a função calculadora de IMC* de uma pessoa, que recebe a 
//altura em centímetros e o peso em quilogramas. 
//Em seguida, execute a função, testando diferentes valores. 

function calculaImc(nome,idade,peso,altura){
  const imc = peso/(altura*altura);
  //console.log(nome + ' tem ' + idade + ' anos' + ' e seu índice de massa corporal é de: ' + imc.toFixed(2));
  return imc;
}

calculaImc("José da Silva",27,83.5,1.7);
calculaImc("Carlos de Souza",28,80.1,1.76);
calculaImc("Aline Ferreira",33,63.7,1.53);
calculaImc("Ana Paula",26,55.0,1.62);

//Exercício 7
/* 
Crie uma função que receba uma string em minúsculas, 
converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz. */

function converterParaMaiusculo(string){
  return string.toLowerCase();
}

console.log(converterParaMaiusculo("ABCDE"));



