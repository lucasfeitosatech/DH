let numeros = [15, 20, 3, 2, 6.7];
// Acessar elementos específicos de um array.
numeros[0]; // Acessando o valor da posicao 0 do meu array = 15
numeros[10]; // undefined - Não foi definido ainda
// Modificar cada um dos elementos de um array e imprimi-los no console.

//console.log(numeros[3]);
numeros[3] = 1000000;
//console.log(numeros[3]);

// Adicionar elementos a um array.

// push - adiciona elementos no final do array
numeros.push(5);
// unshift - adiciona elementos no inicio do array
numeros.unshift(-1);

// Extrair elementos de um array.
// Pop - remove do final do array
numeros.pop();
// shift - remove do inicio do array
numeros.shift();

// Comparar elementos de um array com os elementos de outro.

let numeros2 = [0, 1, 2, 4];
//console.log(numeros[0] == numeros2[1] || numeros[2] == numeros2[3])

//             0   1   2   3   4
let numbers = [22, 33, 54, 66, 72];
// 0 -> primeiro
// numbers.length - 1 -> último elemento do array
console.log(numbers[numbers.length - 1]); // undefined

// Matriz
let grupoDeAmigos = [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
];
console.log(grupoDeAmigos[2][1]);

let str = "uma string qualquer";
grupoDeAmigos = [
  [45, 89, 0],
  ["Digital", "House", true],
  ["string", "123", "false", 54, true, str],
];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);

function inverterArray(array) {
  let arrayInvertido = [];
  arrayInvertido.push(array[3]);
  arrayInvertido.push(array[2]);
  arrayInvertido.push(array[1]);
  arrayInvertido.push(array[0]);
  return arrayInvertido;
}

function somarArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

function join(array) {
  let join = array[0] + array[1] + array[2] + array[3];
  return join;
}

console.log(numeros2);
console.log(inverterArray(numeros2));
console.log(somarArray([1000, 15, 22, 731]));
console.log(join(["dhuaisudh", "321321321", "3213dhasiud", "Ultimo texto"]));

let filmes = [
  "star wars",
  "matrix",
  "mr. robot",
  "o preço do amanhã",
  "a vida é bela",
];

// Os filmes devem estar todos em letras maiúsculas.
// Para isso, crie uma função que recebe um array
// por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().

function converterArrayParaMaisculas(array) {
  let arrayMaisculo = [];
  arrayMaisculo.push(array[0].toUpperCase());
  arrayMaisculo.push(array[1].toUpperCase());
  arrayMaisculo.push(array[2].toUpperCase());
  arrayMaisculo.push(array[3].toUpperCase());
  arrayMaisculo.push(array[4].toUpperCase());

  // array[0] = array[0].toUppperCase();
  // array[1] = array[1].toUppperCase();
  // array[2] = array[2].toUppperCase();
  // array[3] = array[3].toUppperCase();
  // array[4] = array[4].toUppperCase();

  return arrayMaisculo;
}

let filmesAnimados = [
  "Toy Story",
  "Procurando Nemo",
  "Kung-fu Panda",
  "Wally",
  "Fortnite",
];

console.log(filmes);
console.log(converterArrayParaMaisculas(filmes));

// Em seguida, crie uma função que receba dois arrays como parâmetros,
// para poder adicionar os elementos contidos no segundo array, dentro do primeiro,
// a fim de retornar um único array com todos os filmes como seus elementos.

function adicionarElementos(array, array2) {
  array.push(array2[0]);
  array.push(array2[1]);
  array.push(array2[2]);
  array.push(array2[3]);
  array.push(array2[4]);
  return array;
}

let todosOsFilmes = adicionarElementos(filmes, filmesAnimados);
console.log(todosOsFilmes);
let intrusoRemovido = todosOsFilmes.pop();
console.log(todosOsFilmes);
console.log(intrusoRemovido);

//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas
//e nos diga se elas são iguais ou diferentes.

function compararPontuacoes(asia, euro) {
  if (asia[0] == euro[0]) {
    console.log("Na primeira rodada os dois são iguais");
  } else {
    console.log("Na primeira pontuação as duas são diferentes");
  }
}

// Estruturas de Repetição // Laços de repetição

// Para um indice começando em 0 ate 10 e o indice indo de um em um faca alguma coisa

// let indice = 0 -> Ponto de partida ou Criterio inical
// indice < 10 -> Critério de parada do laço de repetição
// indice++ -> O Incrimento do nosso ponto de partida ou o passo do ponto de partida
// indice++ -> Adicionando 1 em indice
// indice++ -> indice += 1 -> indice = indice + 1
// indice = indice + 2 -> indice += 2
//              0  1  2  3
// let numeros = [10,20,30,40];
// let soma = 0;
// numeros[0];
let soma = 0;
for (let i = 1; i < 1000; i++) {
  soma += i;
}

console.log(`A soma de 1 até 1000 é de: ${soma}`);
