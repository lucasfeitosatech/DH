// Número da conta (somente números)
// Tipo de conta (conta corrente ou poupança em $)
// Saldo em $ (valor apenas)
// Titular da conta (nome completo)



function Conta(mConta,mTipo,mSaldo,mTitular){
  this.titular = mTitular;
  this.conta = mConta;
  this.tipo = mTipo;
  this.saldo = mSaldo;
}



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
let conta1 = new Conta(123,"Conta corrente",500,"Lucas Feitosa");
let conta2 = new Conta(5486273622,"Conta Corrente",27771,"Abigael Natte");
let conta3 = new Conta(2138105881,"Conta Poupança",33196,"Bendite Huggett");

let lista = [conta1,conta2,conta3];
// console.log(lista);

// 5. Também nos pedem a criação de um objeto 
// literal chamado banco que terá uma propriedade chamada clientes, 
// ele será composto pela lista de objetos gerados no ponto anterior.

let banco = {
  clientes:lista,
  consultarCliente:function(nome){
    for(let i = 0;i<this.clientes.length;i++){
      
      let cliente = this.clientes[i];
      if(cliente.titular === nome){
        console.log(cliente);
        return cliente;
      }

    }
  },
  depositar:function(nome,valor){
    let cliente = this.consultarCliente(nome);
    cliente.saldo += valor;
  },
  saque:function(nome,valor){
    let cliente = this.consultarCliente(nome);
    
    if(valor > cliente.saldo){
      console.log("Fundos insuficientes");
    } else {
      cliente.saldo -= valor;
      console.log("Extração feita com sucesso");
    }
  }
}

module.exports = banco;



// 7. Crie outro método chamado depósito que receberá como parâmetros, o 
// titular da conta e uma quantidade de dinheiro para depositar. O 
// método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para 




