// Arrays = 

let nota1 = 10;
let nota2 = 8.5;
let nota3 = 7.5;

// Os arrays em javascript são indexados a partir do 0; 
//            0  1   2
let notas = [1,2,3,4];
notas[0]// 10
notas[1] // 8.5
notas[2] // 7.5
notas[3] // undefined - Não foi definida 
console.log(notas.length);


let arrayMisturado = ["Homem-aranha","Star wars","Outro filme",true,12];

let matriz = [
  [1,2,4],
  [3,4,3],
  [0,-1,2]
];

// linha 0 e coluna 0
matriz[0][0] // 1
// linha 0 e coluna 1
matriz[0][1] // 2
// linha 2 e coluna 2
matriz[2][2] // 2


let numeros = [];
// Adicionar um elemento no final do array
numeros.push(1);
numeros.push(5);
numeros.push(7);

// Adicionar um elemento no inicio do array
numeros.unshift(1000);
numeros.unshift(1001);
console.log(numeros);
// Remove o primeiro elemento do array e retorna o elemento removido
let elementoRemovido = numeros.shift();
// Remover o ultimo elemento do array e retorna o elemento removido 
elementoRemovido = numeros.pop();

console.log(numeros);
// acessando uma posição especifica do array e modificando seu valor
numeros[0] = 1;
numeros[1] = 2; 
numeros[2] = 3;

// sort = ordenar o array

console.log(numeros);


// Neste exercício, você terá que criar uma função 
//que retorne um array com seus elementos invertidos, 
//sem modificá-lo. Então, você deve fazer uma função que o 
//modifique e inverta a ordem de seus elementos.
// Crie a função imprimirInverso que pega um Array 
//como um argumento e imprime cada elemento em ordem 
//reversa no console (você não precisa inverter o Array).
// Crie a função inverter que recebe um Array como 
//argumento e retorna um novo invertido.

let numeros2 = [1,2,3,4];

function inverterArray (array){
  let arrayInvertido = [];
  arrayInvertido.push(array[3]);
  arrayInvertido.push(array[2]);
  arrayInvertido.push(array[1]);
  arrayInvertido.push(array[0]);
  return arrayInvertido;
}


let arr = ["abacaxi","abacate","amora"];
let arrDois = ["batata","abacate","morango"];

arr[0] == arrDois[0] ? console.log("verdade") :console.log("mentira")
arr[1] == arrDois[1] ? console.log("verdade") :console.log("mentira")
arr[2] == arrDois[2] ? console.log("verdade") :console.log("mentira")

console.log(inverterArray(numeros2));


