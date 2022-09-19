/*
  Aula - Funções Avançadas
  - Arrow Functions
  - Callbacks
  - Recursão
*/

// Forma tradicional de uma função
function nomeDaMinhaFuncao(num1, num2) {
  // Bloco de código a ser executado
  return num1 + num2;
}

// Arrow Function

const nomeDaMinhaFuncao2 = (num1, num2) => {
  // Bloco de código a ser executado
  return num1 + num2;
};

// Primeira particularidade da arrow function 
/*
  Quando temos após uma instrução de retorno as {} e a palavra reservada return podem ser omitidas
*/
const nomeDaMinhaFuncao3 = (num1, num2) => num1 + num2;

  // Bloco de código a ser executado


// Segunda particularidade da arrow function 

/*
  Quando temos apenas um parametro na nossa função, podemos omitir os () 

*/

// Terceira particularidade da arrow function 

/*
  Quando os parametrõs não são importantes podemos fazer a substituição pelo '_' => underscore ou underline
*/

const nomeDaMinhaFuncao4 = (num2,) => num1 + num2;

function quadrado(numero){
  return numero*numero;
}

const quadrado2 = n => n*n;


let meuObj = {
  prop1:1,
  prop2:2,
  metodo1(){
    console.log(this)
  },
  metodo2:() => {
    console.log(this)
  }
}

function login(sucesso,falha){
  /* Chamada no backend */
  // Solicitar ao servidor o login
  // O servidor vai retornar um código de sucesso ou falha
  setTimeout(() => {
    let deuCerto = true;
    if(deuCerto) {
      sucesso();
    } else {
      falha();
    }
  },1000);
}

function sucesso(){
  // Ir para pagina inicial
}

function falha(){
  // Mostrar pop-up de falha para usuario
  console.log("Deu ruim");
}
login(sucesso,falha);

// Callbacks -> A passagem de uma função como parametro para uma outra função para que 
// a mesma possa ser chamada após a execução de algum código
// -> chamar de volta 

/*
  High order functions -> Funções de mais alto nível

*/

function calculadora(operacao,num1,num2) {
  return operacao(num1,num2);
}


calculadora((num1,num2) => num1 + num2 ,5,6);
calculadora((num1) => num1*num1 ,5,6);


// function helloWorld(){
//   console.log('Hello world após 1 segundos');
//   helloWorld();
// }


// helloWorld();
/*
após 2 segundos eu quero 
*/// tempo definido em ms -> 1000 ms = 1s 
// Recursão 
/*
  Recursão -> Uma função que realiza a chamada dela mesma

*/

/*
  5! = 5*4*3*2*1
  5! = 5*4!
  4! = 4*3!
  3! = 3*2!
  2! = 2*1!
  1! = 1
*/

// function fatorial(n) {
//   // n = 1
//   if(n === 1) { 
//     return 1
//   } else {
//     return n*fatorial(n-1);
//   } 
// }

// fatorial(5);

// return 5*fatorial(4) = 5 * 24 = 120;
// return 4*fatorial(3) = 4 * 6 = 24;
// return 3*fatorial(2) = 3 * 2 = 6;
// return 2*fatorial(1) = 2 * 1 = 2;
/*
  fatorial(5) = 5*fatorial(4) = 120 -> Retorna 120
  fatorial(4) = 4*fatorial(3) = 24
  fatorial(3) = 3*fatorial(2) = 6
  fatorial(2) = 2*fatorial(1) = 2
  fatorial(1) = 1
*/

