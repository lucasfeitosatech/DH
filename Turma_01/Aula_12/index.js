/*
  Aula 12 

  Estruturas de repetição

  while
  do while
  for

  Realizar tarefas em massa, ou atividades que se repetem

*/

// while -> enquanto -> enquanto alguma condicao for verdadeira, repetirei um bloco de código
// A partir do momento que a condição passa a ser falsa, a repetição é encerrada


//      0      <= 10000 -> true
//      1 <= 5 -> true
// ...
//     5 <= 5 -> true
// .   6 <= 5 -> false 
//             0 1 2 3 4 5
// let numeros = [0,1,2,3,4,5];
// while(contador <= 100) {
//   console.log("contando...",contador);
//   // Incremento -> Adicionar valor a uma variável
//   //forma tradiconal de incremento -> contador = contador + 1;
//   // forma simplificada 
//   // contador = contador + 1;
//   // contador += 1;
//   // Funciona para incrementar de 1 em um
//   contador++;
// }


// do while -> execute algum bloco de código, enquanto alguma condicao for verdadeira
// Executa o bloco de código pelo menos uma vez
// faca
// contador = 101
// do {
//   console.log("contando...",contador);
//   contador++;
// } while(false);


let contador = 0;
do {
  console.log("contando...",contador);
  contador--;
}
while(contador >= 0)

// for 
/*
  Critério Inicial ou variável Inicial com um valor
  Critério de parada (condição a ser testada)
  Passo (Incremento) - De quanto em quanto a variável inicial vai ser incrementada


*/
// Decremento
  // contador = contador - 1;
  // contador -= 1;
  // contador--;
console.log("Iniciando contagem do for... \n\n")
for(let contador = 10; contador >= 0 ; contador--){
  console.log("contando...",contador);
}

function soma(numeros){
  return num1 + num2;
}

// Utilizar as estruturas de repetição para percorrer arrays 
//             0   1 2  3  4 
let numeros = [26,10,7,14,73]; // 130
// 130 + undefined -> NaN 
numeros.length // O número total de elementos do array
// numeros.length = 5 -> O array possui 5 elementos
// Para a variável indice iniando em 0 até o tamanho máximo de elementos do array 
// e incrementando esse indice de um em um
// Repetirei algum código
let soma = 0;
for(let indice = 0; indice < numeros.length ;indice++){
  const numero = numeros[indice];
  soma += numero;
  /*

  let numeros = [26,10,7,14,73];

  soma = 0;
  indice = 0; 0 < 5 -> true; numero = numeros[indice] = 26 
  indice++

  soma = 26
  indice = 1; 1 < 5 -> true ; numero = numeros[indice] = 10
  indice++

  soma = 36;
  indice = 2; 2 < 5 -> true ; numeros = numeros[indice] = 7
  indice++;

  soma = 43;
  indice = 3; 3 < 5 -> true ; numeros = numeros[indice] = 14
  indice++

  soma = 57;
  indice = 4; 4 < 5 -> true ; numeros = numeros[indice] = 73
  indice++

  soma = 130
  indice = 5 ; 5 < 5 -> false 

  Encerra o loop

  */
}















