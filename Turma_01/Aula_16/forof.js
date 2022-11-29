const numeros = [1,2,3,4,5];

for (let index = 0; index < numeros.length; index++) {
  const numero = numeros[index];
  console.log(numero);
  // index = 0 -> numero = 1
  // index = 1 -> numero = 2
  // index = 2 -> numero = 3 
  // index = 3 -> numero = 4 
  // index = 4 -> numero = 5
}

// for of

for(let numero of numeros){
  console.log(numero);
}