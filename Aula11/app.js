const fs = require('fs');

// Armazenei na variavel dados o conteudo do arquivo ./dados.csv;
const dados = fs.readFileSync('./dados.csv',{encoding:'utf-8'});
// Quebra de linha
const linhas = dados.split('\r\n');

linhas[2].split(',')[0];// Ramon


'Teste@123'.split('@') // ['Teste','123'];

'titular,numero,tipo,saldo'.split(',');//['titular','numero','tipo','saldo'];



for(let i = 0;i<linhas.length;i++){

  console.log('Contéudo da linha:' , linhas[i]);

  // titular,numero,tipo,saldo
  const colunas = linhas[i].split(',');
  console.table(colunas);
  
  const titular = colunas[0];
  const numero = colunas[1];
  const tipo = colunas[2];
  const saldo = colunas[3];

  console.log('Contéudo da linha: ',i,titular,numero,tipo,saldo);
}
