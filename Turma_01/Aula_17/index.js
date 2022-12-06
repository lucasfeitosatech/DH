// 1- Array de objetos
// csv -> comma separated values -> Valores separados por vírgula

// 2 - 
// const conta = {
//   titular:'Lucas',
//   saldo:100,
//   tipo:'poupanca',
//   numero:1234,
// }

// function Conta(titular,saldo,tipo,numero){
//   // ...
// }

const readlineSync = require('readline-sync');
// Importação de dados
const fs = require('fs');


/*
  Módulos Externos (Desenvolvidos pela comunidade) -> readline-sync
  Módulos nativos do node -> File System (fs) -> Permite manipular escrita e leitura de arquivos
  Módulos proprios -> Módulos que podemos criar 

*/

class Conta {
  constructor(titular,saldo,tipo,conta){
    // ... this = {}
    // this é a referência do objeto que vai ser criado
    this.titular = titular;
    this.saldo = saldo;
    this.tipo = tipo;
    this.conta = conta;
  }
}

const banco = {
  clientes:[],
  adicionarConta(titular,saldo,tipo,conta){
    const novaConta = new Conta(titular,saldo,tipo,conta);
    this.clientes.push(novaConta);
  },
  consultarCliente(contaAConsultar){
    for(let cliente of this.clientes){
      if(cliente.conta === contaAConsultar){
        return cliente;
      }
    }
    // undefined
  },
  deposito(contaDeposito,valorDeposito){
    const clienteDeposito = this.consultarCliente(contaDeposito);
    // Se temos um cliente com a conta informada
    if(clienteDeposito){
      // Pega o que já tem em saldo e adiciona o valorDeposito
      clienteDeposito.saldo += valorDeposito;
      console.log("Depósito realizado com sucesso, seu novo saldo é: R$ " + clienteDeposito.saldo);
    } else {
      console.log("Falha no depósito! Conta não encontrada.");
    }
  },
  saque(contaSaque,valorSaque){
    const clienteSaque = this.consultarCliente(contaSaque);
    // Se temos um cliente com a conta informada
    if(clienteSaque){
      // Pega o que já tem em saldo e adiciona o valorDeposito
      if(valorSaque <= clienteSaque.saldo){
        clienteSaque.saldo -= valorSaque;
        console.log("Extração feita com sucesso, seu novo saldo é: R$ " + clienteSaque.saldo);
      } else {
        console.log("Falha no saque! Fundos insuficientes");
      }
    } else {
      console.log("Falha no saque! Conta não encontrada.");
    }
  }
}
// let str = 'teste@teste2@teste3';
// console.log(str.split('@'));
const dados = fs.readFileSync('./dados.csv',{
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

// for(let i = 0;i<linhas.length;i++){
//   const linha = linhas[i];
// }




//console.log(banco.clientes);

//     0(Titular) 1(Conta) 2(Tipo)       3(Saldo)
// [ 'Fulano 1', '1', 'Conta Corrente', '0' ]

banco.deposito('100',50);
banco.deposito('100',23.56);
banco.saque('100',13.48);
banco.saque('100',100);





