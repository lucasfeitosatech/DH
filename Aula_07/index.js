/*
  Aula 07 - Operadores lógicos

*/
// Tipo booleano -> true | false -> veradeiro ou falso

// Igualdade Dupla
2 == 5 // false 
// Igualdade tripla -> Estritamente igual
3 === 6 // false 

2 == '2' // true -> verdadeiro -> A igualdade não verifica o tipo do dado, apenas o seu valor
2 === '2' // false -> falso -> pois o tipo agora também é comparado

// Desigualdade

2 != 5 // true
3 !== '3' // true

// Maior igual, Menor igual
5 >= 6 // false
7 <= 20 // veradeiro

// Maior e Menor

1 > 0 // true
2 < 3 // true

// Negação

!true // false
!false // true

!!true// true
!! false // false

!!!true // false

// Aninhar operações lógicas 

// E e OU , OU Exclusivo

'A:Ou Hoje vou dar aula'
'OU'
'B: Hoje vai chover'

/*
  A   B   A OU B
  F   F     F
  V   F     V
  F   V     V
  V   V     V
*/

// quando um dos dois lados não acontece a expressão é falsa

/*
  A   B    A E B

  V   V      V
  V   F      F
  F   V      F
  F   F      F

*/

// && -> E 
// || -> OU

5 > 2 && 3 > 4  // false

3 === '3' || 2 == 2 // true





