/* Número da conta (somente números)
Tipo de conta (conta corrente ou poupança em $)
Saldo em $ (valor apenas)
Titular da conta (nome completo) */

function Conta(numeroParam, tipoParam, saldoParam, titularParam) {
  this.numero = numeroParam;
  this.tipo = tipoParam;
  this.saldo = saldoParam;
  this.titular = titularParam;

  this.formataSaldo = function () {
    return "R$ " + this.saldo.toLocaleString("pt-BR");
  };
}

let conta3 = {
  numero: 0001,
  tipo: "Conta Corrente",
  saldo: 3601.33,
  titular: "Lucas Feitosa",
  formataSaldo: function () {
    return "R$ " + this.saldo.toLocaleString("pt-BR");
  },
};

// 3151956165	Conta Corrente	7601	Alonso Wannan
// 2138105881	Conta Poupança	33196	Bendite Huggett

const conta1 = new Conta(3151956165, "Conta Corrente", 7601.5, "Alonso Wannan");
const conta2 = new Conta(
  2138105881,
  "Conta Poupança",
  33196.25,
  "Bendite Huggett"
);

// console.log(conta1.saldo);
// console.log(conta1.formataSaldo());

const lista = [conta1,conta2,conta3];

for(let i = 1;i<=100;i++){
  const numeroConta = i;
  const tipoConta = i % 2 == 0 ? 'Conta Corrente' : 'Conta Poupança';
  const saldo = Math.random() * 10000;
  const titular = "Cliente " + i;
  const conta = new Conta(numeroConta,tipoConta,saldo,titular);
  lista.push(conta);
}


//5 - criação de um objeto literal chamado 
//banco que terá uma propriedade chamada clientes, 
//ele será composto pela lista de objetos gerados no ponto anterior.

const banco = {
  clientes:lista,
  consultarCliente:function(titularABuscar){
    for(let i = 0 ; i < this.clientes.length ; i++){
      if(this.clientes[i].titular == titularABuscar ){
        return this.clientes[i];
      }
    }
  }
}

console.log(banco.consultarCliente("Bendite Huggett"));

// console.table(lista);

for(let i = 0 ; i<lista.length;i++){
  const conta = lista[i];
}

for(let i in lista){
  const conta = lista[i];
}

for(let conta of lista){

}


const numeros = [1,2,3];
for(let numero of numeros){
  // console.log(numero);
} 

const nomes = ["nome","nome2","nome3"];
for(let nome of nomes){
  
}