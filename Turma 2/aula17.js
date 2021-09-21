//Aula 17 , filter, map, reduce, forEach

let minhaImportacao = require("./banco");
let readLineSync = require("./readline-sync/readline-sync");




let numeros = [1,2,3,4,5,6];

let numerosFiltrado = minhaImportacao.banco.clientes.filter(function(cliente,indice){
  return cliente.titular.includes("L");
});

console.log(numerosFiltrado);

numeros.map(function(elemento,indice){

});

numeros.reduce(function(acumulador,elemento){

});



for(let i = 0;i<numeros.length;i++){
  const numero = numeros[i];
  //console.log(numero);
}

let numerosInverso = numeros;

for(let numero of numerosInverso ){
  //console.log(numero);
}

//Declaracao de funcao
function minhafuncao(a,b,c,d){

}

//forEach




numeros.forEach(
  
  function(elemento,indice){
    //console.log("Elemento: " + elemento + " indice : " + indice);
  }

);






//Invocar uma funcao

//minhafuncao(3,4,5,6);


