let readlineSync = require('../../lib/readline-sync.js');

let str = '' // -> false 
let msg = 'haha!' // -> true
let eBonito = 'false' // -> true
//console.log(!((str || msg) && eBonito))
//console.log(!undefined);
//console.log(!NaN);

// Das estruturas condicinais 

// Tamanho da senha > 6 && senha possui Letras
// Se a minha expressão for falsa, não entra no sistema
    // Se não posui letra ->  Uma mensagem
    // Se senha muito curta -> Outra mensagem 
// Se for verdadeiro então autentica usuário

let media = 8.6;

// Se a media do aluno for maior do que 7 então aluno aprovado
// Se não for então aluno reprovado
function retornaStatus(status){
  //console.log(status);
}
//if/else -> Se então e senão então  
// if -> se -> algo verdadeiro 
// else -> caso contrário -> falso 
// se media maior que 7 então executa o que estiver dentro das chaves
if(media >= 7) {
  retornaStatus("Aprovado");
} else if(media >= 5 && media < 7){
  retornaStatus("Recuperação");
} else {
  retornaStatus("Reprovado");
}  

// Tem uma particularidade de precisar de um valor de retorno
let status = media >= 7 ? 'Aprovado' : 'Reprovado'; 
console.log(status);




// Caso não seja então executa tudo dentro das chaves logo após o else

//Switch/Case 
// Trabalhar com verificações de igualdade


console.log(`

  Bem-vindo ao nosso cardápio Digital: 

  450 - X-burguer
  451 - X-egg
  452 - Hot-dog
  453 - Pizza

`);

let opcao = readlineSync.question("Escolha sua opção: ");

// Escolha uma opcão:
// Caso 450 faca alguma coisa
// Caso 451 faca outra coisa
// Caso 452 faca outra coisa
// Caso 453 faca outra coisa
// Caso nenhuma das opções -> Opção inválida

switch(opcao){
  case '450':
    console.log("Você selecionou X-Burguer");
    // Faz o encerramento do switch
    break;
  case '451':
    console.log("Você selecionou X-egg");
    break;
  case '452': 
    console.log("Você selecionou Hot-Dog");
    break;
  case '453':
    console.log("Você selecionou Pizza");
    break;
  default:
    console.log("Opção inválida");
}

if(opcao === '450'){
  console.log("Você selecionou X-Burguer");
} else if (opcao === '451'){
  console.log("Você selecionou X-egg");
} else if (opcao === '452'){
  console.log("Você selecionou Hot-Dog");
} else if (opcao === '453'){
  console.log("Você selecionou Pizza");
} else {
  console.log("Opção inválida");
}


