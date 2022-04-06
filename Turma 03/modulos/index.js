// Módulos externos ou Módulos da comunidade 

let readlineSync = require('readline-sync');

console.log(`

  Bem-vindo ao menu:

  1-Pipoca
  2-Brigadeiro
  3-Carne
  4-Feijão
  5-Frango


`)


function microondas(opcao,tempo){
  console.log(`
    Você selecionou a opção ${opcao}

    aguarde por ${tempo} segundos... 
  `)

  console.log(`
    Seu prato está pronto!!!! 
  `)
}
while(true){
  let opcao = readlineSync.question('Qual sua a opção: ');
  let tempo = readlineSync.question('Qual o tempo de execução: ');
  microondas(opcao,tempo);
}

