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
function calculoImc(nome,idade,altura,peso){
  const imc = peso/(altura**2);
  console.log(nome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2));
}

calculoImc('Carlos de Souza',28,1.76,80.1);
calculoImc('Aline Ferreira',33,1.53,63.7);


/*
  funçaao expressa
  valores padroes dos parametros
  retornos
*/
