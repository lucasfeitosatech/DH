/*
  Aula 13

  Correção CP
  Exercícios de Estruturas de repetição
*/

/* 
Precisamos desenvolver um menu para um microondas super veloz, 
onde teremos 5 opções de comida com seus respectivos tempos pré-definidos.

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão);

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function microondas(tempo, opcao) {

  // Switch Case
  let tempoPadrao = 0;
  switch (opcao) {
    case 1:
      tempoPadrao = 10;
      break;// Sai do switch
    case 2:
      tempoPadrao = 8;
      break;
    case 3:
      tempoPadrao = 15;
      break;
    case 4:
      tempoPadrao = 12;
      break;
    case 5:
      tempoPadrao = 8;
      break;
    default:
      console.log("Prato inexistente");
      return;
  }
  
  if (tempo < tempoPadrao) {
    console.log("tempo insuficiente")
  } else if (tempo > 2 * tempoPadrao && tempo <= 3 * tempoPadrao) {
    console.log("A comida queimou");
  } else if (tempo > 3 * tempoPadrao) {
    console.log("kabumm");
  }
  console.log("Prato pronto, bom apetite!!!");
}
function microondas2(tempo, opcao) {
  // If/else
  let tempoPadrao = 0;

  if(opcao === 1 || opcao === 'pipoca'){
    tempoPadrao = 10;
  } else if(opcao === 2 || opcao === 'macarrao'){
    tempoPadrao = 8;
  } else if(opcao === 3 || opcao === 'carne'){
    tempoPadrao = 15;
  } else if(opcao === 4 || opcao === 'feijao'){
    tempoPadrao = 12;
  } else if(opcao === 5 || opcao === 'brigadeiro'){
    tempoPadrao = 8;
  } else {
    console.log("Prato inexistente");
    return;
  }
  
  if (tempo < tempoPadrao) {
    console.log("tempo insuficiente")
  } else if (tempo > 2 * tempoPadrao && tempo <= 3 * tempoPadrao) {
    console.log("A comida queimou");
  } else if (tempo > 3 * tempoPadrao) {
    console.log("kabumm");
  }
  console.log("Prato pronto, bom apetite!!!");
}


function microondas3(tempo, opcao) {

  let tempoPadrao = opcao === 1 ? 10
  : opcao === 2 ? 8
  : opcao === 3 ? 15
  : opcao === 4 ? 12
  : opcao === 5 ? 8
  : -1;

  if(tempoPadrao === -1){
    console.log("Prato inexistente");
    return;
  }

  if (tempo < tempoPadrao) {
    console.log("tempo insuficiente")
  } else if (tempo > 2 * tempoPadrao && tempo <= 3 * tempoPadrao) {
    console.log("A comida queimou");
  } else if (tempo > 3 * tempoPadrao) {
    console.log("kabumm");
  }
  console.log("Prato pronto, bom apetite!!!");
}

// microondas(30, 1);
// microondas(10, 5);
// // ...
// microondas(15, 3);

// const media = 6.5
// let situacao = '';
// if(media >= 7){
//   // Verdadeiro
//   situacao = 'Aprovado';
// } else if(media >= 5 && media < 7) {
//   // Falso
//   situacao = 'Recuperação';
// } else {
//   situacao = 'Reprovado';
// }

// let situacao = media >= 7 ? 'Aprovado' 
// : media >= 5 && media < 7 ? 'Recuperação' 
// : 'Reprovado';


// if Ternário
  /*
    if Ternário -> Serve para realizar atribuições condicionais a variáveis
    ? -> Armazena o valor caso seja verdadeiro
    : -> Armaeznar o valor caso seja falso
  */




