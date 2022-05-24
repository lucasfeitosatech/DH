//Arrays
/*
  Array -> Uma váriavel ou uma coleção de dados de forma indexada

  Os elementos do array são indexados a partir do 0 

  O primeiro elemento de cada array vai ser sempre o indice 0

  O útimo elemento do array vai ser sempre o tamanho do array - 1
  // 3 - 1 = 2

*/

// let nome1 = 'teste 1';
// let nome2 = 'teste 2';
// let nome3 = 'teste 3';
// [] -> Array vazio
//               0          1         2
// Array com dados do mesmo tipo
let nomes = ['Fulano1','Fulano2','Fulano3'] 
// Array com dados de tipos diferentes
let arrayMisto = [0,'texto',true,5.3];

// Acessar elementos específicos de um array.

// Fulano 1
nomes[0]
// Fulano 2
nomes[1]

// Fulano 2
// Tamanho do array
let tamanho = nomes.length; // 3 

// Fulano 3
//           2
nomes[ tamanho - 1 ];
let resposta = "Minha resposta"

// Modificar cada um dos elementos de um array e imprimi-los no console.
console.log(nomes);
nomes[0] = resposta;
nomes[1] = '90';
nomes[2] = 'Outra coisa mais dois';
console.log(nomes);

let perguntas = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3'];
let respostas = ['Resposta 1','Resposta 2','Resposta 3'];


// Adicionar elementos a um array.

/*
  Métodos -> Podem realizar alguma ação dentro dos nossos arrays

  // push -> Adicionar um elemento no final do array
  // unshift -> Adiciona um elemento no inicio do array
*/
console.log(perguntas,respostas,'\n');
perguntas.push('Pergunta 4');
respostas.push('Resposta 4');

console.log(perguntas,respostas,'\n');

perguntas.unshift('Quem descobriu o Brasil?');
respostas.unshift('Indios');

console.log(perguntas,respostas,'\n');


//console.log('111.111.222-00'.replace(/\D/g,''));


// Extrair elementos de um array.

/*
  Métodos -> Podem realizar alguma ação dentro dos nossos arrays

  // pop -> Remove o último elemento do array
  // shift -> Remove o primeiro elemento
*/


let numeros = [2,6,7,8,9];
// remove o 9
numeros.pop();

// remove o 2
numeros.shift();





