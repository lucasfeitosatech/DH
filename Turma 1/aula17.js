//map, filter,reduce e forEach

//Modulo criado pelo usuario
//let meuBanco = require("./banco");

//Modulo criado por um terceiro
let meuBanco = require("./banco");
let readlineSync = require("readline-sync");




let numeros = [1,2,3,4,5,6];


let numerosFiltrado = meuBanco.banco.clientes.filter(function(cliente,indice){
  return cliente.saldo > 100 && cliente.saldo < 1000;
});

console.log(numerosFiltrado);

numeros.reduce(function(acumulador,elemento){

});

numeros.map(function(elemento,indice){

})


// while(){

// }

// do {

// } while()

for(let i = 0; i<numeros.length;i++){
  let numero = numeros[i];
  //console.log(numero);
}

//for of 

for(let numero of numeros){
  //console.log(numero);
}

// for (const key in numeros) {
//   console.log(key);
// }

//call = chamar
//back = de volta

// numeros.forEach(function(elemento,indice){
  
//   //console.log("Elemento: " + elemento + " Indice: " + indice);

// });