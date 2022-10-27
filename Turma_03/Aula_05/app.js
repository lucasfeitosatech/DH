// Reaproveitamento de código
// Reusabilidade de código
/*
  Aula 05 -> Introdução a Função

  Nas funções podemos criar blocos de código que esse repetem
  e executar esses códigos sempre que necessário

  Valores padrões/opcionais dos parametros
  return/retorno 
  função expressa

*/

// function nomeDaFuncao
// 
// Mover(Norte) -> Norte -> Parametro da função
/*
  peso -> Primeiro parametro  
  altura -> Segundo parametro

  Parametros -> Informações que a função precisa para 
  completar sua finalidade

  Parametros -> São basicamente variáveis que possuem escopo local
  {} -> Escopo -> Inicio e Fim do bloco de código a ser executado

*/
// Declaração de função
function calculaImc(peso,altura,nome,idade) {
  const imc = peso/altura**2;
  console.log(nome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2));
}

// calculaImc(83.5,1.70,'José da Silva',27);
// calculaImc(63.7,1.53,'Aline Ferreira',33);


// Declaração da funcão
function soma(num1 = 0,num2 = 0,num3 = 0){
  /*
    num1 -> 0
    num2 -> 0
    num3 -> 0
  */

  // Os parametros são variavéis que só existem dentro da função
  // parametros tem o mesmo comportamento do let
  // Código a ser executado

  return num1 + num2 + num3; // Palavra reservada

  /*
    Retorna algum valor para onde a função executado
    Valor de saída da função e também encerra a função
  */
} 

// chamada/execução/invocação da função;
console.log( soma(1,2,3) );

const imcRetornado = imc(80,1.70);
console.log(imcRetornado);
function imc(peso,altura) {
  const imc = peso/altura**2;
  const soma = peso + altura;
  const retorno = 'O valor do imc é de:' + imc + ' E o valor da soma:' + soma;
  return retorno;
}


// função expressa -> Atribuição de uma função a uma variável;

const minhaVariavel = 5;
const numero = 50.4
const texto = 'Hello World';


minhaFuncao(1,2);
let minhaFuncao = function(param1,param2){
  return param1 + param2;
}




//Mostrei esse valor em tela


