
//                 0         1         2         3
const nomes = ["fulano1","fulano2","fulano3","fulano4"];
//A. Acessar elementos específicos de um array.
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);
console.log(nomes[4]); // undefined -> não definido

//B. Modificar cada um dos elementos de um array e imprimi-los no console.

nomes[0] = "Ciclano 1";
nomes[3] = "Ciclano 3";



//C. Adicionar elementos a um array.
// push -> adiciona no final
// unshift -> adiciona no inicio

nomes.push("Ciclano 4");
nomes.unshift("Ciclano 0");


//D. Extrair elementos de um array.
// pop -> remove o ultimo elemento
// shift -> remove o primeiro elemento

console.table(nomes);


//E. Comparar elementos de um array com os elementos de outro. 
//                    0   1   2
let participanteA = [6.5,7.8,9.0];
let participanteB = [6.0,8.1,7.5];

if(participanteA[0] > participanteB[0]){
  console.log("Participante A ganhou na primeira rodadada")
} else {
  console.log("Participante B ganhou na primeira rodadada")
}

if(participanteA[1] > participanteB[1]){
  console.log("Participante A ganhou na segunda rodadada")
} else {
  console.log("Participante B ganhou na segunda rodadada")
}

if(participanteA[2] > participanteB[2]){
  console.log("Participante A ganhou na terceira rodadada")
} else {
  console.log("Participante B ganhou na terceira rodadada")
}

// Quem foi o vencedor

const usuarios = ["admin","noobmaster98","pikachu123"];

/*
  Crie a função imprimirInverso que pega um Array 
  como um argumento e imprime cada elemento em ordem reversa 
  no console (você não precisa inverter o Array).
*/
// sempre vai receber um array com 3 elementos
function imprimirInverso(array){
  console.log(array[2]);
  console.log(array[1]);
  console.log(array[0]);
}

imprimirInverso(usuarios);

/*
  Crie a função inverter que recebe um Array 
  como argumento e retorna um novo invertido.
*/

function inverter(array){
  const novoArray = [];
  novoArray[0] = array[2];
  novoArray[1] = array[1];
  novoArray[2] = array[0];
  return novoArray;
}

console.table( inverter(usuarios) );