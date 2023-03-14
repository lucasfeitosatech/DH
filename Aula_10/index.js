/*
  Aula 10 - Estrutuas de repetição

  while
  do while
  for
  
  OBS: Ternário
*/

let nome1 = 'Nome 2 Sobrenome 28';
let altura = 2.00
let peso = 65.86;

// while -> enquanto
// enquanto alguma condicao for verdadeira farei alguma coisa de forma repetida
// COntar de 1 até 100000

let numero = 0;
while(false){
  numero++; // 1
  console.log(numero); // 1
  // código a ser repetido
  // loop infinito
  // Incremento -> 
  // ++ -> Adiciona 1 na variável utilizada
  // forma simplicada de incremento
  // numero++; // sempre incrementar 1 no valor da variável
  // forma tradicional de incremento
  //         1    + 1;
  // numero = numero + 100; // 2
  // forma tradicional simplicada 
  // += 
  // re-atribuição somando 100 no valor atual da variável

  // Decremento
  // numero--;
  // numero = numero - 100;
  // numero -= 20;
}

// do while -> Garante que o código a ser repetido vai executar ao menos uma vez

// faca algo ao menos uma vez enquanto alguma condição for verdadeira

do {
  numero++; // 1 
  //console.log(numero);
} while(numero < 10)


/*
  for -> Resumo das estruturas de repetições

  Sempre teremos: 

  1 - Uma variável inicializada com algum valor 
  2 - Teste de condição (Enquanto algo for verdadeiro eu faço algo) - Critério de parada
  3 - Incremento ou Decremento (Passo)

*/
// Fracamente tipado -> Infere o tipo da variável 
// Fortemente tipada -> Nós definimos o tipo de cada variável
let num = 1;
num = 'oi';
for(let numero = 100; numero >= 0 ; numero = numero - 10){
  let quadrado = numero*numero;
  /*
    numero = 0 ; 0 <= 5 -> true -> Executa o código -> Incremento
    numero = 1 ; 1 <= 5 -> true -> Executa o código -> Incremento
    numero = 2 ; 2 <= 5 -> true -> Executa o código -> Incremento
    ...
    numero = 5 ; 5 <= 5 -> true -> Executa o código -> Incremento
    numero = 6 ; 6 <= 5 -> false -> Encerra o loop


  */
  console.log(numero);

  // Array -> Coleções dados 
}
// index -> Arrays que são indexados
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
  Dev Júnior 

  Consumir uma API -> Fetch, XMLHttpRequest
    GET,POST,PUT,DELETE
    Status Code 
      200 - OK 
      404 - Not Found -> Não encontrado

  Receber um JSON 
  Apresentar dados na tela - DOM -> Frontend 2 

  Receber dados de um formulário 
  Criar um JSON 
  E enviar para a API


*/



