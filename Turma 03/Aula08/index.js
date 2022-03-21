// Aula 08 - Estruturas de decisão

// let media = 8;

// if/Se algo for verdadeiro então vou fazer alguma coisa
// else Caso algo for falso (Caso contrário do if) então vou fazer outra coisa
//if/else

// if(media >= 5 && media < 7){
//   console.log("Aluno está de recuperação");
// } else if(media >= 7) {
//   console.log("Aluno aprovado com media maior que 7");
// } else if(media < 5) {
//   console.log("Aluno reprovado")
// } else {
//   console.log("Não foi possível definir o status")
// }

// // if ternário - Possui a mesa lógica do if/else com uma notação diferente
// // e pode retornar algum valor para alguma váriavel
// // ? -> se for verdadeiro então retorna o valor que vem a seguir
// // : -> caso a condição seja falsa então retorna o valor que vem a seguir
// let status2;

// let status3 = media >= 7 ? "Aprovado"
// : media >= 5 && media < 7 ? "Recuperação"
// : media >= 3 && media < 5 ? "Outro status"
// : "Reprovado";

// // console.log(status3);

// let status4 = false;

// if(status4) {
//   console.log("O Valor é verdadeiro");
// }

// if(!status4){
//   console.log("O Valor é falso");
// }

// let linguagem = "Javascript";

// if(linguagem == "Javascript"){
//   console.log("Estou aprendendo");
// } else {
//   console.log("Aprenderei a linguagem " + linguagem + " mais tarde")
// }

console.log(`

  Bem-vindo a padaria Zappa's 

  Segue abaixo nosso menu:

  511 - Sala Mista
  24222 - Salada Simples
  ...


  ...
  1001 - Misto na Chapa

`);

// Poderia ser um dado fornecido pelo usuário
let opcao = 1;

// Escolha alguma coisa e para cada caso faca alguma coisa
switch (opcao) {
  case 511:
    console.log("Você escolheu Salada Mista");
    break;
  case 24222:
    console.log("Você escolheu Salada Simples");
    break;
  case 902:
    console.log("Você escolheu Ovo");
    break;
  case 903:
    console.log("Você escolheu Bacon");
    break;
  case 1001:
    console.log("Você escolheu Misto na chapa");
    break;
  default:
    console.log("Prato Inexistente");
}

function solicitarPedido(opcao){

}

if(opcao == 511){

} else if(opcao == 1001){

}
