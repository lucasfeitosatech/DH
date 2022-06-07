// Correção mesa de trabalho arrays

// 1 - Determine qual seria a maneira ideal de representar cada
// participante com suas pontuações.
//                   0  1  2  3  4
let participanteA = [5, 8, 4, 9, 5,];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

/* 2 -  Crie uma função pontuacaoMedia à qual receba 
um participante por parâmetro e deve 
calcular e devolver a pontuação média dele. */

function pontuacaoMedia(participante) {
  // 5 + 8 + 4 + 9 + 5 = 31
  // 31/5 -> 6.2
  let soma = 0;

  for (let i = 0; i < participante.length; i++) {

    const nota = participante[i];
    //soma = soma + nota;
    soma += nota;
    // [5, 8, 4, 9, 5];

    // i = 0 ; nota = 5 ; soma = 5;
    // i = 1 ; nota = 8 ; soma = 13
    // ...
    // i = 4 ; nota = 5 ; soma = 31
  }

  return soma/participante.length;
}

console.log( pontuacaoMedia(participanteA) );
console.log( pontuacaoMedia(participanteB) );
console.log( pontuacaoMedia(participanteC) );


/* Crie uma função pontuacaoMaior que receba 
um participante por parâmetro e deve calcular 
e devolver a pontuação mais alta que 
o participante tem. */

// [5, 8, 4, 9, 5,];

// maior = 5;

// 8 > 5 -> sim
// maior = 8 

// 4 > 8 -> não
// maior = 8 

// 9 > 8 -> sim
// maior = 9

// 5 > 9 -> não
// maior = 9

function pontuacaoMaior(participante){
  let maior = participante[0];
  for (let i = 1; i < participante.length; i++) {
    
    const nota = participante[i];
    
    if(nota > maior){
      maior = nota;
    }
  }

  return maior;
}

console.log( pontuacaoMaior(participanteA) );
console.log( pontuacaoMaior(participanteB) );
console.log( pontuacaoMaior(participanteC) );

/*
Logo nosso líder tecnológico nos 
pede para criar essas duas funções 
geramos uma nova funcionalidade chamada 
competição que receberá os 3 participantes 
por parâmetros, e executará as duas funções 
criadas anteriormente para calcular as médias e 
pontuações mais altas de cada uma, e deve 
anunciar (mostrar pelo console) o vencedor de
 cada modalidade de pontuação.

*/

function competicao(participanteA,participanteB,participanteC){
  let mediaA = pontuacaoMedia(participanteA); 
  let mediaB = pontuacaoMedia(participanteB);
  let mediaC = pontuacaoMedia(participanteC);

  if(mediaA > mediaB && mediaA > mediaC){
    console.log("Participante A ganhou na média");
  } else if(mediaB > mediaA && mediaB > mediaC){
    console.log("Participante B ganhou na média");
  } else {
    console.log("Participante C ganhou na média");
  }


  let maiorA = pontuacaoMaior(participanteA); 
  let maiorB = pontuacaoMaior(participanteB); 
  let maiorC = pontuacaoMaior(participanteC); 

  if(maiorA > maiorB && maiorA > maiorC){
    console.log("Participante A ganhou no e-tip");
  } else if(maiorB > maiorA && maiorB > maiorC){
    console.log("Participante B ganhou no e-tip");
  } else {
    console.log("Participante C ganhou no e-tip");
  }
}

competicao(participanteA,participanteB,participanteC)

