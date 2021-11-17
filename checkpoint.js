//        1 - Pipoca – 10 segundos (padrão);
//        2 - Macarrão – 8 segundos (padrão);
//        3 - Carne – 15 segundos (padrão);
//        4 - Feijão – 12 segundos (padrão);
//        5 - Brigadeiro – 8 segundos (padrão);

/* - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo 
com sua vontade. 

- Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
 */
function microondas(opcao, tempo) {
  let tempoPadrao = 0;
  switch (opcao) {
    case 1: //Pipoca
      tempoPadrao = 10;
      break;
    case 2: //Macarrao
      tempoPadrao = 8;
      break;
    case 3: // carne
      tempoPadrao = 15;
      break;
    case 4: // feijao
      tempoPadrao = 12;
      break;
    case 5: // brigadeiro
      tempoPadrao = 8;
      break;
    default:
      console.log("Prato inexistente");
      return;
  }

  if (tempo < tempoPadrao) {
    console.log("Tempo insuficiente");
  } else if (tempo > 3 * tempoPadrao) {
    console.log("Kabuuum!");
  } else if (tempo > 2 * tempoPadrao) {
    console.log("A comida queimou!");
  }

  //- No final de cada tarefa, o microondas deverá exibir a mensagem:
  //"Prato pronto, bom apetite!!!".
  console.log("Prato pronto. bom apetite!!!");
}

function microondas2(opcao, tempo) {
  let tempoPadrao = 0;

  if (opcao == 1) tempoPadrao = 10;
  else if (opcao == 2 || opcao == 5) tempoPadrao = 8;
  else if (opcao == 3) tempoPadrao = 12;
  else if (opcao == 4) tempoPadrao = 15;
  else {
    console.log("Prato inexistente");
    return;
  }

  if (tempo < tempoPadrao) console.log("Tempo insuficiente");  
  else if (tempo > 3 * tempoPadrao) console.log("Kabuuum!");
  else if (tempo > 2 * tempoPadrao) console.log("A comida queimou!");

  //- No final de cada tarefa, o microondas deverá exibir a mensagem:
  //"Prato pronto, bom apetite!!!".
  console.log("Prato pronto. bom apetite!!!");
}

function microondas3(opcao, tempo) {
  let tempoPadrao = opcao == 1 ? 10 
  : opcao == 2 || opcao == 5 ? 8
  : opcao == 3 ? 12 
  : opcao == 4 ? 15
  : -1;

  tempoPadrao == -1 ? console.log("Prato Inexistente!")
  : tempo < tempoPadrao ? console.log("Tempo insuficiente")
  : tempo > 2*tempoPadrao && tempoPadrao <= 3*tempoPadrao ? console.log("Kabuuum!")
  : tempo > 2*tempoPadrao ? console.log("A comida queimou!") : '';
  
  //- No final de cada tarefa, o microondas deverá exibir a mensagem:
  //"Prato pronto, bom apetite!!!".
  console.log("Prato pronto. bom apetite!!!");
}

function microondas4(opcao,tempo){
  if (opcao == 1)  validaCondicoes(tempo,10)
  else if (opcao == 2 || opcao == 5) validaCondicoes(tempo,8)
  else if (opcao == 3) validaCondicoes(tempo,12)
  else if (opcao == 4) validaCondicoes(tempo,15);
  else console.log("Prato Inexistente");
}

function validaCondicoes(tempo,tempoPadrao){
  if (tempo < tempoPadrao) console.log("Tempo insuficiente");  
  else if (tempo > 3 * tempoPadrao) console.log("Kabuuum!");
  else if (tempo > 2 * tempoPadrao) console.log("A comida queimou!");
}

microondas(1, 9);
