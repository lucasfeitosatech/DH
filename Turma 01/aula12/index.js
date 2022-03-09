// Indexados a partir do 0  
// tamanho do array - 1            
let numeros = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,"Teste"];

//Acessar elementos específicos de um array

numeros[0];
numeros[1];
numeros[2];

//...//
//Forma de acessar o último elemento do array de forma dinamica
console.log(numeros[numeros.length - 1]);
console.log("Tamanho do array = " + numeros.length);

// Modificar cada um dos elementos de um array e imprimi-los no console.
let alfabeto = ["a","b","c","z"];
alfabeto[0] = "B";
alfabeto[1] = "C";
alfabeto[2] = "D";
alfabeto[3] = "E";
console.log(alfabeto);

//Adicionar elementos a um array.

// Push - Adiciona no final
alfabeto.push("F");
console.log(alfabeto);
// Unshift = Adiciona no começo
alfabeto.unshift("A");
console.log(alfabeto);

if(alfabeto[0] == "A"){
  console.log("Primeira posição do alfabeto está correta");
}

//Extrair elementos de um array.

// Remove o último elemento e retorna o elemento removido
alfabeto.pop();
// Remove o primeiro elemento e o retorna
alfabeto.shift();


const pontuacaoA = [5,6,7];
const pontuacaoB = [7,3,10];

if(pontuacaoA[0] > pontuacaoB[0]){
  console.log("Na primeira rodada o jogador A venceu")
} else {
  console.log("Na primeira rodada o jogador B venceu")
}

if(pontuacaoA[1] > pontuacaoB[1]){
  console.log("Na segunda rodada o jogador A venceu")
} else {
  console.log("Na segunda rodada o jogador B venceu")
}

if(pontuacaoA[2] > pontuacaoB[2]){
  console.log("Na terceira rodada o jogador A venceu")
} else {
  console.log("Na terceira rodada o jogador B venceu")
}


//Comparar elementos de um array com os elementos de outro. 

let meuArray = [0,1,2,3]; // [] 
                          // [3,2,1,0]
let meuArray2 = [5,6,7,8];
// invertArray - [3,2,1,0];

function inverterArray(array){
  let novoArray = [];
  novoArray.push(array.pop());
  novoArray.push(array.pop());
  novoArray.push(array.pop());
  novoArray.push(array.pop());
  

  // novoArray = []
  // array = [0,1,2] novoArray = [3]
  // array = [0,1] novoArray = [3,2];
  // array = [0] novoArray = [3,2,1];
  // array = [] novoArray = [3,2,1,0];

  return novoArray;

}
console.log(meuArray);
console.log(inverterArray(meuArray));
console.log(inverterArray(meuArray2));





