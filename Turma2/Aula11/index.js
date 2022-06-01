//Importando readlineSync
let readlineSync = require("readline-sync");

//Definando pontuacoes e a mina
let campoMinado = [
  [0, 1, 1, 0],
  [0, 3, 3, 0],
  [1, -1, 1, 0],
  [3, 0, 2, 0],
];

// Tabuleiro fechado no inicio do jogo
let jogo = [
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
  ["*", "*", "*", "*"],
];

//Iniciando o jogo com a pontuacao zerada
let pontuacao = 0;

// Função para mostrar o tabuleira na tela
function desenhar() {
  console.log(`\nPontuacao atual: ${pontuacao} \n`);
  console.table(jogo);
}



desenhar();
while (true) {
  let linha = readlineSync.questionInt("Digite a linha: ");
  if(linha < 0 || linha > 3 ){
    console.log('Linha inválida');
    continue;
  } 
  let coluna = readlineSync.questionInt("Digite a coluna: ");
  if(coluna < 0 || coluna > 3 ) {
    console.log('Coluna inválida');
    continue;
  }

  if (campoMinado[linha][coluna] === -1) {
    console.log("Game Over!");
    console.log(`\nPontuacao Total: ${pontuacao} \n`);
    break;
  } else {
    if (jogo[linha][coluna] === "*") {
      pontuacao += campoMinado[linha][coluna];
      jogo[linha][coluna] = campoMinado[linha][coluna];
    } else {
      console.log(`Posição já selecionada! Tente novamente! `);
    }
    desenhar();
  }
}


