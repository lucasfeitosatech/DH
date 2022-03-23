let numeros = [1,2,3,4,5];
let numeros2 = [2,5,7,8,9,10];

function somarArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {

    // soma += array[i] -> acumulador de valores
    // soma = soma + array[i] -> acumulador de valores
    soma += array[i];
    // soma = soma + array[i];
    console.log(`i = ${i} array[${i}] = ${array[i]} soma = ${soma}`);
  }
  return soma;
}



// somarArray(numeros);
somarArray(numeros2)