/*
  Arrays avançados 

  - For in
  - For of
  - forEach
  - Map
  - Reduce
*/

let numeros = [100,89,-1,1.5,7.4,0];

for(let i = 0;i < numeros.length;i++){
  const numero = numeros[i];
  //console.log(numero);
}
// - For in
for(let i in numeros){
  /*
  i = 0 -> numeros[i] -> 100
  i = 1 -> numeros[i] -> 89
  ...
  i = 2 -> numeros[i] -> 89



  */
  const numero = numeros[i];
  //console.log(numero);
}

//- For of
for(let numero of numeros){
  /*
  numero = 100
  numero = 89
  i = 1 -> numeros[i] -> 89
  ...
  i = 2 -> numeros[i] -> 89



  */
  //console.log(numero);
}

// forEach

// Métódo de array 

// Criação do meu callback 
// function meuCallback(currentValue,index){
//   console.log('Executou o callback',index,currentValue);
// }

numeros.forEach((numero,index) => console.log('Executou o callback',index,numero));

function quadrado(valorAtual,index){
  return valorAtual*5 + 1;
}
//[10000,7921,1,2.25,54.76,0]
//[200,178,-2,3,14.8,0]
//[100,89,-1,1.5,7.4,0];
const quadrados = numeros.map(quadrado);


// Map

// Reduce

function callBackReducer(acumulador,valorAtual,index){
  // acumulador = variavél que armazena os valores retornados 
  // acumulador = 0
  // index = 0 , valorAtual = 1 , acumulador = 1
  // index = 1 , valorAtual = 2 , acumulador = 3
  // index = 2 , valorAutal = 3 , acumulador = 6
  // index = 3 , valorAtual = 4, acunulador = 10
  // index = 4, valorAtual = 5, acumulador = 15
  return acumulador + valorAtual;
}

let numeros2 = [1,2,3,4,5];
let soma = numeros2.reduce(callBackReducer);
let media = soma/numeros2.length;

console.log('Média dos elementos',soma,media)

/*
  Visa reduzir o array em apenas uma coisa 
*/





// Extra: Desestruturação

const pessoa = {
  nome:'Lucas',
  idade:18
}

const {nome,idade} = pessoa

nome
idade


for(let [index,numero] of numeros.entries()){
  // const index = array[0];
  // const numero = array[1];
  //console.log(index,numero);
}