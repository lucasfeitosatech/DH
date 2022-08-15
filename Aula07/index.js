/*
  Aula 07 - 

  Operadores lógicos 
  >
  >=
  <
  <=
  ==
  ===
  !=
  !==
  !
  &&
  ||
*/

// Verdadeiro ou falso -> boolean
// true e false
let resultado = 5 > 4 // true

// igualdade dupla ou igualdade simples 
/*
  Não compara o tipo do dado, apenas o valor 

*/
console.log('5' == 5); // true
// igualdade triple ou estritamente igual
/*
  compara o tipo e o valor
*/
console.log('A' === 'a');


//Diferença simples

console.log('4' != 4); // false 


// Diferença tripla

console.log('4' !== 4); // true


console.log(!(5 > 4)); // false

var produtoAtivo = false | true;

if(!produtoAtivo){
  console.log('Produto está Inativo');
} 


// Se algo for verdadeiro faca alguma coisa 
if(!false){
  // Fazer alguma coisa 
  console.log('')
} 
// Caso contrário seja falso faca alguma coisa
else {
  // false

}

// !!!!true -> true
// !!!true -> !true 

let a = 'Hoje vai chover';
let b = 'E Hoje vou ao cinema'; 

/*  
    a   b  a && b
    V   V     V
    F   V     F
    V   F     F
    F   F     F
*/
console.log(5 > 4 && 4 < 3 && 2 > 1 && 3>=2 && 5 > 1)// false

a && b // false;
  
// ||

a = 'Hoje vai chover';
b = 'OU Hoje vou ao cinema'; 

/*  
    a   b  a || b
    V   V     V
    F   V     V     
    V   F     V
    F   F     F
*/

true || false || true



