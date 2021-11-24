// Número da conta (somente números)
// Tipo de conta (conta corrente ou poupança em $)
// Saldo em $ (valor apenas)
// Titular da conta (nome completo)

function Conta(numeroContaParam, tipoContaParam, saldoParam, titularParam) {
  this.numero = numeroContaParam;
  this.tipo = tipoContaParam;
  this.saldo = saldoParam;
  this.titular = titularParam;

  this.formataSaldo = function  () {
    return "R$ " + this.saldo.toLocaleString("pt-BR");
  };
}

// 5486273622	Conta Corrente	27771	Abigael Natte
// 1183971869	Conta Poupança	8675	Ramon Connell

const conta1 = new Conta(
  5486273622,
  "Conta Corrente",
  27771.5,
  "Abigael Natte"
);
const conta2 = new Conta(
  1183971869,
  "Conta Poupança",
  8675.45,
  "Ramon Connell"
);

console.log(conta1.formataSaldo());
console.log(conta2.formataSaldo());

//4 - 
let lista = [conta1,conta2];

/* 5 - também nos pedem a criação de um objeto literal 
chamado banco que terá uma propriedade chamada clientes, 
ele será composto pela lista de objetos gerados no ponto anterior. */
const banco = {
  clientes:lista,
  consultarClientePorTitular(titular){
    for(let cliente of this.clientes){
        if(cliente.titular == titular){
          return cliente;
        }
    }
  },
  consultarClientePorNrConta: function(numeroConta){
    for(let cliente of this.clientes){
        if(cliente.numero == numeroConta){
          return cliente;
        }
    }
  }
}

console.log(banco.consultarClientePorTitular("Ramon Connell"));
console.log(banco.consultarClientePorNrConta(5486273622));

