
/*
2. Crie uma função pontuacao Media à
 qual receba um participante por 
 parâmetro e deve calcular e devolver a pontuação média dele.

*/

function media(array) {
  let soma = 0;
  for(let i = 0;i<array.length;i++){
    soma += array[i];
    //console.log(i);
  }
  return soma/array.length;

}

//console.log(media(c));

/*

  Crie uma função pontuacaoMaior que receba um participante 
  por parâmetro e deve calcular e 
  devolver a pontuação mais alta que o participante tem.
*/

function maior(array) {
  let maior = array[0];
  for(let i = 1;i<array.length;i++){

    if(array[i] > maior){
      maior = array[i];
    }

  }
  return maior;
}



/*
  Logo nosso líder tecnológico nos pede para criar essas duas funções 
  geramos uma nova funcionalidade chamada competição que receberá os 3 
  participantes por parâmetros, e executará as duas funções criadas 
  anteriormente para calcular as médias e pontuações mais altas de 
  cada uma, e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

*/

let a = [5, 8, 4, 9, 5];
let b = [8, 7, 8, 6, 8];
let c = [7, 5, 10, 8, 3];

function competicao(a,b,c){
  let mediaA = media(a);
  let maiorA = maior(a);

  let mediaB = media(b);
  let maiorB = maior(b);

  let mediaC = media(c);
  let maiorC = maior(c);

  if(mediaA > mediaB && mediaA > mediaC){
    console.log("Na categoria média o vencedor foi o participante A");
  } else if (mediaB > mediaA && mediaB > mediaC){
    console.log("Na categoria média o vencedor foi o participante B");
  } else if (mediaC > mediaA && mediaC > mediaB){
    console.log("Na categoria média o vencedor foi o participante C");
  } else {
    console.log("Não teve vencedor na media");
  }

  if(maiorA > maiorB && maiorA > maiorC){
    console.log("Na categoria maior o vencedor foi o participante A");
  } else if (maiorB > maiorA && maiorB > maiorC){
    console.log("Na categoria maior o vencedor foi o participante B");
  } else if (maiorC > maiorA && maiorC > maiorB){
    console.log("Na categoria maior o vencedor foi o participante C");
  } else {
    console.log("Não teve vencedor no e-tip");
  }

}

//competicao(a,a,a);

// Se a[i] > b[i], então Alice recebe 1 ponto.
// 	Se a[i] < b[i], então Bob recebe 1 ponto.
// 	Se a[i] = b[i], nenhuma pessoa recebe um ponto.







const alicia = [23, 69, 32];
const bob = [12, 67, 43];

const participante1 = {
  nome:"Lucas",
  notas:[23, 69, 32]
}

const participante2 = {
  nome:"Bob",
  notas:[12, 67, 43]
}

 
 function encontrarGanhador(participante1, participante2) {
    let pontosA = 0;
    let pontosB = 0;

    for(let i = 0; i< participante1.notas.length ; i++){
      if(participante1.notas[i] > participante2.notas[i]){
        pontosA++;
      } else if (participante2.notas[i] > participante1.notas[i]){
        pontosB++;
      }
    }

    if(pontosA > pontosB) {
      console.log(`${participante1.nome} ganhou!`);
    } else if (pontosB > pontosA){
      console.log(`${participante2.nome} ganhou`);
    } else {
      console.log("Deu empate!");
    }
 }

 encontrarGanhador(participante1,participante2);