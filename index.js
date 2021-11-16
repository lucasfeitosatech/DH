function microondas(prato, tempo){

  // produtos 

  let nomePipoca = "Pipoca"
  let nomeMacarrao = "Macarrão";
  let nomeCarne = "Carne";
  let nomeFeijao = "Feijão";
  let nomeBrigadeiro = "Brigadeiro";

  // tempos 

  let oitoSegundos = 8;
  let dezSegundos = 10;
  let dozeSegundos = 12;
  let quinzeSegundos = 15;
  let duplicarSegundos = x * 2;
  let triplicarSegundos = x * 3;

  // prato = produto + tempo padrão 

  let pipoca = nomePipoca + dezSegundos;
  let macarrao = nomeMacarrao + oitoSegundos;
  let carne = nomeCarne + quinzeSegundos;
  let feijao = nomeFeijao + oitoSegundos;
  let brigadeiro = nomeBrigadeiro + dozeSegundos;


  //execução pelo cliente 

  if(pipoca){
      console.log("Prato pronto, bom apetite!!!");
  } else if (pipoca && duplicar){
      console.log("A Comida Queimou");
  } else if (pipoca && triplicarSegundos){
      console.log("kabuummm")
  } else if (!pipoca){ 
      console.log("Tempo Insuficiente");
  }

  if(macarrao){
      console.log("Prato pronto, bom apetite!!!");
  } else if (macarrao && duplicarSegundos){
      console.log("A Comida Queimou");
  } else if (macarrao && triplicarSegundos){
      console.log("kabuummm")
  } else if (!macarrao){ 
      console.log("Tempo Insuficiente");
  }

  if(carne){
      console.log("Prato pronto, bom apetite!!!");
  } else if (carne && duplicarSegundos){
      console.log("A Comida Queimou");
  } else if (carne && triplicarSegundos){
      console.log("kabuummm")
  } else if (!carne){ 
      console.log("Tempo Insuficiente");
  }
  
  if(feijao){
      console.log("Prato pronto, bom apetite!!!");
  } else if (feijao && duplicarSegundos){
      console.log("A Comida Queimou");
  } else if (feijao && triplicarSegundos){
      console.log("kabuummm")
  } else if (!feijao){ 
      console.log("Tempo Insuficiente");
  }

  if(brigadeiro){
      console.log("Prato pronto, bom apetite!!!");
  } else if (brigadeiro && duplicarSegundos){
      console.log("A Comida Queimou");
  } else if (brigadeiro && triplicarSegundos){
      console.log("kabuummm")
  } else if (!brigadeiro){ 
      console.log("Tempo Insuficiente");
  }

  if(""){
      console.log("Prato Inexistente")
  }
  console.log(microondas(pipoca))
}