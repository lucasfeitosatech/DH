//Módulo criado
let banco = require("../banco.js");
//Módulo nativo;
let fs = require("fs");
//Módulo de Terceiros
let readlineSync = require('readline-sync');
 
// Wait for user's response.
// let nome = readlineSync.question('Qual o seu nome? ');


// fs.appendFile('nome.txt', 'Oi ' + nome + '!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

const data = fs.readFileSync('./data.csv',
            {encoding:'utf8', flag:'r'});
let linhas = data.split('\n');

for(let i = 0;i<linhas.length;i++){
  let linha = linhas[i].split(",");
  const numero = linha[0];
  const tipo = linha[1];
  const saldo = linha[2];
  const titular = linha[3];

  console.log(`Numero: ${numero} Tipo: ${tipo} Saldo: ${saldo} Titular:${titular} `);
  
  
}
// console.log(linhas);

// banco.banco.consultarCliente("Lucas Feitosa");