/*



  Aula 20 - Funções avançadas

  Arrow function 

  Recursão

  Callbacks

*/
// Forma tradicional
function soma(num1, num2) {
  return num1 + num2;
}

// Forma expressa

const subtracao = function (num1, num2) {
  return num1 - num2;
}

// Forma de flecha -> Arrow function
// Notação de flecha -> = e > -> =>
const multiplicao = (num1, num2) => num1 + num2;


multiplicao(5, 6);
subtracao(5, 3);
soma(10, 9);

/*
  Particularidades da Arrow function

  Quando temos apenas uma expressão para retornar
  podemos omitir as {} e o return

  Quando temos apenas um parametro, podemos omitir os ()

  Quando não temos parametros, podemos trocar os () por _ (underline)

  Arrow functions não podem ser utilizadas como função construtora


*/

function Pessoa(nome) {
  this.nome = nome;
}

const carro = {
  placa: 'XPTO123',
  acelerar: () => {
    // o this na arrow function não funciona como sendo a referência do objeto
  },
  meuMetodo() {
    this.placa;
  }
}


const quadrado = n => n * n;

const log = _ => console.log("Teste");


// Recursão -> É a ação de chamar uma função dentro dela mesma;


function olaMundo() {
  console.log("Olá mundo");
  olaMundo();
  // Loop infinito
}

// olaMundo();

// Algoritmos de matrizes

// Criar uma interface e consumir uma API 

function fatorial(n) {
  let resultado = 1;
  for (let i = n; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
}
function fatorialRecursivo(n) {
  //  return n === 1 ? 1 : n*fatorialRecursivo(n - 1);
  if (n === 1) {
    return 1;
  } else {
    return n*fatorialRecursivo(n - 1);
  }
}

console.log(fatorialRecursivo(5));

/*
  n = 5 ; n === 1 -> false -> return 5 * 24 = 120
  n = 4 ; n === 1 -> false -> return 4 * 6 = 24
  n = 3 ; n === 1 -> false -> return 3 * 2 -> fatorial(3) = 6
  n = 2 ; n === 1 -> false -> fatorial(2) = 2
  n = 1 ; n === 1 -> true -> fatorial(1) = 1
*/






