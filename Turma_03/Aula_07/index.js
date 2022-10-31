// Operando logicamente 

/*
  Booleano 

  true/false

*/
// maior
5 > 3 // 5 é maior do que o 3? -> Sim o 5 é maior -> true/verdadeiro
// menor
1 < 2 // true 
//  menor ou igual 
6 <= 5 // false
// maior igual
3 >= 2 // true
// igualdade dupla -> Não compara o tipo do dado, apenas o seu valor
2 == '2' // true
// igualdade tripla (estritamente igual) -> Compara o tipo e o valor do dado
2 === '2' // false 
// diferente 
2 != '2' // false
// diferente (estritamente igual)
2 !== '2' // true
// negação
!true // false 
!!false // false
!!!true // false

// = -> atribuição


// && -> AND -> E

let a = 'Hoje vai chover';
let b = 'Hoje vou dar aula';
// a E b 
// Hoje vai chover e hoje vou dar aula 
// Se um dos lados for falso a minha expressão ela é falsa
/*
    Tabela da verdade do E

    a   b  a && b

    V  V     V
    V  F     F
    F  V     F
    F  F     F 
*/

1 > 5 && 8 < 10 // false  




// || -> OR  -> OU

// hoje vai chover ou hoje vou dar aula 
// Só vai ser falso quando os dois lados não acontecem, caso um dos dois seja verdadeiro
// a expressão permanece verdadeira

/*
    Tabela da verdade do OU

    a   b  a || b

    V  V     V
    V  F     V  
    F  V     V  
    F  F     F     
*/

1 < 2 || 5 > 3 // true
   
true
// booleano 

// Notação BIG O -> Complexidade e analíse de algoritmos 


// truhty e falshy

0 // false 

-1,5,5.5 // true

'' // false

'abc ' // true

undefined // false

null // false 

const x = 12n
console.log(x);
