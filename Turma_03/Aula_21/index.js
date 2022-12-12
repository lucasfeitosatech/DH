/*
  Metódos avançados de arrays 

  forEach
  map
  find 
  reduce 

*/

// Callback - É a passagem de uma função como parametro de outra função
//              0  1   2    3
let numeros = [90,86,3.14,0.01];


function executarParaElemento(elemento,indice){
  //console.log(elemento,indice);
}

numeros.forEach(executarParaElemento);

numeros.forEach(function(elemento,indice){
  //console.log(elemento,indice);
});
// 

numeros.forEach((elemento,indice) => {});


for(let numero of numeros){
  executarParaElemento(numero);
}





// [90,86,3.14,0.01];
function processarElemento(elemento){
  return elemento*2;
}
const numerosx2 = numeros.map((numero,indice) => numero*2);

const arrowFunction = a => a*2;


// console.log(numerosx2);



let textos = ['Abacaxi',"Chuva","Televisão","Computador"];
for(let texto of textos){
  if(texto === 'Computador'){
    // Achei o abacaxi
  }
}
const texto = textos.find(texto => texto === 'Computador');
const novoTexto = textos.reduce((acc,texto) => acc + '&' + texto);



// Retorna o elemento o qual a condição retornada no callback é verdadeira
// Caso a condição seja falsa para todos os elementos retorna undefined


let numeros2 = [10,9,8,7];
(10 + 9 + 8 + 7)/4 // 8.5

10 + 9
19 + 9
28 + 7
35//


// let soma = 0;
// for(let numero of numeros2){
//   soma += numero;
// }
let soma = numeros2.reduce((acc,valorAtual) => acc + valorAtual);
console.log(soma / numeros2.length); // 8.5
// Reduce -> Reduzir -> Transformar todos os elemntos em apenas uma informação



