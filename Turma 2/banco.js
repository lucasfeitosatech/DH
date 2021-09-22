// Número da conta (somente números)
// Tipo de conta (conta corrente ou poupança em $)
// Saldo em $ (valor apenas)
// Titular da conta (nome completo)


function Conta(mNumero,mTipo,mSaldo,mTitular){
  this.numero = mNumero;
  this.tipo = mTipo;
  this.saldo = mSaldo;
  this.titular = mTitular;
}

module.exports.Conta = Conta;

//console.log(module);

// numero	tipo	saldo	titular
// 5486273622	Conta Corrente	27771	Abigael Natte
// 1183971869	Conta Poupança	8675	Ramon Connell
// 9582019689	Conta Poupança	27363	Jarret Lafuente
// 1761924656	Conta Poupança	32415	Ansel Ardley
// 7401971607	Conta Poupança	18789	Jacki Shurmer
// 630841470	Conta Corrente	28776	Jobi Mawtus
// 4223508636	Conta Corrente	2177	Thomasin Latour
// 185979521	Conta Poupança	25994	Lonnie Verheijden
// 3151956165	Conta Corrente	7601	Alonso Wannan
// 2138105881	Conta Poupança	33196	Bendite Huggett

let conta = new Conta(512,"Conta Corrente",3000.32,"Lucas Feitosa");
let conta2 = new Conta(001,"Conta Corrente",100.90,"Abigael Natte");
let conta3 = new Conta(098,"Conta Poupança",200.10,"Bendite Huggett");
let conta4 = new Conta(123,"Conta Corrente",4230.50,"Cliente 2");
let conta5 = new Conta(223,"Conta Poupança",3321.39,"Cliente 3");
let conta6 = new Conta(323,"Conta Poupança",2212.43,"Cliente 4");

// A partir dos 3 usuários, gere uma lista 


// lista.push(new Conta());
// let lista2 = [];
// lista2.push(conta);
// lista2.push(conta2);
//console.log(lista);



let lista = [conta,conta2,conta3,conta4,conta5,conta6];
// Também nos pedem a criação de um objeto literal chamado banco que terá uma 
// propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.

let banco = {
  clientes:lista,
  consultarCliente:function(nome){
    // for(let i = 0;i<this.clientes.length;i++){
    //   const cliente = this.clientes[i];
    //   if(cliente.titular === nome){
    //     console.log(cliente);
    //     return cliente;
    //   }

    // }
    // for(let cliente of this.clientes){
    //   if(cliente.titular === nome){
    //     return cliente;
    //   }
    // }
    let cliente = this.clientes.find(function(elemento,index){
      return elemento.titular === nome;
    });
    return cliente

  },
  deposito:function(nome,valor){
    const cliente = this.consultarCliente(nome);
    cliente.saldo += valor;
    console.log("Depósito realizado, seu novo saldo é: " + cliente.saldo);
  },
  saque:function(nome,valor){
    const cliente = this.consultarCliente(nome);
    if(valor > cliente.saldo){
      console.log("Saldo insuficiente!");
    } else {
      cliente.saldo -= valor;
    }
  }
}


//Exportando para outro arquivo
module.exports.banco = banco;

//console.log(module);
let cliente = banco.consultarCliente("Lucas Feitosa");
let cliente2 = banco.consultarCliente("Lucas Feitosa");
let cliente3 = banco.consultarCliente("Lucas Feitosa");
//console.log(cliente);


// module.exports = function(a,b){
//   return a +b;
// }


// banco.consultarCliente("Bendite Huggett");



// console.log(conta);



