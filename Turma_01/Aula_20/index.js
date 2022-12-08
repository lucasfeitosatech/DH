/*
  Aula 20 - Funções avançadas 

  Arrow functions
  Recursão
  Callbacks (map,filter,foreach...)

*/

// forma tradcional de declaração de função
function soma(num1,num2){
  return num1 + num2;
}

// forma expressa
const subtracao = function(num1,num2){
  return num1 - num2;
}

// Forma de flecha -> Arrow function
// Notação de flecha -> = e > -> =>


/*
  Particularidades 

  Caso tenhamos um retorno com apenas uma expressão, 
  podemos omitir as {} e o return

  Caso tenhamos apenas um parametro, podemos omitir os ()

  Caso não tenhamos parametros, podemos substituir os () por 
  um _ (underline)


*/
//                     entrada        saída(retorno)
const multiplicao = (num1,num2) => num1 * num2;
const quadrado = n => n**2;
const olaMundo = _ => console.log("Olá mundo");


soma(2,3);
subtracao(10,5);
multiplicao(10,2);

// Arrow functions não funcionam como funções construtoras
function Pessoa(nome){
  this.nome = nome;
}

const carro = {
  placa:'XPTO123',
  acelerar(){
    // Possui a referência do this 
    this.placa
  },
  freiar:() => {
    // Dentro das arrow functions não possuimos a referência this do objeto
    //this.placa // undefined
  }
}


// Recursão -> É uma ação de realiazar a 
// chamada de uma função, dentro dela mesma.


for(let i = 0 ; i < 10 ; i ++){
  console.log("Mensagem sendo repetida",i);
}

function repetirMensagem(n){
  console.log("Mensagem sendo repetida",n);
  if(n === 0) 
    return;
  repetirMensagem(n -1);
}

repetirMensagem(10);

/*
  fatorial = 5! = 5*4*3*2*1
  fibonnaci
  ...
*/

// Estrutura de dados 
/*
  Pilha 
    empilhar()
    desempilhar()

*/

// Callbacks