function Conta(conta,tipoConta,saldo,titular){
  this.conta = conta;
  this.tipo = tipoConta;
  this.saldo = saldo;
  this.titular = titular;
}

let abigaelNatte = new Conta('5486273622', "ContaCorrente", 27771, "Abigael Natte");
let ramonConnel = new Conta('1183971869', "ContaPoupanca", 8675, "Ramon Connell");
let jarretLafuente = new Conta('9582019689', "ContaPoupanca", 27363, "Jarret Lafuente");
let anselArdley = new Conta('1761924656', "ContaPoupanca", 32415, "Ansel Ardley");
let jackiShurmer = new Conta('7401971607', "ContaPoupanca", 18789, "Jacki Shurmer");
let jobiMawtus = new Conta('630841470', "ContaCorrente", 28776, "Jobi Mawtus");
let thomasinLatour = new Conta('4223508636', "ContaCorrente", 2177, "Thomas inLatour");
let lonnieVerheijden = new Conta('185979521', "ContaPoupanca", 25994, "Lonnie Verheijden");
let alonsoWannan = new Conta('3151956165', "ContaCorrente", 7601, "Alonso Wannan");


/*4 - A partir dos 10 usuários, gereuma lista onde 
todos eles convergem (lista de objetos)
*/
let listaClientes = [abigaelNatte,ramonConnel,jarretLafuente,anselArdley,jackiShurmer,jobiMawtus,thomasinLatour,lonnieVerheijden,alonsoWannan];

/*5- 
Também nos pedem a criação de um objeto literal chamado banco que 
terá uma propriedade chamada clientes, 
ele será composto pela lista de objetos gerados no ponto anterior.
*/

let banco = {
  clientes:listaClientes,
  // Função adicional que não consta no enunciado
  cadastrarCliente(conta,tipo,saldo,titular){
    let cliente = new Conta(conta, tipo, saldo, titular);
    this.clientes.push(cliente);
  },
  consultarCliente(titular){
    for(let i = 0;i < this.clientes.length;i++){
      const cliente = this.clientes[i];
      if(cliente.titular === titular){
        console.log("Cliente encontrado!!! ",cliente);
        return cliente;
      }
    }
    console.log("Cliente não encontrado");
  },
  deposito(titular,valorDeposito){
    let cliente = this.consultarCliente(titular);
    if(cliente){
      cliente.saldo += valorDeposito;
      console.log('Depósito realizado, seu novo saldo é: ' + cliente.saldo);
    } else {
      console.log('Depósito não pode ser realizado');
    }
  },
  saque(titular,valorSaque){
    let cliente = this.consultarCliente(titular);
    if(cliente && (cliente.saldo - valorSaque) >= 0){
      cliente.saldo -= valorSaque;
      console.log('Saque realizado, seu novo saldo é: ' + cliente.saldo);
    } else {
      console.log('Saque não pode ser realizado');
    }
  },
  transferencia(titular,titularATransferir,valorTransferencia){
    let cliente = this.consultarCliente(titular);
    let clienteATransferir = this.consultarCliente(titularATransferir);
    if(cliente && clienteATransferir &&  (cliente.saldo - valorTransferencia) >= 0 ){
      cliente.saldo -= valorTransferencia;
      clienteATransferir.saldo += valorTransferencia;
    }
  },
}



banco.cadastrarCliente('2138105881', "ContaPoupanca", 0, "Bendite Huggett");

banco.consultarCliente('Bendite Huggett');
banco.deposito('Bendite Hugget',100);
//banco.consultarCliente('Bendite Huggett');
