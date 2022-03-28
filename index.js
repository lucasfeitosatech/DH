// Primeiro checkpoint - Microondas

console.log(`

  Bem-vindo ao seu microondas, escolha a sua opção desejada

  1 - Pipoca – 10 segundos (padrão);
  2 - Macarrão – 8 segundos (padrão);
  3 - Carne – 15 segundos (padrão);
  4 - Feijão – 12 segundos (padrão);
  5 - Brigadeiro – 8 segundos (padrão); 

`);

function microondas(opcao, tempo) {
  let tempoPadrao = 0;
  switch (opcao) {
    case 1:
      tempoPadrao = 10;
      break;
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
      /* - Opções não listadas no menu, 
    devem exibir uma mensagem de erro: "Prato inexistente"; */
     return console.log("Prato Inexistente");
  }

  //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
  if (tempo >= 2 * tempoPadrao && tempo < 3*tempoPadrao) {
    console.log("A comida queimou");
  } else if (tempo < tempoPadrao) {
    //Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
    console.log("Tempo insuficiente");
  } else if (tempo >= 3 * tempoPadrao) {
    //- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
    console.log("Kabum");
  }

  //- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
  console.log("Prato, pronto bom apetite");
}

microondas(1, 14);


function microondas2(opcao, tempo) {
  let tempoPadrao = 0;
  if(opcao == 1) {
    tempoPadrao = 10;
  } else if(opcao == 2){
    tempoPadrao = 8;
  } else if(opcao == 3){
    tempoPadrao = 15;
  }  else if(opcao == 4){
    tempoPadrao = 12;
  } else if(opcao == 5){
    tempoPadrao = 8;
  } else {  
     console.log("Prato Inexistente");
     //Encerra a função
     return;
  }

  //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
  if (tempo >= 2 * tempoPadrao && tempo < 3*tempoPadrao) {
    console.log("A comida queimou");
  } else if (tempo < tempoPadrao) {
    //Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
    console.log("Tempo insuficiente");
  } else if (tempo >= 3 * tempoPadrao) {
    //- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
    console.log("Kabum");
  }

  //- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
  console.log("Prato, pronto bom apetite");
}

function microondas3(opcao,tempo){
  let tempoPadrao = opcao == 1 ? 10 
  : opcao == 2 ? 8 
  : opcao == 3 ? 15
  : opcao == 4 ? 12
  : opcao == 5 ? 8
  : 0

  tempoPadrao == 0 ? console.log("Prato inexistente")
  : tempo >= 2* tempoPadrao && tempo < 3*tempoPadrao ? console.log("A comida queimou")
    : tempo < tempoPadrao ? console.log("Tempo insuficiente")
    : tempo > 3*tempoPadrao ? console.log("Kabuuuum")
    : ''

  console.log("Prato pronto, bom apetite!");
}
