/*
  Função -> Bloco de código que pode ser executado sempre que necessário
  -> Promovem a reutilização de código 

  Declaração de função: 

  function -> palavra reservada
  nomeClatura -> Definimos o nome que queremos para a nossa função
  () -> Onde vamos poder passar alguns parametros, caso necessário
  Parametros -> São informação que 
  podem ser passadas para a função, sempre que necessário
  {} -> O escopo/bloco de código a ser executado
  {} -> Inicio e fim do bloco de código a ser executado


*/

/*
  Mover(Oeste)
  altura -> Parametr
  peso -> Parametro
*/

// Declaração de funcão -> Comportamento da função
/*
  Os parametros são variáveis com o mesmo comportamento do let 
  e vão exister apenas no escopo da função


*/
// Declaração
//calculoImc('Carlos de Souza',28,1.76,80.1);
//calculoImc('Aline Ferreira',33,1.53,63.7);
function calculoImc(nome,idade,altura,peso){
  const imc = peso/(altura**2);
  console.log(nome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2));
}
// Execução/chamada/invocação da função

/*
  Função expressa -> Uma forma de atribuir a função a uma variável
*/

const numero = 5;
const texto = 'Meu Texto';
const temPlano = true;
// Função expressa
                      // Função anonima
// minhaFuncao()  // -> ERRO  
let minhaFuncao = function(param1,param2){


}




/*
  Continuação Aula 05 -

  Funções possumem comportamento de forma similar ao var, ou seja,
  possuem visibilidade global
  
  valores padroes dos parametros
  retornos
*/

function soma(num1 = 0,num2 = 0,num3 = 0){
  /*
    num1 -> 0
    num2 -> 0
    num3 -> 0
  */

  /*
    palavra reservada
    return -> Vai especificar o que vai ser retornado da função
    ou seja, na hora da execução da função esse valor vai ser devolvido

    termina a função 
  */
 return num1 + num2 + num3;
 2**2
 Math.pow(2,2);
}

/*
  Parametros -> Os valores de entrada
  Após o processamento da função 
  A execução da mesma sempre vai esperar por algum valor de saída
  caso a função não tenha um retorno definido ela sempre retornará o valor
  undefined
*/

// Toda chamda de função sempre espera por algum valor de saída
const retorno = soma(1,2,3);
calculoImc(retorno);
console.log(retorno);
