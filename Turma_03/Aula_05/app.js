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

calculaImc(83.5,1.70,'José da Silva',27);
calculaImc(63.7,1.53,'Aline Ferreira',33);
