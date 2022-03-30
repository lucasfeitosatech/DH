// Laços de repetição 


// let i = 0 -> A inicialização da variavel e o ponto de partida do laço

// i < 1000 -> Critério de parada do laço de repetição

// i++ ou i+=1 ou i = i + 1 -> Passo da repetição, 
// de quanto em quanto a váriavel inicial vai ser incrementada para 
// alançar o critério de parada

// Servem para realizaer tarefas repetidas
let pares = [];
let impares = [];

// Escreva um aplicativo em Javascript que mostre todos 
// os números ímpares e pares de 1 até 100.
for(let i = 1;i < 100;i++){
  if(i % 2 == 0){
    pares.push(i);
  } else if(i % 2 == 1) {
    impares.push(i);
  }
}

// Enquanto alguma condição for verdadeira faca algo 
// Se a condição for falsa o laço de repetição não vai ser executado
// let i = 1;
// while(i <= 100){
//   if(i % 2 == 0){
//     //par
//   } else {
//     //impar
//   }
//   i++;
// }

// Faca algo enquanto a minha condição for válida pelo menos uma vez

do {
  console.log("Do while...");
} while(false);

//            0   1   2   3    4
let notas = [6.7,7.8,9.5,10.0,5.6,8.4,1.1];
let soma = 0;
let i = 0;
// i < notas.length -> Faz um laço de repetição 
//de acordo com o tamanho do array
while(i < notas.length){
  //Somar todos os elementos do array
  soma = soma + notas[i];

  i++;
}

console.log(`A media da turma é: ${soma/notas.length}`)