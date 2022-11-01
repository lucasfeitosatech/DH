/*
  Aula 07 - Operadores lógicos

  Boolean -> true/false -> verdairo/falso

  O número 5 é maior que o numero 3 -> true/false
*/

// maior
5 > 3 // true
// menor
1 < 0 // false
// maior ou igual
10 >= 10 // true
// menor ou igual
4 <= 3 // false
// Igualdade dupla -> o tipo não é considerado, apenas o valor é comparado
2 == '2' // true
// Igualdade tripla (estritamente igual) o tipo é considerado
2 === '2' // false 
// diferença simples - o tipo não é considerado, apenas o valor é comparado
3 != '3' // false
// diferença (estritamente diferente) ->  o tipo é considerado
3 !== '3' // true
// negação
!true // false
!false // true
!!!!!!true // true
!!!!!true // false

// = -> atribuição e não a um operador lógico

// Expressões lógicas

let a = 'Hoje vou ao cinema E'
let b = 'Hoje vai chover';
// E -> Apenas vai ser verdadeiro quando ambas forem, 
// caso uma das duas seja falsa a expressão também será falsa

/*
  a   b   a && b

  V   V     V
  F   V     F
  V   F     F
  F   F     F

  Tabela verdade do E
*/

2 < 5 && 1 > 15 && 0 === 0 && 1 !== 2  // false


 a = 'Hoje vou ao cinema OU'
 b = 'Hoje vai chover';

 // OU - Apenas será falso quando as duas forem falas

 /*
  a   b   a || b

  V   V     V
  F   V     V
  V   F     V
  F   F     F

  Tabela verdade do OU
*/
// true 
2 < 5 || 3 > 10 // true

let idade = 15; 

idade >= 18 && idade < 65 // Voto obrigatório

idade < 18 || idade >= 65 // Voto opcional





/*
  Operadores logicos

  E -> AND -> &&
  OU -> OR -> ||


*/


/*
  truhty - falshy

  Permite que variáveis de tipos que não sejam booleano, possuam um valor de natureza booleano
*/

0 // false
1,5,6.7,9 // true
'' // false
'abc' // true
undefined // false
null // false



