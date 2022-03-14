// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão);

function microondas(opcao, tempo) {
  let tempoPadrao;
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
      console.log("Prato inexistente");
  }

  if(tempo >= 2*tempoPadrao && tempo < 3*tempoPadrao){
    console.log("comida queimou");
  } else if(tempo < tempoPadrao ){
    console.log("Tempo insuficiente");
  } else if (tempo >= 3*tempoPadrao){
    console.log("Kabuuuum!");
  }

  console.log("Pipipipipipipipi");

//   - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
//   Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
}

//microondas(1,9);

function microondas2(opcao,tempo){
  let tempoPadrao;
  if(opcao == 1) tempoPadrao = 10;
  else if(opcao == 2) tempoPadrao = 8;
  else if(opcao == 3) tempoPadrao = 15;
  else if(opcao == 4) tempoPadrao = 12;
  else if(opcao == 5) tempoPadrao = 8;
  else console.log("Prato Inexistente");

  if(tempo >= 2*tempoPadrao && tempo < 3*tempoPadrao) console.log("comida queimou");
  else if(tempo < tempoPadrao ) console.log("Tempo insuficiente");
  else if (tempo >= 3*tempoPadrao) console.log("Kabuuuum!");
  else if((tempo == tempPadrao || (tempo > tempPadrao && tempo < 2 * tempPadrao)))
  console.log("Pipipipipipipipi");

}

function microondas3(opcao,tempo){
  // ? - if - true - verdadeiro 
  //     ? 
  let tempoPadrao = opcao == 1 ? 10
  : opcao == 2 ? 8
  : opcao == 3 ? 15
  : opcao == 4 ? 12
  : opcao == 5 ? 8 
  : console.log("Prato Inexistente")

  tempo >= 2*tempoPadrao && tempo < 3*tempoPadrao  ? console.log("comida queimou")
  : tempo < tempoPadrao  ? console.log("Tempo insuficiente")
  : tempo >= 3*tempoPadrao ? console.log("Kabuuuum!")
  : console.log("");

  console.log("Pipipipipipipipi");

}

microondas2(2,14);
