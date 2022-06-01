let readlineSync = require('readline-sync');

console.log(`

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 
`);


function microondas1(opcao, tempo) {
  // Escolha , caso
  let tempoPadrao;
  switch (opcao) {
    case 1:
      //pipoca
      tempoPadrao = 10;
      break;
    case 2:
      //macarrao
      tempoPadrao = 8;
      break;
    case 3:
      //carne
      tempoPadrao = 15;
      break;
    case 4:
      //feijao
      tempoPadrao = 12;
      break;
    case 5:
      //brigadeiro
      tempoPadrao = 8;
      break;
    default:
      //Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
      console.log("Prato Inexistente");
      //Encerrar a função para não executar as condicoes abaixo
      return;
  }

  /*Se o tempo informado for maior que 2x o 
      necessário, exibir mensagem que a 
      comida queimou.*/

  if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
    console.log("comida queimou");
  } else if (tempo < tempoPadrao) {
  /* Se o tempo for menor que o padrão, 
      exibir a mensagem: "tempo insuficiente"; */
    console.log("tempo insuficiente");
  } else if (tempo > 3 * tempoPadrao) {
  /*  Se o tempo for 3x maior que o 
     necessário para o prato, o microondas 
     deve exibir a mensagem: “kabumm”; */
    console.log("Kabumm!");
  }

  //No final de cada tarefa, o 
  //microondas deverá exibir a mensagem: 
  //"Prato pronto, bom apetite!!!".
  console.log('Prato pronto, bom apetite!!!.');
}
//pipoca
// microondas1(1, 9);
//macarrao
//microondas(2, 12);
//carne
//microondas(3, 12);
//feijao
//microondas(4, 12);
//brigadeiro
//microondas(5, 12);

function microondas2(opcao, tempo) {
  // Escolha , caso
  let tempoPadrao;
  if(opcao == 1){
    tempoPadrao = 10;
  } else if(opcao == 2){
    tempoPadrao = 8
  } else if(opcao == 3){
    tempoPadrao = 15
  } else if(opcao == 4){
    tempoPadrao = 12;
  } else if(opcao == 5){
    tempoPadrao = 8;
  } else {
    console.log("Prato Inexistente");
    return;
  }

  if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
    console.log("comida queimou");
  } else if (tempo < tempoPadrao) {
    console.log("tempo insuficiente");
  } else if (tempo > 3 * tempoPadrao) {
    console.log("Kabumm!");
  }
  console.log('Prato pronto, bom apetite!!!.');
}

function microondas3(opcao, tempo) {
  // Escolha , caso
  let tempoPadrao = opcao == 1 ? 10 
  : opcao == 2 ? 8 
  : opcao == 3 ? 15
  : opcao == 4 ? 12
  : opcao == 5 ? 8 
  : -1

  if(tempoPadrao == -1) {
    console.log("Prato Inexistente");
    return;
  }

  tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao ? console.log("comida queimou")
  : tempo < tempoPadrao ? console.log("tempo insuficiente")
  : tempo > 3 * tempoPadrao ? console.log("Kabumm!")
  : console.log('');

  console.log('Prato pronto, bom apetite!!!.');
  
}

// Primeira posicao -> 0



function microondas4(opcao, tempo) { 
  //               0      1  2  3  4 5
  let tempos = [undefined,10,8,15,12,8];

  if(typeof opcao != 'number' || tempos[opcao] === undefined){
    console.log('Opção inválida');
    return;
  } 
  // opcao -> É o indice do array de tempos
  // tempoPadrao -> É o valor do indice 
  let tempoPadrao = tempos[opcao];

  if (tempo > 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
    console.log("comida queimou");
  } else if (tempo < tempoPadrao) {
    console.log("tempo insuficiente");
  } else if (tempo > 3 * tempoPadrao) {
    console.log("Kabumm!");
  }

  console.log('Prato pronto, bom apetite!!!.');

}
let opcao  = readlineSync.questionInt('Digite a opcão escolhida:');
let tempo = readlineSync.questionInt('Digite o tempo de execucao:');
microondas4(opcao,tempo);






// typeof = tipo de -> Diz para nós qual o tipo da variavel 


