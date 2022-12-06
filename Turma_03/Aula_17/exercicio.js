const fs = require('fs'); // Modulo interno do NodeJS

/*
  Módulos Interno  -> File System
  Módulos Externos (Desenvolvidos pela comunidade) -> readline-sync
  Módulos proprios 

  Quebra de linha nas linguagens de programação
  \n -> Indica uma quebra de linha
*/
// class Conta {
//   constructor(conta, tipo, saldo, titular) {
//     this.conta = conta;
//     this.tipo = tipo;
//     this.saldo = saldo;
//     this.titular = titular;
//   }

//   // metódos...
// }

function Conta(conta, tipo, saldo, titular){
  // this -> {}
  this.conta = conta;
  this.tipo = tipo;
  this.saldo = saldo;
  this.titular = titular;
}
/* 
5 - Também nos pedem a criação de um objeto literal chamado banco que 
terá uma propriedade chamada clientes, 
ele será composto pela lista de objetos gerados no ponto anterior. */

const banco = {
  clientes: [],
  adicionarCliente(conta, tipo, saldo, titular) {
    // Forma literal
    const novaConta = {
      conta, tipo, saldo, titular
    }
    //const novaConta = new Conta(conta,tipo,saldo,titular);
    this.clientes.push(novaConta);
  },
  consultarCliente(contaABuscar) {

    banco.clientes
    // this -> É o proprio objeto que estamos trabalhando/manipulando


    for (let cliente of this.clientes) {
      if (contaABuscar === cliente.conta) {
        return cliente
      }
    }

    // for(let i = 0;i < this.clientes.length;i++){
    //   const cliente = this.clientes[i];
    //   if(contaABuscar === cliente.conta){
    //     return cliente
    //   }
    // }

  },
  deposito(contaDeposito, valorASerDepositado) {
    // Verifica se existe uma conta na lista de clientes
    const contaBuscada = this.consultarCliente(contaDeposito);
    // Caso a conta exista 
    if (contaBuscada) {
      // Adiciona o valor no saldo;
      console.log('Conta encontrada com sucesso. Iniciando depósito para o titular: ' + contaBuscada.titular);
      contaBuscada.saldo += valorASerDepositado;
      console.log('Depósito realizado, seu novo saldo é: R$ ' + contaBuscada.saldo);
    } else {
      console.log("Conta não encontrada! Depósito cancelado");
    }
  },
  saque(contaSaque, valorSaque) {
    const contaBuscada = this.consultarCliente(contaSaque);
    // Caso a conta exista 
    if (contaBuscada) {
      // Adiciona o valor no saldo;
      console.log('Conta encontrada com sucesso. Iniciando saque para o titular: ' + contaBuscada.titular);
      if (valorSaque <= contaBuscada.saldo) {
        contaBuscada.saldo -= valorSaque;
        console.log("Extração feita com sucesso, seu novo saldo é: R$ " + contaBuscada.saldo);
      } else {
        console.log("Fundos insuficientes");
      }
    } else {
      console.log("Conta não encontrada! Depósito cancelado");
    }
  }
}



const meusDados = fs.readFileSync('./dados.csv', { encoding: 'utf-8' });
const linhas = meusDados.split('\r\n');
for (let linha of linhas) {
  // Desestruturação
  // const [titular,numero,tipo,saldo] = linha.split(',');
  const colunas = linha.split(',');
  const titular = colunas[0];
  const numero = colunas[1];
  const tipo = colunas[2];
  const saldo = Number(colunas[3]);
  banco.adicionarCliente(numero, tipo, saldo, titular);

}

banco.deposito('5486273622', 100);
banco.deposito('5486273622', 50);
banco.saque('5486273622', 160);

// Possibilita realizarmos a exportação de dados para outro arquivo
module.exports = banco;


