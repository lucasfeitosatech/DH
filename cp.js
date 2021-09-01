/* 

GRUPO 4

Nomes: Mauro Lucio Marques, 
Veronica Rizzi, 
Bruno Batista, 
Ana Carolina Ribeiro, 
Fernanda Brum,
 Marcelo Nascimento

https://github.com/VevaRizzi/ckeckpointProgramacaoImperativa/blob/master/menuMicroondas.js

Solução muito boa e bem estruturada! Parabéns pela ideia da função

*/

/* 

  EQUIPE:
  Alexandre Filho
  Joel Jerrys
  Henrrique Brumatti
  Renato Caldara
  Glaydson
  Alcinelson
  https://github.com/Alexandrehos/checkpoint2/blob/main/microondas.js

  else if(tempoInserido >= tempoPadrao){
        console.log("Prato pronto, bom apetite!!!")
    }

  Esse if deveria estar, pois independete do tempo o prato vai ficar pronto e o log deve ser exibido.


*/


/*
Grupo 3
Integrantes:
    - Gabriel Bernardo
    - Wagner Moreira
    - Jonatas Zamperi
    - José Neto
    - Vinícius Serra

    https://github.com/gabrielbssantos/ctd-programacao-imperativa-aula-9/blob/main/menu-microondas.js

    Código ficou muito repetido nos cases, dado que as condições são as mesmas independente do alimento para a queima e kabum, poderia ter sido criada uma funcao ou utilizar variaveis para buscar o tempoPadrao e realizar as condicoes apos a escolha do alimento.

*/



/*
Grupo: 05
Integrantes: Belicio Cardoso, Marcio Silva, Fabio Augusto, Amanda Jesus, Lucas Bernardo e Felipe Cabuto
https://github.com/felipecabuto/ProgImp-Checkpoint1/blob/main/ProgImp-Checkpoint1.js

else {
        console.log("Prato pronto, bom apetite")
    }


   Esse if deveria estar, pois independete do tempo o prato vai ficar pronto e o log deve ser exibido.

*/


/*
//Room 8 - Cleiton ; Flavio; Willian; Rafael; Aderson
https://github.com/CBernsmuller/CTD---Programa-o-Imperativa-Turma-01-NT/blob/master/aula%2009%20-%2025-08/microondas.js

Faltou criar uma função conforme solicitado e as condições ficaram muito repetidas, poderia ter sido criado uma variável tempoPadrao e fazer as validações de acordo com essa variável.

*/


/*
## GRUPO 7 ##
INTEGRANTES:
> DAVI DUTRA
> FELIPE ROCHA
> FERNANDA LIMA
> HARRY MÖBBS JÚNIOR
> VINICIUS MACHADO RODRIGUES
Endereço do git: https://github.com/harrymobbsjunior/Checkpoint.git

else if (tempo >= padrao && tempo < (padrao * 2)) {
        return "Prato pronto, bom apetite!!!";
    }

    Esse if deveria estar, pois independete do tempo o prato vai ficar pronto e o log deve ser exibido.

*/

/*
Nome: Gustavo Henrique Muraro Monteiro

Grupo 2: Julio Campos, Peterson Alves, Ronan Junqueira, David Franklin, Luis Soares, Israel

Código ficou muito repetido nos cases, dado que as condições são as mesmas independente do alimento para a queima e kabum, poderia ter sido criada uma funcao ou utilizar variaveis para buscar o tempoPadrao e realizar as condicoes apos a escolha do alimento.

*/

/*

// Turma: 01 NT
// Integrantes: Alisson Pinho, Hiego Willy, Jhonathan Weber, Patricia Kushima, Yasmin Lorraine.

https://drive.google.com/file/d/1veS-7eXSMIVvgo7LObU2wLPs3uyEM-vs/view

Código ficou muito repetido nos cases, dado que as condições são as mesmas independente do alimento para a queima e kabum, poderia ter sido criada uma funcao ou utilizar variaveis para buscar o tempoPadrao e realizar as condicoes apos a escolha do alimento.
*/


function tempo(tempoTotal,tempoPadrao) {

  // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
 // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
 // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;

 if(tempoTotal > 2*tempoPadrao && tempoTotal<3*tempoPadrao){
   console.log("Comida queimou!");
 } else if (tempoTotal < tempoPadrao){
   console.log("Tempo insuficiente");
 } else if(tempoTotal > 3*tempoPadrao) {
   console.log("Kabummm");
 }
}

function microondas(prato, tempoTotal) {
  let tempoPadrao = 0;

  switch (prato) {
    case 1:
      tempoPadrao = 10;
      console.log("pipoca");
      break;
    case 2:
      tempoPadrao = 8;
      console.log("macarrao");
      break;
    case 3:
      tempoPadrao = 15
      console.log("carne");
      break;
    case 4:
      tempoPadrao = 12
      console.log("feijao");
      break;
    case 5:
      tempoPadrao = 8
      console.log("brigadeiro");
      break;
    default:
      console.log("Prato inexistente");
  }

  tempo(tempoTotal,tempoPadrao);


  

  // if(prato == 1){

  // } else if(prato == 2){

  // } else if(prato == 3 ){
    
  // }else if(prato == 4){
    
  // }else if(prato == 5){
    
  // } else {


  // }

  console.log("Prato pronto! Bom apetite!");

}



microondas(1,10);


