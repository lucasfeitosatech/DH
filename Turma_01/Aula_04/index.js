// Aula 04 

/*
  Introdução ao JavaScript 

  - NodeJS e NPM 
    -> NodeJS - Uma forma de executar códigos JS fora do navegador
    - V8 Engine 
    Npm -> Node Package Manager -> Gerenciador de pacotes do Node 
  - Tipos primitivos (Number,String, Boolean);
  - Operadores Matemáticos
  - Variáveis
*/

// console -> módulo do javascript 
// Vai apresentar uma saída no terminal 
// console.log -> Vai ser utilizado apenas 
// para visualização de como o código está sendo executado

// Tipos primitivos (Number,String, Boolean);

// Number 
/*
  Números Inteiros: 1 2 5 -2 -5 -10
  Números Decimais (Flutuantes): 5.2 6.5 0.9 3.14

  + -> Adição
  - -> Subtração
  / -> Divisão -> Exata -> 5/2 -> 2.5
  * -> Multiplicação
  % -> Resto da divisão -> 5%2 -> 2*2 + 1 = 5 
  ** -> exponenciação -> 2**3 -> 2*2*2 -> 8
  RaizQuadrada -> 4**0.5 -> RaizDe4 -> 2  

*/

console.log(1 + 5); // 6
console.log(20 - 5); // 15
console.log(9*8);  // 72 
console.log(5/2); // 2.5 
console.log(5%2); // 1 
console.log(2**3); // 8 
console.log(4**0.5); // 2 


/*
  Texto ou String -> Cadeia de Caracteres 
  ou sequencia de caracteres

  podem ser declarados entre "" (aspas duplas)
  ou '' (aspas simples)
 
  + -> Concanetação ou junção

*/
// NaN -> Not a Number -> Não é um número
console.log('1' + 1);


// Variáveis
// O que é? -> Armazenar alguma informação 
// na memória do computador
// Declaração de variável 
// tipos de váriaveis (const,let,var)
// Palavras reservadas da linguagem;
const MINHA_VARIAVEL = ((5 + 2)*3)**2;
const MINHA_VARIAVEL2 = 'MINHA_CHAVE';
const MINUTO = 60;
const HORA = 60*MINUTO;
const DIA = 24*HORA;
console.log(MINUTO + 30);
minhaVariavel = 10;
// Camel Case 
// meu numero complexo do Javascript
var outraVariavel = 'meu texto';
outraVariavel = 'Meu valor trocado agora';




// Armazenando o valor 5 na memória do computador 
// minhaVariavel -> Espaço na memória que vai ter o valor

// const -> let,var

// const -> Constante
// const -> Um valor definido que não pode ser mais alterado