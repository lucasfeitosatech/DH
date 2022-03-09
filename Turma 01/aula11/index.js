let nome = "Lucas";
let nome2 = "Fulano";
let nome3 = "Ciclano";
let pacote = undefined;

let outroArray = [nome,nome2,nome3,pacote];
// Array com mesmo tipo de dados 
// Array - Variavel composta que o armazente de varios valores 
// Arrays são indexados a partir do 0
//              0        1        2
let nomes = ["Lucas","Fulano","Ciclano"];
nomes.length
//                    Tamanho = 3;
// O ultimo elemento do array vai ser sempre  tamanho - 1 
nomes[0]
nomes[1] // Fulano
nomes[2] // Ciclano

nomes[4] // Undefined - Não foi definido 
// Array com tipos de dados diferentes 
let meuArray = [1,2,"Texto",true];
//               0       1
let matriz = [ 
  [2,3,1],
  [0,4,6],
  [0,5,0]
];

matriz[0][0];
matriz[0][1];
//...

//
matriz[2][2];

let notas = [];
notas.push(1);
console.log(notas);
// Adiciona um elemento no final do array;
notas.push(6.5);
console.log(notas);
// Unshift - Adiciona um elemento no começo do array
notas.unshift(7.5);
console.log(notas);

//[1,2,3] pop() -> 3
let elementoRemovido = notas.pop();
console.log(elementoRemovido);
console.log(notas);
elementoRemovido = notas.shift();
console.log(elementoRemovido);
console.log(notas);
notas[0] = 7.8;
console.log(notas);


const nomeUsuario = "Fulano";
let nomeESobrenome = nomeUsuario.split(" ");
console.log(nomeESobrenome);
//[ 'Fulano', 'Cilano', 'de', 'Beltrano' ]
if(nomeESobrenome.length > 1){
  console.log("Preencheu nome e sobrenome");
} else {
  console.log("Nome inválido");
}

const arr = [0,1,2];
arr[0] = 20;
arr.push(20);
console.log(arr);
arr[4] = 25;
arr[10] = 25;
console.log(arr[7]);

let numeros = [1,2,3,4];


console.log(inverter(numeros));







