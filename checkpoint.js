// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão);

function microondas(opcao,tempo) {
  let tempoPadrao = 0;
  switch (opcao) {
    case 1: //Pipoca
      tempoPadrao = 10;
      break;
    case 2: //Macarrão
     tempoPadrao = 8;
      break;
    case 3: //Carne
      tempoPadrao = 15;
      break;
    case 4: //Feijão
      tempoPadrao = 12;
      break;
    case 5:// Brigadeiro
      tempoPadrao = 8;
      break;
    default:
      console.log("Prato Inexistente");
      return;
  }

  if(tempo < tempoPadrao)
    console.log("Tempo insuficiente");
  else if(tempo > 3*tempoPadrao)
    console.log("Kabumm");
  else if(tempo > 2*tempoPadrao)
    console.log("A comida queimou"); 

  console.log("Prato pronto, bom apetite!!!");
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
}

microondas(5,10);

let pipoca = 8;

function microondas2(opcao,tempo) {
  let tempoPadrao = 0;
  if(opcao == 1 ) tempoPadrao = 10;
  else if(opcao == 2 || opcao == 5) tempoPadrao = 8;
  else if(opcao == 3) tempoPadrao = 15;
  else if(opcao == 4) tempoPadrao = 12;
  else {
    console.log("Prato Inexistente");
    return;
  }
  
  if(tempo < tempoPadrao) console.log("Tempo insuficiente");
  else if(tempo > 3*tempoPadrao) console.log("Kabumm");
  else if(tempo > 2*tempoPadrao) console.log("A comida queimou"); 
    
  console.log("Prato pronto, bom apetite!!!");
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
}



function microondas3(opcao,tempo) {
  let tempoPadrao = opcao == 1 || opcao == 5 ? 8 
  : opcao == 2 ? 10 
  : opcao == 3 ? 15
  : opcao == 4 ? 12
  : -1;

  tempo < tempoPadrao ? console.log("Tempo insuficiente")
  : tempo > 3*tempoPadrao ? console.log("Kabumm")
  : tempo > 2*tempoPadrao ? console.log("A comida queimou")
  : tempoPadrao == -1 ? console.log("Prato Inexistente") : "";
   
  console.log("Prato pronto, bom apetite!!!");
}

function microondas4(opcao,tempo) {
  if(opcao == 1 ) verificaCondicoes(tempo,10)
  else if(opcao == 2 || opcao == 5) verificaCondicoes(tempo,8)
  else if(opcao == 3) verificaCondicoes(tempo,15);
  else if(opcao == 4) verificaCondicoes(tempo,12);
  else console.log("Prato Inexistente");
  console.log("Prato pronto, bom apetite!!!");
}

function verificaCondicoes(tempo,tempoPadrao){
  if(tempo < tempoPadrao) console.log("Tempo insuficiente");
  else if(tempo > 3*tempoPadrao) console.log("Kabumm");
  else if(tempo > 2*tempoPadrao) console.log("A comida queimou"); 
}

microondas2(pipoca,)
