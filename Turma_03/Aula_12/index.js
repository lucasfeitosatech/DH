/*
  Aula 12 

  Estruturas de repetição

  while
  do while
  for

*/

// while -> enquanto 
// enquanto alguma condicao for verdadeira repetirei algum bloco de código
// Toda estrutura de repetição terá um critério de parada (condicional)
// Loop Infinito


// do while -> faca alguma coisa enquanto algo for verdadeiro
// Pelo menos uma vez o bloco de código vai ser executado

// do {
//   

// } while(false);


let contador = 0;
while(contador <= 10){
  console.log("Contando... ",contador);
  contador++; 
  
}

// for -> Para um critério inicial. Até uma determinada condição e um passo (incremento) de x faca alguma coisa

for(let contador = 0;contador <= 10;contador++) {
  // O que eu quiser repetir
  console.log("Contando... ",contador);
  estado = true;
}


// function soma(num1,num2) {
//   return num1 + num2;
// }
//              0  1   2   3  4
let numeros = [10,15,20.5,30,40,80]; // tamanho = 6
numeros.length // Tamanho de elementos do array = 6
// Para o indice 0 até o tamanho máximo de elementos do array vou fazer algo e incrementar o indice de 1 em 1
let soma = 0;
for(let indice = 0;indice < numeros.length;indice++){

  /*soma = 0;
    
    indice = 0 ; 0 < 6 -> true ; numero = numeros[indice] = 10 ; soma += numero;
    soma = 10
    indice++
    
    indice = 1 ; 1 < 6 -> true ; numero = numeros[indice] = 15 ; soma += numero;
    soma = 25
    indice++

    indice = 2 ; 2 < 6 -> true ; numero = numeros[indice] = 20.5 ; soma += numero;
    soma = 45.5
    indice++

    indice = 3 ; 3 < 6 -> true ; numero = numeros[indice] = 30 ; soma += numero
    indice++
    soma = 75.5

    indice = 4 ; 4 < 6 -> true; numero = numeros[indice] = 40 ; soma += numero
    indice++
    soma = 115.5

    indice = 5 ; 5 < 6 -> true; numero = numeros[indice] = 80 ; soma += numero
    indice++
    soma = 195.5;

    indice = 6 ; 6 < 6 -> false

    Encerra o loop

  */
  console.log("Valor da soma: " + soma);
  const numero = numeros[indice];
  soma += numero;

}

console.log("Valor da soma: " + soma);



// let estado = true; 


// while(estado === true){
//   //
//   if(...){

//   } else if(...){
//     estado = false;
//   }
// }








