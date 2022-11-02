/*
  Aula 08 - Controles de Fluxo 

  if/else 
  if/else aninhado
  switch/case

  if/else ternário -> Próxima aula

*/


let media = 6.9;
let qtdFaltas = 3;
/*
  if -> se alguma coisa for verdadeira então farei algo
  else -> caso alguma coisa seja falsa então farei outra coisa
*/
//    false   &&    true

// if/else aninhado
if(media >= 7 && qtdFaltas <= 3){
  console.log("Aluno aprovado com sucesso");
} else if(media >= 5 && media < 7) {
  console.log("Aluno recuperação");
} else if(media >= 3 && media < 5) {
  console.log("Aluno reprovado com conceito regular");
} else {
  console.log("Aluno reprovado com conceito insuficiente");
}

// switch/case

