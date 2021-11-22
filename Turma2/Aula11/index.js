let numeros = [1,5,6,8,1000,2999,2000];
const soma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
// console.log("Olá mundo!");
// console.log("Olá mundo!");
// console.log("Olá mundo!");
// console.log("Olá mundo!");

// console.log("Tamanho do array: " + numeros.length);
// for(let i = 0;i < numeros.length;i++){
  
//   console.log("Conteudo do Indice: " + i + " = " + numeros[i]);
//   if(i == 2){
//     console.log("Estou no indice 2");
//   }
// }

let nomes = [];
for(let i = 1; i<=100;i++){
  nomes.push("Nome " + i);
}
// console.log(nomes);


let html = "<ol>"

for(let i = 0;i<nomes.length;i++){
  html += "<li>" + nomes[i] + "</li>";
}

html += "</ol>";

// console.log(html);

const string = "aa AA bb cc";

let quantidade = 0;
for(let i =0; i<string.length;i++){
  if(string.charAt(i).toLowerCase() == 'a')
    quantidade++;
}

// console.log("A letra 'a' apareceu: " + quantidade + " vezes");

// 10 % 2 == 1
let qtdPares = 0;
let qtdImpares = 0;
for(let i = 1; i <= 100;i++){
  if(i % 9 == 0){
    console.log("O número: " + i + " é múltiplo de 9");
    qtdPares++;
  } 
}

console.log("Quantidade de multiplos de 9: " + qtdPares);
// console.log("Quantidade de Impares: " + qtdImpares);




/*

  1*1 = 1
  1*2 = 2
  1*3 = 3
  ...
  2*1 = 2
  2*2 = 4
  2*3 = 6
  ...
  5*1 = 5
  5*2 = 10
  5*3 = 15
  ...
  9*1 = 9
  9*2 = 18
  9*3 = 27
  ...
*/

for(let i = 1;i<=9;i++){
  for(let j = 1;j<=9;j++ ){
    console.log(i + "x" + j + " = " + i*j);
  }
  console.log('--------------');
}



