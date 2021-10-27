//Micro desafio 1

function teste1(x,y){
  return y - x;
}

//console.log(teste1(40,10));

//Micro desafio 2

function teste2(x,y){
  return x*2;
  console.log(x);
  return x/2;
}

console.log(teste2(20));

//Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function polegadasEmCentrimetros(polegadas){
  const centrimetros = polegadas*2.54;
  console.log( polegadas + " polegadas = " + centrimetros + "cm");
  return centrimetros;
}

polegadasEmCentrimetros(2);

//Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converterStringEmUrl(string,string2){
  let url = "http://www." + string + string2;
  url = `http://www.${string}${string2}`;
  return url;
}
console.log(converterStringEmUrl("funcaojs",".net"));

//Crie uma função que recebe uma string e retorna a mesma frase, 
//mas com o caracter de exclamação ( ! ).

function adicionaExclamacao(texto){
  return texto + "!";
}

console.log(adicionaExclamacao("Minha frase de teste"));

//Crie uma função que calcule a idade dos cachorros, 
//considerando que 1 ano humano, equivale a 7 anos para eles.

function calculaIdadeDosCachorros(idade) {
  console.log("Idade do cachorro em anos humano é de " + 
  idade + " e a idade real é de: " + idade*7);
  return idade*7;
}
calculaIdadeDosCachorros(10);

//Crie uma função que calcule o valor da sua hora de 
//trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.

function calculaValorHoraDeTrabalho(salario){
  const valorHora = salario/160;
  console.log(`O valor por hora do salario R$ ${salario} é de R$ ${valorHora}/hora`);
  return valorHora;
}

calculaValorHoraDeTrabalho(3000);

/*
  Crie a função calculadora de IMC* de uma pessoa, 
  que recebe a altura em centímetros e o peso em quilogramas. 
  Em seguida, execute a função, testando diferentes valores. 
*/

function calculaImc(nome,idade,peso,altura,plano){
  const alturaEmM = altura/100;
  const imc = peso/(alturaEmM**2); 
  console.log(nome + ' tem ' + idade + ' anos' + ' e seu índice de massa corporal é de: ' + imc.toFixed(2))
  return imc;
}

calculaImc("Carlos de Souza",28,80.1,174,true);
calculaImc("Carlos de Souza2",30,85.1,178,true);
calculaImc("Carlos de Souza3",29,83.1,167,true);
calculaImc("Carlos de Souza4",20,82.1,170,true);

