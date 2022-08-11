// Fazendo importação
const readlineSync = require('readline-sync');


/*
  Aula 6 -  
  Revisão
  Função expressa.
  NPM e ReadlineSync 
  Prática
*/
let fs = require('fs');
fs.writeFileSync('./teste.txt','Testando a criaçao de arquivos');

// minhafuncao = undefined
// const retorno = minhaFuncao(5,6,7);
// console.log(retorno);
// Declaração de uma função

// Função anonima
const minhaFuncao = function(param1,param2,param3){
  // escopo de função
  //param1 = 5;
  // param2 = 6;
  // param3 = 7
  let resultado = (param1 + param2)/param3;
  // return é opcional, caso não seja passado, undefined será retornado automaticamente
  return resultado
}

const nome = readlineSync.questionFloat('Qual o seu nome? ');
console.log('Oi ' + nome + '!');


//Arrow functions

/*
  Função expressa -> O armazenamento de uma função em uma variável 
*/


/*
  NPM -> Node Package Manager -> Gerenciador de pacotes do node 


*/

