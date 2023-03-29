// 1 e 3 - 

class Conta {
  constructor(numero,tipo,saldo,titular){
    this.numero = numero
    this.tipo = tipo;
    this.saldo = saldo
    this.titular = titular
  }
}

// 2 e 4- 



// 5 

const banco = {
  clientes:[],
  adicionarCliente(numero,tipo,saldo,titular){
    const conta = new Conta(numero,tipo,saldo,titular)
    this.clientes.push(conta);
  },
  consultarCliente(){

    /*
    6 - o objeto do banco criará um método chamado consultarCliente que receberá
     um nome (titular) por parâmetro e deve pesquisar na lista de contas e 
     retornar ao objeto do cliente que corresponde a esse nome inserido.

    */
    
  }
}
banco.adicionarCliente('01','conta corrente',0,'Fulano 1');
banco.adicionarCliente('02','conta corrente',0,'Fulano 2');
console.table(banco.clientes);
// const conta1 = new Conta('01','conta corrente',0,'Fulano 1');
// const conta2 = new Conta('02','conta poupança',0,'Fulano 2');
// const conta3 = new Conta('03','conta corrente',0,'Fulano 3');