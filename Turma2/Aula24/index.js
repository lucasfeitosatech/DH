/*
  Recursão Direta -> Uma função que chama ela mesma 
  Recursão Indireta -> Duas funções realizam a chamada uma para a outra
*/
//       Pilha         Fila
// Call stack ou Call Queue
// Engine do Javascript
// V8 Engine
// Interpretada
function recursao(contador, maximo) {
  if (contador == maximo) return;
  else {
    console.log("Minha recursão");
    contador++;
    recursao(contador, maximo);
  }
}

//Fatorial

// Analise ou Complexidade de Algoritmos 
// O(n)
// O(logn) 
function fatorial(n) {
  if (n == 1) {
    return 1
  }
  else {
    const retorno = n * fatorial(n-1);
    return retorno
  };
}

console.log(fatorial(5));

// n = 5*fatorial(4); fatorial(5) = 120;
// n = 4*fatorial(3); fatorial(4) = 24;
// n = 3*fatorial(2); fatorial(3) = 6;
// n = 2*fatorial(1); fatorial(2)= 2;

/*

  Você tem que fazer uma repetição em massa mas nao pode utilizar nenhuma estrutura de repetição

  Como você faria isso?

  R: Recursão

*/


/*
  Front-end
    Consumo de API's usando XMLHttpRequest ou fetch
      Verbos HTTP
      Headers
      Status Code -> https://http.cat/     
    DOM: https://www.w3schools.com/js/js_htmldom.asp
    Html,CSS,JS
    React,Angular,Vue

  JavaScript
    Estrutra de Dados
    Entender o JS por debaixo dos panos 
    Node.JS 
  
*/
