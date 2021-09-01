/*

Olá, você foi contratado para executar este projeto. 
É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
  Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


*/

function microondas(comida,tempo){

  let tempoPadrao = 0;

  switch(comida){
    case 1:
      console.log("pipoca");
      tempoPadrao = 10;
      break;
    case 2:
      tempoPadrao = 8;
      console.log("macarrao");
    break;
    case 3:
      tempoPadrao = 15;
      console.log("carne");
      break;
    case 4:
      tempoPadrao = 12;
      console.log("feijao");
    break;
    case 5:
      tempoPadrao = 8;
      console.log("brigadeiro");
    break;
    default:
      console.log("Prato inexistente");
      return;
  }


  verificaTempo(tempo,tempoPadrao);


  console.log("Prato pronto!! Bom apetite!!");

  // if(comida === 1){

  // } else if(comida === 2){

  // } else if(comida === 3){
    
  // }else if(comida === 4){
    
  // }else if(comida === 5){
    
  // } else {
  //   console.log("Prato inexistente");
  // }

}

function verificaTempo(tempo,tempoPadrao){
  // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
  // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
  // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
  if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
    console.log("A comida queimou!");
  } else if (tempo < tempoPadrao){
    console.log("Tempo insuficiente");
  } else if(tempo > 3*tempoPadrao){
    console.log("Kabuuuuum");
  }
}
microondas(20,8);
