/*
  Aula 08 -> 

  Arrow Functions 

  Controle de fluxo -> Tomada de decisão

  if/else 
  switch case
  ternário 
*/

// true    false
// Analisaremos se o aluno foi aprovado ou reprovado baseado na sua nota

// nota >= 7 // 'aprovado'
// nota < 7 // 'reprovado'

/*
  Se a nota do aluno for maior ou igual a 7 então aluno aprovado
  caso contrário aluno reprovado

  if / else 

  if -> se -> caso verdadeiro

  else -> contrário -> falso

*/
// Caso isso seja true (verdadeiro) vou executar o que estiver dentro das chaves

const senha = "123456";

// if (senha.length > 15) {
//   console.log("Senha válida");
// } else {
//   console.log("Sua senha deve ter pelo menos 15 caracteres");
// }

const nota = 6.8;

// Aninhamento de if/else

// if (nota >= 7) {
//   console.log("Aluno está aprovado");
// } else if (nota >= 5 && nota < 7) {
//   console.log("Aluno está recuperação");
// } else if (nota >= 3 && nota < 5) { 
//   console.log("Aluno alguma coisa...");
// } else {
//   console.log("Aluno está reprovado");
// }



// if (nota >= 5 && nota < 7) {
//   console.log("Aluno está recuperação");
// } else {
//   if (nota >= 3 && nota < 5) {
//     console.log("Aluno alguma coisa...");
//   } else {
//     if (nota >= 1 && nota < 3) {
//     } else {
//       console.log("Aluno está reprovado");
//     }
//   }
// }''


/*
  Switch case 

  Escolha uma opção dentre as demais do cardápio

  caso seja opcao 01 escolhe x-burguer

  caso seja opcao 02 escolhe x-salada

  caso seja opcao n faco outra coisa

  caso não seja nenhuma das opcoes acima posso ou nao fazer algo
*/

/*
  se opcao for igual a 01 -> escolhe x-burguer

  caso contrário a opcao for igual a 02 -> escolhe x-salada

  caso contrário não seja nenhuma das opcoes acima posso ou nao fazer algo

*/

const opcao = '01';

switch(opcao){
  case '01':
    console.log("X-burguer");
    break; // break -> Parada -> Encerra -> Quebra o switch
  case '02':
    console.log("X-Salada");
    break;
  case '06':
    console.log("X-tudo");
    break;
  default: 
    console.log("Opção inválida");
}


function microondas(tempo,opcao){
  /*
  Identificar qual a opção escolhida e 
  qual o tempo padrão de preparo deste alimento

  comparar o tempo padrão de cada alimento com o tempo informado 
  */
}

microondas(32,1)