// Aula 04

// Introdução ao JS 

// NodeJS -> Nos permite rodar código javascript fora do navegador

// Operadores Matemáticos 

// console -> Módulo -> Metódo ou função chamda log 
// console -> É apenas um módulo utilizado apenas para desenvolver 
 console.log("Olá mundo");
 // Apresenta uma saída no terminal para o desenvolvedor 
 /*
  Tipos primitivos: 

  Number -> Números inteiros ou ponto flutuante 
    1,2, 5.5 , 3.14 , 
  String (Texto) -> Todas as cadeias de caracteres
  Booleano -> verdadeiro ou falso -> true/false
  undefined -> Não definido 
  null -> Nulo 
 */

/* Operadoras matemáticos 
  + -> Soma
  - -> Subtração
  * -> multiplicação
  / -> Divisão exata -> 5/2 -> 2.5
  % -> Resto da divisão -> 5/2 -> 2*2 + 1 
  ** -> Exponencição -> 2**3 -> 2*2*2 = 8
*/

console.log(1 + 20);
console.log(20 -  15);
console.log(9*8);
console.log(5/2);
console.log(13%5);
console.log(2**3);

console.log("1" + 1);
// NaN -> Not A Number -> Não é um número
/*  
  Strings 

  + -> Concatenação -> Junta tudo em uma string só 
*/
console.log("Olá" + " " + "Mundo");
// Template strings

/*
  Variáveis -> Armazenar alguma informação na memória do computador

  Palavras reservadas

  let 
  const
  var
*/

//
// Camel Case Meu numero retornado -> Corcunda do camelo 
// meuNumeroRetornado
var minhaVariavel = (6 +2)/3*3.14 ** 2; // Indo na memória do computador e amarzenando o valor de 5;
 // 5 

// Variável que não pode ter o seu valor trocado 
// 1s = 1000ms 
// Atribuição -> Atribuir um nove de variável a um valor; 
// Declaração de variável;
const UM_SEGUNDO = 1000; 
// UM_SEGUNDO = 2000; -> Erro

// let, var 
// De forma contrário ao const, nós podemos, em tempo de execução, com o let e o v
// alterar o valor das variáveis ;

minhaVariavel = 'Outro valor para a minha váriavel';
console.log(minhaVariavel);

let placa = 'XPT2409';
placa = 'JYY0908';













