/*
  Aula 10 - Strings e Arrays 

  Propriedades -> Caracteristícas 
    length -> tamanho de elementos (Array) e caracteres (String)
    "lucas" 


  Metódos -> Ação que podemos fazer dentro da string ou do array para 
  obter algum tipo de resultado

  "Dot notation" -> Notação de ponto 

  Permite utilizar os metódos e propriedades de string e arrays

*/
//             01234
// tamanho = 5
/*
  Indexação 

  [] -> notação de colchetes
  [indice] -> indice -> Algum número inteiro (0,1,2,3...n) maior ou igual a zero
  [0] -> a
  [1] -> b
  ...
  tamanho = 5
  [5] -> Não existe
  [4] -> e -> último elemento
  [tamanho - 1] -> e -> último elemento
*/
//             012345
const senha = "abcde";
if (senha.length > 3) {
  //console.log("senha válida");
} else {
  //console.log("senha inválida");
}
//console.log(senha[6]);
const email = "teste@gmail.com";

if (email.includes("@")) {
  //console.log("Email válido")
} else {
  //console.log("Email inválido");
}

const usuario = " user123 ";
console.log(usuario);
console.log(usuario.trim());

/*
  @ - 1
  & - 2
  _ - 3
  % - 4
*/

//                             11222334
const mensagemCriptografada = "@@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__% @@&&&__%";
const mensagemDecodificada = mensagemCriptografada.replaceAll("@", "1")
  .replaceAll("&", "2").replaceAll("_", "3").replaceAll("%", "4");


// 1@&&&__%
// 11&&&__%
// 11222334
//console.log(mensagemDecodificada);

// Equação do segundo grau
// delta = b**2 - 4*a*C
// Raizes = (-b +- sqrt(delta))/2*a


// Arrays
/*
  Array -> Uma variável que pode armazenar multiplos valores

  Array de nomes -> Lista de nomes -> Armazena mais de um nome
  Array de notas -> Lista de notas -> Armazena mais de uma nota

*/

const media = 7.5;

// [] -> Array Vazio ou lista vazia;
// [0] -> Elemento 0
// [1] -> Elemento 1
// [2] -> Elemento 2
//              0   1   2
// Propriedade length
const notas = [6.5, 7.8, 5.4];
notas.length // Devolve o número de elementos do array -> 3
console.log(notas[2]); // 

//                0       1        2       3


const arrayMisto = [1, "abc", undefined, null, Infinity, NaN, true, function () { }];
//                0    1
const matriz = [[1,2],[3,4]];

// const primeiroArrray = matriz[0];
// console.log(primeiroArrray);

// //   0  1 
// // [ 1, 2 ]

// console.log(primeiroArrray[1]);

// const segundoArray = matriz[1];
// console.log(segundoArray[1]);


console.log(matriz[1][1])

// const campoMinado = [
//   [0,1,2,3],
//   [0,'X',1,0],
//   [0,0,0,1],
//   [1,1,2,2]
// ]

// const linha = 0
// const coluna = 2;

// if(campoMinado[linha][coluna] === 'X'){
//   // Game Over
// }


const usuarios = []; // Inicializar uma lista vazia

// push -> Adiciona um novo elemento no final do array

usuarios.push("admin")
usuarios.push("pikachu123");

// unshift -> Adiciona um novo elemento no começo do array

usuarios.unshift("ash234");

usuarios.unshift("noobmaster321");

// pop -> remove o ultimo elemento;

usuarios.pop();

// shift -> remove o primeiro elemento

usuarios.shift();


console.table(usuarios);





