// Templates strings
// importação/requisição do modulo a ser utilizado
var readlineSync = require('readline-sync');
console.log(`

  Bem-vindo ao nosso cardápio digital: 

  Temos as seguintes opções:

  1 - Pizza
  2 - Hamburguer
  7 - Tapioca Recheada
`);

let opcao = '1';

// escolha
switch(opcao){
  case '1':
    console.log("Pizza");
    break; // Encerrar/quebrar/finalizar
  case '2':
    console.log("Hamburguer");
    break;
  case '7':
    console.log("Tapioca recheada do Joab");
    break;
  default:
    console.log("Opção selecionada inválida");
}