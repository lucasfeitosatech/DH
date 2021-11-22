for(let i = 1;i<=5;i++){
  //console.log( i + " Olá mundo " + i);
}

/* Crie um loop for de 1 a 10, em que exiba no console 
apenas o valor das repetições de números ímpares. Dica: 
A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) 
sejam mostrados os números das repetições no console. */

let qtdPares = 0;
let qtdImpares = 0;
for(let i = 0;i<=10;i++){
  if(i % 2 == 0){
    //console.log("O número " + i + " é par");
    qtdPares++;
  } else {
    //console.log("O número " + i + " é ímpar");
    qtdImpares++;
  }
}

//console.log("Quantidade de impares: " + qtdImpares + " Quantidade Pares: " + qtdPares);


// Crie uma tabuada utilizando o for. 
// Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

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

for(let i = 1;i<=10;i++){
  //console.log("\nA tábuada de " + i + " é: ");
  for(let j = 1;j<=10;j++){
    //console.log(i + "X" + j + '=' + i*j);
  }
  //console.log("Fim da iteração " + i + "\t\n");
}

let numeros = [1,2,3,4,5,6,10,20,-1,"teste",true];
function imprimirInverso(array){
  let arrayRetorno = [];
  const len = array.length;
  for(let i = 0 ; i<len;i++){
    arrayRetorno[i] = array.pop();
  }
  return arrayRetorno;
}

console.log(imprimirInverso(numeros));

