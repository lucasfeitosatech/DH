/*
 Aula 4 - Operadores Matemáticos, Lógicos e Variáveis (var,let,const)

 JavaScript - Linguagem 
 ECMAScript -> Normas e padrões 
 V8 Engine -> Motor que vai ser utilizado para rodar o javascript

 Javascript ->  Web -> AngularJS, VueJS, ReactJS
                App -> React Native
                API -> NodeJS
*/

/*
  console.log("")
*/
// O console,log é uma função que recebe algum texto entre () 
// e serve para imprimir uma mensagem no terminal
// console.log("Olá, Mundo!");

/*
  Tipos de dados primitivos
  Number -> Todos números -> 5, -1, 5.25
    Operações envolvendo números
    + -> soma
    - -> subtração
    / -> divisão
    * -> multiplicação
    % -> módulo -> resto da divisão
    ** -> Potencição 
  String (Textos) 
    Operações envolvendo strings
    + -> Concatenação -> A junção dos textos
    OBS: Ao tentar aplicar outros operadores em strings, geralmente é retornado 
    NaN -> Not a Number - Não é um número
  Booleanos 
    true -> verdadeiro -> 1 -> Alto -> Presenca de corrente
    false -> falso -> 0 -> Baixo -> Ausencia de corrente
    Operações lógicas
      > -> Maior
      < -> Menor
      >= -> Maior igual
      <= -> Menor igual
      === -> Igualdade
      !== -> Diferença
      && -> AND -> E -> E Lógico
      || -> OR -> OU -> OU lógico
      ! -> Negação

    Undefined -> Não definido 
    Null -> É um valor nulo
    Objects -> Objetos
*/

typeof // Retorna qual o tipo de dado algum valor ou variávels possui

console.log(typeof true);

/*
  Variável -> O ato de armazenar alguma informação na nossa memória 
  let, const, var

  const -> Ao atribuir um valor inicial, o mesmo não pode ser trocado
  let, var -> permite que o valor possa ser trocado ao longo da execuçao do programa

*/

// = -> atribuição 
// Declaração de variável
// Camel Case
const minhaInformacaoComplementar  = '5'; // 7
var meuNumero = 20;
meuNumero = 30;
// Reatribuição
meuNumero = 40;
// Acessando a minha variável (informação na memória);
console.log( minhaInformacao  + meuNumero);

// Diferença entre let e var