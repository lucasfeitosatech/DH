// 1- Array de objetos


// 2 - 
// const conta = {
//   titular:'Lucas',
//   saldo:100,
//   tipo:'poupanca',
//   numero:1234,
// }

function Conta(titular,saldo,tipo,numero){
  // ...
}

class Conta {
  constructor(titular,saldo,tipo,numero){
    // ...
  }
}

const conta1 = new Conta();// Criação 
const conta2 = new Conta();
//...

// const lista = [conta1,conta2];

const banco = {
  clientes:[],
  adicionarConta(conta){
    //... criar a lógica de adicionar
  },
  consultarCliente(numeroDaConta){
    // ... 
  },
  deposito(){
    
  },
  saque(){

  }
}

banco.clientes.push(conta1,conta2)//
