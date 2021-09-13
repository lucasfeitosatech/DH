let banco = require("./banco.js"); //Meu modulo
const fs = require('fs'); // Modulo nativo do node
let readlineSync = require('readline-sync');//Modulo de um terceiro
//console.log(readlineSync);

let titular = readlineSync.question('Titular? ');
let saldo = readlineSync.question('Saldo? ');
console.log('Ola ' + titular + ' seu saldo e: ' + saldo);



 
// Handle the secret text (e.g. password).




// 6. o objeto do banco criará um método chamado consultarCliente que 
// receberá um nome (titular) por parâmetro e deve pesquisar na lista 
// de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.


// banco.depositar("Lucas Feitosa",500);
// //banco.consultarCliente("Lucas Feitosa");
// banco.depositar("Lucas Feitosa",2000);
// //banco.consultarCliente("Lucas Feitosa");
// banco.saque("Lucas Feitosa",2000);
// banco.consultarCliente("Lucas Feitosa");
// banco.saque("Lucas Feitosa",2000);
// banco.consultarCliente("Lucas Feitosa");