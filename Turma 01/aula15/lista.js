// 1

let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"];

function converterMaiusculas(array) {
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    // i = 0; array[i] -> star wars = STAR WARS
    // i = 1; array[i] -> totoro = TOTORO
    //..
    // i = 4 ; array[i] -> a vida é bela = A VIDA É BELA

    array[i] = array[i].toUpperCase();
  }
  return array;
}

function passagemDeElementos(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i].toUpperCase());
  }
  array1.pop();
  return array1;
}

let filmesAnimados = [
  "Rei leão",
  "Bob esponja",
  "Frozen",
  "Naruto",
  "Fortnite",
];
let filmesMaiusculo = converterMaiusculas(filmes);

// console.log(passagemDeElementos([],filmesAnimados));

let participanteA = [5, 8, 4, 9, 5]; // media = 6.2 , e-tip = 9
let participanteB = [8, 7, 8, 6, 8]; // media = 7.4 , e-tip = 8 -> Vencedor por média
let participanteC = [7, 5, 10, 8, 3]; // media = 6.6 , e-tip = 10 -> Vencedor por e-tip

// Crie uma função pontuacaoMedia à qual
// receba um participante por parâmetro e
// deve calcular e devolver a pontuação média dele.

function pontuacaoMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    // i = 0 -> notas[i] = 5  -> soma = 0 + 5 = 5
    // i = 1 -> notas[i] = 8 -> soma = 5 + 8 = 13
    // i = 2 -> notas[i] = 4 -> soma = 13 + 4 = 17
    soma = soma + notas[i];
    // Reatribui e adiciona n
    // soma += notas[i]
  }
  return soma / notas.length;
}

console.log(pontuacaoMedia(participanteA));
console.log(pontuacaoMedia(participanteB));
console.log(pontuacaoMedia(participanteC));

// Crie uma função pontuacaoMaior que receba um
// participante por parâmetro e deve calcular e
//  devolver a pontuação mais alta que o participante tem.

function pontuacaoMaior(notas) {
  let maiorNota = notas[0];
  let menorNota = notas[0];
  for (let i = 1; i < notas.length; i++) {
    // [ 5, 8, 4, 9, 5];
    // i = 1; notas[i] = 8 ; 8 > 5 -> sim -> maiorNota = 8;
    // i = 2; notas[i] = 4 ; 4 > 8 -> nao -> maiorNota = 8;
    // i = 3; notas[i] = 9 ; 9 > 8 -> sim -> maiorNota = 9;
    // i = 4; notas[i] = 5 ; 5 > 9 -> nao -> maiorNota = 9;
    if (notas[i] > maiorNota) {
      maiorNota = notas[i];
    }

    if (notas[i] < menorNota) {
      menorNota = notas[i];
    }
  }

  return maiorNota;
}

// [ 5, 8, 4, 9, 5];
console.log(pontuacaoMaior(participanteA));
console.log(pontuacaoMaior(participanteB));
console.log(pontuacaoMaior(participanteC));

function competicao(participanteA, participanteB, participanteC) {
  const mediaA = pontuacaoMedia(participanteA);
  const mediaB = pontuacaoMedia(participanteB);
  const mediaC = pontuacaoMedia(participanteC);

  const maiorA = pontuacaoMaior(participanteA);
  const maiorB = pontuacaoMaior(participanteB);
  const maiorC = pontuacaoMaior(participanteC);

  if (mediaA > mediaB && mediaA > mediaC) {
    console.log("Participante A foi o vencedor na média");
  } else if (mediaB > mediaA && mediaB > mediaC) {
    console.log("Participante B foi o vencedor na média");
  } else if (mediaC > mediaA && mediaC > mediaB) {
    console.log("Participante C foi o vencedor na média");
  }

  if (maiorA > maiorB && maiorA > maiorC) {
    console.log("Participante A foi o vencedor no maior");
  } else if (maiorB > maiorA && maiorB > maiorC) {
    console.log("Participante B foi o vencedor no maior");
  } else if (maiorC > maiorA && maiorC > maiorB) {
    console.log("Participante C foi o vencedor no maior");
  }
}

competicao(participanteA, participanteB, participanteC);


