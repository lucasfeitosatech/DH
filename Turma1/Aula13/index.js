/* Determine qual seria a maneira ideal de 
representar cada participante com suas pontuações. */

// Participante A:  5, 8, 4, 9, 5;
// Participante B:  8, 7, 8, 6, 8;
// Participante C:  7, 5, 10, 8, 3.

const participanteA = [5, 8, 4, 9, 5]; // 31/partcipanteA.length
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

/* 2 - Crie uma função pontuacaoMedia à qual receba um participante 
por parâmetro e deve calcular e devolver a pontuação média dele. */

function pontuacaoMedia(notasParcipante){
  let soma = 0;
  for(let i = 0 ; i < notasParcipante.length ; i++ ){
    soma = soma + notasParcipante[i];
  }

  /*
    [5, 8, 4, 9, 5]

    i = 0 ; 0<5 sim -> continua ->  soma = 0 ; notasParcipante[i] = 5 -> soma = 5;
    i = 1 ; 1<5 sim -> continua -> soma = 5 ; notasParcipante[i] = 8 -> soma = 13;
    i = 2 ; ... soma = 13 ; notasParcipante[i] = 4 -> soma = 17;
    i = 3 ; soma = 17 ; notasParcipante[i] = 9 -> soma = 26;
    i = 4 ; soma = 26 ; notasParcipante[i] = 5 -> soma = 31;
    i = 5 ; 5 < 5 -> Encerra o for
 
  */
  return soma/notasParcipante.length;
}

/* 3 - Crie uma função pontuacaoMaior que receba um participante
 por parâmetro e deve calcular e 
devolver a pontuação mais alta que o participante tem. */

function pontuacaoMaior(notasParcipante){
  //  [5, 8, 4, 9, 5]
  let maior = notasParcipante[0];
  for(let i = 1;i<notasParcipante.length;i++){
    if(maior < notasParcipante[i]){
      maior = notasParcipante[i];
    }
  }

  return maior;

  // let menor = notasParcipante[0];
  // for(let i = 1;i<notasParcipante.length;i++){
  //   if(menor > notasParcipante[i]){
  //     menor = notasParcipante[i];
  //   }
  // }

  // return menor;
  /*
    [5, 8, 4, 9, 5]

    i = 0 ; maior = 5 ; notasParcipante[i] = 5 -> 5 < 5 -> não faz nada;
    i = 1 ; maior = 5 ; notasParcipante[i] = 8 -> 5 < 8 -> maior = 8;
    i = 2 ; maior = 8 ; notasParcipante[i] = 4 -> 8 < 4 -> não faz nada
    i = 3 ; maior = 8 ; notasParcipante[i] = 9 -> 8 < 9 -> maior = 9;
    i = 4 ; maior = 9 ; notasParcipante[i] = 5 -> 9 < 5 -> não faz nada;
    i = 5 ; 5 < 5 -> Encerra o for
 
  */
}


console.log(pontuacaoMaior(participanteA));
console.log(pontuacaoMaior(participanteB));
console.log(pontuacaoMaior(participanteC));




/* 4 - Logo nosso líder tecnológico nos pede para criar essas duas funções, 
geramos uma nova funcionalidade chamada competição que receberá os 
3 participantes por parâmetros, executará as 
duas funções criadas anteriormente para calcular as 
médias e pontuações mais altas de cada uma e deve anunciar 
(mostrar pelo console) o vencedor de cada modalidade de pontuação. */

function competicao(partcipanteA,participanteB,participanteC){
  const mediaA = pontuacaoMedia(partcipanteA);
  const mediaB = pontuacaoMedia(participanteB);
  const mediaC = pontuacaoMedia(participanteC);

  const maiorA = pontuacaoMaior(partcipanteA);
  const maiorB = pontuacaoMaior(participanteB);
  const maiorC = pontuacaoMaior(participanteC);

  if(mediaA > mediaB && mediaA > mediaC){
    console.log("participante A venceu na média");
  } else if (mediaB > mediaA && mediaB > mediaC){
    console.log("participante B venceu na média");
  } else {
    console.log("participante C venceu na média");
  }

  if(maiorA > maiorB && maiorA > maiorC){
    console.log("participante A venceu no e-tip");
  } else if (maiorB > maiorA && maiorB > maiorC){
    console.log("participante B venceu no e-tip");
  } else {
    console.log("participante C venceu no e-tip");
  }

}

competicao(participanteA,participanteB,participanteC);