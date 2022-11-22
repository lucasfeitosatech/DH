/*
  Aula 13

  Correção CP
  Exercícios de Estruturas de repetição
*/

/* 
Precisamos desenvolver um menu para um microondas super veloz, 
onde teremos 5 opções de comida com seus respectivos tempos pré-definidos.

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão);

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function microondas(tempo, opcao) {
  // switch case
  let tempoPadrao = 0;
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
      return;
  }

  if(tempo< tempoPadrao){
    console.log("tempo insuficiente");
  } else if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
    console.log("comida queimou");
  } else if(tempo > 3*tempoPadrao) {
    console.log("kabumm");
  }

  console.log("Prato pronto, bom apetite!!!");
}

function microondas2(tempo, opcao) {
  let tempoPadrao = 0;
  
  if(opcao == 1  || opcao === 'pipoca'){
    tempoPadrao = 10;
  } else if(opcao == 2 || opcao === 'macarrao' || opcao == 5  || opcao === 'brigadeiro'){
    tempoPadrao = 8;
  }else if(opcao == 3  || opcao === 'carne'){
    tempoPadrao = 15;
  }else if(opcao == 4  || opcao === 'feijao'){
    tempoPadrao = 12;
  } else {
    console.log("Prato inexistente");
    return;
  }

  if(tempo< tempoPadrao){
    console.log("tempo insuficiente");
  } else if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
    console.log("comida queimou");
  } else if(tempo > 3*tempoPadrao) {
    console.log("kabumm");
  }

  console.log("Prato pronto, bom apetite!!!");
}


function microondas3(tempo,opcao){
  let tempoPadrao = opcao === 1 ? 10
  : opcao === 2 ? 8
  : opcao === 3 ? 15
  : opcao === 4 ? 12
  : opcao === 5 ? 8
  : -1
  
  if(tempoPadrao == -1){
    console.log("Prato inexistente");
    return;
  }

  if(tempo< tempoPadrao){
    console.log("tempo insuficiente");
  } else if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
    console.log("comida queimou");
  } else if(tempo > 3*tempoPadrao) {
    console.log("kabumm");
  }
}


// function microondas3(tempo, opcao) {
//   console.log("Prato pronto, bom apetite!!!");

//   const media = 6.5
//   let status = '';
//   if(media > 7){
//     // vai ser sempre o verdadeiro
//     status = 'Aprovado';
//   } else {
//     // vai ser sempre o falso
//     status = 'Reprovado';
//   }

//   status = media > 7 ? 'Aprovado' 
//   : media >7 & media < 9 ? 'Recuperação' 
//   : 'Reprovado'




//   // if Ternário -> Nos permite dar valores condicionais a variáveis de forma direta
//   // condição ? valor_verdadeiro : valor_falso
// }

microondas(10,6);

const participanteA =  [5, 8, 4, 9, 5]
const participanteB =  [8, 7, 8, 6, 8]
const participanteC =  [7, 5, 10, 8, 3]

// Melhor média (a maior pontuação média entre os concorrentes)

(5 + 8 + 4 + 9 + 5)/5  // Média

const soma = (participanteA[0] + participanteA[1] + participanteA[2] + participanteA[3] + participanteA[4])
const media = soma/participanteA.length;

function media(array){
  let soma = 0;
  // Estrutua de repetição

  return media;
}

function maior(array){
  return maiorElemento;
}
// Maior e-tip(a maior pontuação entre as 5 notas de cada participante)



