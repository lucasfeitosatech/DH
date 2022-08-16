/*
  Estruturas de decisão e controle de fluxo. 
  - truhty e falshy
  - if/else 
  - if/else aninhado 
  - switch case
  - ternário
*/

let minhaVariavel = true; // true ou false 
let meuNumero = 0  // false 
let meuNumero2 = 5.5 // true
let meuTexto = '' // false
let meuTexto2 = 'alguma coisa' // true

// se a variavel meu texto não estiver vazia então faca alguma coisa
/*
  if/else
    - Servir para controlar o fluxo da aplicaçao e para tomada de decisões 
    if -> true
    else -> caso contrário -> false 

*/

let media = 6.9999999999999;
let frequencia = 90;

// Se a media do aluno for maior ou igual do que 7 então aluno aprovado 
// Caso contrário a média seja menor então aluno reprovado
if(media >= 7 || (media >= 6.8 && frequencia >= 90)){
  console.log('Aluno aprovado');
} else if(media >= 5 && media < 7) {
  console.log('Aluno de recuperação');
} else if(media >= 3 && media < 5) {
  console.log('Aluno reprovado');
}


if(false) {
  console.log()
}

if(meuTexto !== ''){
  // true
  console.log("A string não é vazia");
} else {
  // flase
  console.log("A string é vazia");
}


/*
  switch case
  Escolha uma opcao dentro várias 
*/

