

const {readFileSync} = require('fs');
const banco = require('../../modulos/banco/index');


const dados = readFileSync('./dados.csv',{
  encoding:'utf-8'
});
const linhas = dados.split('\r\n');
for(let linha of linhas){
  // Fulano 448,448,Conta Poupança,0
  // [ 'Fulano 1', '1', 'Conta Corrente', '0' ]
  const colunas = linha.split(',');
  const titular = colunas[0];
  const conta = colunas[1];
  const tipo = colunas[2];
  const saldo = Number(colunas[3]);
  banco.adicionarConta(titular,saldo,tipo,conta);
}


banco.deposito('100',50);
banco.deposito('100',23.56);
banco.saque('100',13.48);
banco.saque('100',100);







