const readlineSync = require('readline-sync');

console.log(`
  Bem-vindo ao X-podrão 

  Escolhe uma dentre as opções

  01 - X-Bancon
  02 - X-Salada
  03 - X-Egg

`);

const opcao = readlineSync.question('Escolha a sua opção: ');
console.log('\n\n');

// Escolha uma opção dentre várias 
// caso seja a opçao 01 faca algo
// caso seja a opcao 02 faca algo
// ...
// ...
// caso nao seja nenhuma das opcoes faca algo 
switch(opcao) {
  case '01':
    console.log("X-bancon selecionado");
    // break -> encerrando o caso 
    break;
  case '02':
    console.log("X-salada selecionado");
    break;
  case '03':
    console.log("X-egg selecionado"); 
    break;
  // Caso contrário dos cases acima
  default:
    console.log('Opção inválida');
}

if(opcao === '01' || opcao === 1){
  console.log("X-bancon selecionado");
} else if (opcao === '02' || opcao === 2){
  console.log("X-salada selecionado");
} else if (opcao === '03' || opcao === 3){
  console.log("X-egg selecionado"); 
} else {
  console.log('Opção inválida');
}

