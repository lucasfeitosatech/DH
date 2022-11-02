/*
  Aula 08 -> Controles de Fluxo

  if/else 
  if/else aninhado
  switch case 
  if/else ternário
*/

let media = 6.9;
let qtdFaltas = 3;
// Aprovado
// if -> Caso algo seja verdadeira então faça alguma coisa
// else -> Caso contrário faça alguma outra coisa
//        ver
if (media >= 7 && qtdFaltas <= 3) {
  // Esse bloco de código vai executar apenas quando a condição for verdadeir
  console.log("Aluno aprovado");
} else if (media >= 5 && media < 7) {
  console.log("Aluno recuperação");
} else {
  console.log("Aluno reprovado");
}

/*
  Fluxo Aprovação
  Fluxo Reprovação
    



    
  Fluxo Recuperação
*/

/*

  switch case -> Escolha alguma coisa

  trabalha apenas com o operador de igualdade

  caso seja x -> faça alguma coisa

  caso seja y -> faça alguma outra coisa

  caso não seja nenhuma das opções acima, faça alguma outra coisa

*/



