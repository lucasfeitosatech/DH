/*
  Metódos avançados de arrays 

  forEach
  map
  find 
  filter

  Os metódos acima seguem um padrão de callback 

  function(elemento,index,array){
    return ..
  }

  (elemento,index,array) => {
    return ...
  }

  reduce 

  Visam substituir soluções tradicionais que utilizam for, while e afins

*/

let palavras = ["Abacaxi","Melão","Computador","Televisão"];
let palavrasMinusculas = palavras.map(palavra => palavra.toLowerCase());
let palavrasMaiusculas = palavras.map(function(palavra){
  return palavra.toUpperCase();
});


// for (let index = 0; index < palavras.length; index++) {
//   const element = palavras[index];
//   mostrarElemento(element,index);
// }

// forEach -> Metódo de array que recebe uma função como 
// parametro e a executa para cada elemento

function mostrarElemento(elemento,index){
  //console.log(elemento,index);
}

/*
  Callback -> A passagem de uma função
  como parametro para outra função 
  e esta vai ser executada em algum
  momento oportuno da implementação
*/
palavras.forEach(mostrarElemento);
palavras.forEach(function(elemento,index){
  //console.log(elemento,index)
})
palavras.forEach((elemento,index) => {});


/*
  Map -> Gerar um novo array, 
  com novas informações derivadas dos elementos de um array inicial
*/
let numeros = [1,2,3,4,5,6,7,8,9];
let numerosMultiplicadosPor2 = numeros.map((elemento,index) => elemento*2);
let numerosMultiplicadosPor3 = numeros.map(function(elemento,index){
  return elemento*3;
});

console.log(numerosMultiplicadosPor2,numerosMultiplicadosPor3);


/* 
find -> Realizar uma busca no array 

recebar um callback, cujo retorno é uma condição 

caso essa condição seja verdadeira -> retorna o elemento

caso a condição seja falsa para todos os elementos retornar undefined

*/

palavras = ["Abacaxi","Melão","Computador","Televisão","Cachorro","Carro"];
for (let index = 0; index < palavras.length; index++) {
  const element = palavras[index];
  if(element === 'Computador'){
    return element;
  }
}
const palavraEncontrada = palavras.find(palavra => palavra === 'Computador');
/*
  filter => Gera um novo array 

  recebar um callback, cujo retorno é uma condição 

  caso essa condição seja verdadeira -> adiciona no novo array o elemento

  caso a condição seja falsa -> Segue para o próximo elemento




*/

const novoArray = []
for (let index = 0; index < palavras.length; index++) {
  const element = palavras[index];
  if(element.includes('A')){
    novoArray.push(element);
  }
}
const palavrasComC = palavras.filter(palavra => palavra.includes('A'));
console.log(palavrasComC);

/*
  reduce -> Reduz todos os elementos do array em uma informação única
  derivada dos elementos de um array inicial 

  callback 
    acc -> Variável que vai acumular os valor da nova informação para cada elemento
    valorAtual -> Elemento atual que está sendo processado na iteração 
    Indice -> Indice da atual da iteração
    array -> próprio array utilizado

    o valor do callback vai ser armazenado na variável acumuladora (acc)
  
  valorInicial -> É o valor inicial da variável acumuladora;
*/

let numeros2 = [7,8,9]; // 24 
let soma = 0;
for (let index = 0; index < numeros2.length; index++) {
  const element = numeros2[index];
  soma += element;
}
let media2 = soma/numeros2.length;

soma = numeros2.reduce((acc,valorAtual) => acc + valorAtual,0);
const media = soma/numeros2.length;
// acc -> 0 return 0 + 7;
// acc -> 7 return 7 + 8
// acc -> 15 return 15 + 9;
// acc -> 24

class Aluno {
  constructor(nome = '', faltas = 0, notas = []) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.addFaltas = function faltas() {
      this.faltas++;
    }
  }

  media() {
    let total = this.notas.reduce((acc, valor) => (acc + valor));
    let media = total / this.notas.length;
    return media
  }
  
  metodo2(){

  }

  metodo3(){

  }
}

const aluno = new Aluno();
aluno.media();
aluno.faltas();












