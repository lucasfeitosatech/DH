// Importação/Requisição do módulo a ser utilizado
let readlineSync = require('readline-sync');
// switch/case
/*
  escolha alguma coisa

  caso seja a opcao x: fazer alguma coisa

  caso seja a opcao y: fazer outra coisa

  caso não seja nenhuma das opções: faça algo também

*/

// template strings

console.log(`
  Bem-vindo ao nosso cardápio

  Temos as seguintes opções: 

  1 - X-tudo
  2 - Lagosta
  3 - Arroz feijão e ovo
  4 - Açai
  5 - Lasanha de Coxinha

`);

let opcao = readlineSync.question('Qual a opção escolhida? '); // 1
console.log("A opção escolhida foi: " + opcao);

switch(opcao) {
  case '1':
    console.log("Escolheu X-tudo");
    break;// Encerrar/Terminar a execução do switch
  case '2':
    console.log("Esolheu Lagosta");
    break;
  case '3':
    console.log("Escolheu Arroz feijão e ovo");
    break;
  case '4':
    console.log("Escolheu Açai");
    break;
  case '5':
    console.log('Escolheu Lasanha de Coxinha');
    break;
  default:
    console.log("Opção inválida");
}

if(opcao === '1'){
  console.log("Escolheu X-tudo");
} else if(opcao === '2'){
  console.log("Esolheu Lagosta");
} else {
  console.log("Opção inválida");
}

console.log("Fim do programa");
//...











//...


