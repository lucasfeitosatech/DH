//A. Acessar elementos específicos de um array.
//              0   1   2
const notas = [7.5, 9, 6.4,];
console.log(notas[0])
console.log(notas[1])
console.log(notas[2])
console.log(notas[3]) // undefined

//B. Modificar cada um dos elementos de um array e imprimi-los no console.
notas[0] = 6.3;
notas[1] = 8.5;
notas[2] = 7.8;

console.log(notas.length)

//C. Adicionar elementos a um array.

notas.push(9.5)// Adiciona no final
notas.unshift(5.45) // Adiciona no inicio

//D. Extrair elementos de um array.

notas.pop()// remove no final
notas.shift() // remove no inicio


//E. Comparar elementos de um array com os elementos de outro. 

let participanteA = [5,8,8.7];
let participanteB = [6.5,7,9];

if(participanteA[0] > participanteB[0]){
  // Ponto para o participante A na primeira rodada
} else {
  // Ponto para o participante B na primeira rodada
}

if(participanteA[1] > participanteB[1]){
  // Ponto para o participante A na segunda rodada
} else {
  // Ponto para o participante B na segunda rodada
}

if(participanteA[2] > participanteB[2]){
  // Ponto para o participante A na terceira rodada
} else {
  // Ponto para o participante B na terceira rodada
}

// quem foi o vencedor

// todos os arrays de entrada vão ter 4 elementos
function inverter(array = []){
  const novoArray = [];
  novoArray[0] = array[3];
  novoArray[1] = array[2];
  novoArray[2] = array[1];
  novoArray[3] = array[0];
  console.log(novoArray);
}

const nomes = ["fulano1","fulano2","fulano3","fulano4"];
inverter(nomes); // [fulano4,fulano3,fulano2,fulano1];
console.warn