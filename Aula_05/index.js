/*
  Aula 05 - Revisão e funções

  Operadores de String

  Operadores númericos 

*/

// "Olá " + "Mundo"; // Concatenação -> Junção dos dois textos
// console.log("Olá " - "Mundo");

NaN; // Not a Number -> Não é um número
// console.log("1" - "2");

// Equação do segundo grau
// Entradas ou parametros


// Funções -> Reaproveitamento de código

/*
  function -> Palavra reservada
  após palavra reservado -> Nome da função
  () -> Entradas -> Dados que a função pode receber 
  () -> Parametros da função -> Variáveis que recebem valores

*/

// Declaração de função 
function calculoEquacaoDoSegundoGrau(a, b, c) {
  // Cáculo da função
  const delta = b ** 2 - 4 * a * c;
  const raizDoDelta = delta ** 0.5;

  // Saída
  const x1 = (-b + raizDoDelta) / (2 * a);
  const x2 = (-b - raizDoDelta) / (2 * a);

  // return -> Valor de saída da nossa função 

  return x1;

}

// Chamada ou invocação, execução

calculoEquacaoDoSegundoGrau(-1,6,-9); // Realiazando a chamada da função
calculoEquacaoDoSegundoGrau(3,-2,-1);
calculoEquacaoDoSegundoGrau(2,-10,-10);


function quadradoDeUmNumero(numero){
  // console.log(numero*numero);
  return numero*numero;
}

const resultado = quadradoDeUmNumero(2); // 4
console.log(resultado);
quadradoDeUmNumero(3); // 9
quadradoDeUmNumero(4); // 16

function soma(n1,n2){
  return n1 + n2;
  console.log("Teste");

  /*
  Quando o return não for especificado 

  undefined é retornado (não definido);

  encerra a função e nenhum código após o mesmo é executado

  */
}

const resultado2 = soma(2,7);
console.log(resultado2);

const nome = 'José da Silva';
const idade = 30;
const peso = 75;
const altura = 1.8;
const imc = 0;

// Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx

console.log(nome + " tem " + idade + ' anos e seu índice de massa corporal é de: ' +  imc );

