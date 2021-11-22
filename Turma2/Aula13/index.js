//1 - Determine qual seria a maneira ideal de 
//representar cada participante com suas pontuações. R: Utilizando Arrays

const participanteA = [5, 8, 4, 5, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

/* 2 - Crie uma função pontuacaoMedia à qual receba um participante 
por parâmetro e deve calcular e devolver a pontuação média dele. */

function pontuacaoMedia(notasParticipante) {
  let soma = 0;  
  for(let i = 0 ; i < notasParticipante.length;i++){
    soma = soma + notasParticipante[i];
  }
  console.log("Soma: " + soma + " Média: " + soma/notasParticipante.length );
  //1 - soma = 0 ; notasParcipante[i] = 5 -> soma = 5;
  //2 - soma = 5 ; notasParcipante[i] = 8 -> soma = 13;
  //3 - soma = 13 ; notasParcipante[i] = 4 -> soma = 17;
  //4 - soma = 17 ; notasParcipante[i] = 9 -> soma = 26;
  //5 - soma = 26 ; notasParcipante[i] = 5 -> soma = 31;
  return soma/notasParticipante.length;
}




/* 3 - Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve 
calcular e devolver a pontuação mais alta que o participante tem. */

function pontuacaoMaior(notasParticipante){
  let maior = notasParticipante[0];
  for(let i = 1;i<notasParticipante.length;i++){
     if(maior < notasParticipante[i]){
       maior = notasParticipante[i];
     }
    //  maior = maior < notasParticipante[i] ? notasParticipante[i] : maior;
  }

  //[5, 8, 4, 9, 5];
  //1 - maior = 5; notasParticipante[i] = 8 -> 5 < 8 => maior = 8
  //2 - maior = 8; notasParticipante[i] = 4 -> 8 < 4 => maior = 8
  //3 - maior = 8; notasParticipante[i] = 9 -> 8 < 9 => maior = 9
  //4 - maior = 9; notasParticipante[i] = 5 -> 9 < 5 => maior = 9

  return maior;

}

function competicao(participanteA,participanteB,participanteC){
  //Vencedor por maior média
  const mediaA = pontuacaoMedia(participanteA);
  const mediaB = pontuacaoMedia(participanteB);
  const mediaC = pontuacaoMedia(participanteC);

  if(mediaA > mediaB && mediaA > mediaC){
    console.log("Participante A vencedor por melhor média");
  } else if(mediaB > mediaA && mediaB > mediaC){
    console.log("Participante B vencedor por melhor média");
  } else if(mediaC > mediaA && mediaC > mediaB){
    console.log("Participante A vencedor por melhor média");
  }

  const maiorA = pontuacaoMaior(participanteA); 
  const maiorB = pontuacaoMaior(participanteB);
  const maiorC = pontuacaoMaior(participanteC);

  if(maiorA > maiorB && maiorA > maiorC){
    console.log("Participante A vencedor por melhor e-tip");
  } else if (maiorB > maiorA && maiorB > maiorC){
    console.log("Participante B vencedor por melhor e-tip");
  } else if (maiorC > maiorA && maiorC > maiorB){
    console.log("Participante C vencedor por melhor e-tip");
  }

}

competicao(participanteA,participanteB,participanteC);

