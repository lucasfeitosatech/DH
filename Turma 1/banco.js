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

module.exports.meuConstrutorDeConta = Conta;
module.exports.algumaCoisaASerExportada = [1,2,3,4];
// console.log(module);

// console.log(module);

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

let conta = new Conta(123,"Conta Corrente",99,"Lucas Feitosa");
let conta2 = new Conta(1183971869,"Conta Corrente",101,"Abigael Natte");
let conta3 = new Conta(2138105881,"Conta Poupança",200,"Bendite Huggett");
let conta4 = new Conta(233,"Conta Corrente",300,"Teste");
let conta5 = new Conta(181,"Conta Poupança",400,"Teste 1");
let conta6 = new Conta(876,"Conta Poupança",500,"Teste 2");

// A partir dos 3 usuários, gere uma lista 


// lista.push(new Conta());
// let lista2 = [];
// lista2.push(conta);
// lista2.push(conta2);
//console.log(lista);



let lista = [conta,conta2,conta3,conta4,conta5,conta6];
// Também nos pedem a criação de um objeto literal chamado banco que terá uma 
// propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.
//JSON - JavaScript Object Notation

let pessoa = {
  nome:"Lucas",
  idade:"26",
  
}


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
    //   if(cliente === nome)
    //     return cliente;
    // }
    
    let cliente = this.clientes.find( elemento => elemento.titular === nome && elemento.saldo < 100 );
    return cliente;


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
// module.exports.banco.prop4 = 4;
module.exports.prop1 = 1;
module.exports.prop2 = 2;
module.exports.myFunction = function(){

}
//module.exports = exports
exports.prop3 = 3;
//console.log(module);

// module.exports = function(a,b){
//   return a +b;
// }


// banco.consultarCliente("Bendite Huggett");



// console.log(conta);





