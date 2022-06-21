// Aula 22
/*
  Funções avancadas
    - Arrow Functions
    - Callbacks
    - Recursão
  Arrays avançados
    - map
    - forEach
    - reduce
    - filter
    - sort
    - 
*/


// - Arrow Functions

// Declaração tradicional
function minhaFuncao(param1,param2){
  //console.log("Minha Função");
}
//Chamada da função
minhaFuncao();
/*
  Não precisa da palavra reservada function
  Inicia com o () -> passagem de parametros
  Após os () vem a notação de "flecha" =>
  Seguimos com abertura e fechamento das {} 
*/
const minhaFuncao2 = (param1,param2) => {
  //console.log("Minha Arrow Function");
}

// function quadrado(n){
//   return n*n;
// }
/*
  Quando temos apenas um parametro, não é necessário o uso dos ()
  Quando temos um retorno simples podemos igonorar o uso das {} e da palavra 
  reservada return;
*/


// Chamada a arrow function
//console.log(quadrado(2));
minhaFuncao2();

const meuObjeto = {
  func1:function(){
    //console.log(this.prop1);
  },
  func2:() => {
    // Contexto Léxico
    //console.log(this.prop1);
  },
  prop1:5
}

const obj = {
  prop1:'Teste',
  prop2:'Teste 2'
}


/*


*/


//-Callbacks

// Assincronos -> Vão executar fora de ordem
// Sincronos -> Vão executar em ordem
// 1s -> 1000ms

/*
  Chamar de volta
  callback -> A Passagem de uma função como parametro para ser executado posteriormente

*/
const callback = () => {
  //console.log("3 segundos após...");
};

setTimeout(callback,3000);

meuObjeto.func1();
meuObjeto.func2();


let array = [1,2,4,6,10,90];

for(let i = 0;i<array.length;i++){
  //console.log(array[i]);
}

// 


// function meuCallBack(valorAtual,indice){
//   console.log(`Valor Atual: ${valorAtual} e indice Atual: ${indice}`);
// }
array.forEach(valor => {})//console.log(valor));
const quadrado = n => n*n;
console.log(array.map((valor) => valor*3));

let palavras = ['teste','teste2','palavra x','palavra 5'];
palavras.map(palavra => palavra.toUpperCase());
const reducao = palavras.reduce((acc,valorAtual) => acc + ' ' + valorAtual,' Meu valor inicial');
console.log(reducao);

const numreros2 = [5,6,7,8,0,20];

//
const soma = numreros2.reduce((acc,valorAtual) => {
  return acc + valorAtual;
});
console.log(soma);












