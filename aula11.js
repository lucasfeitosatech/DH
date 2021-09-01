/*

Crie um loop utilizando for que se repita 5 vezes. 
Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for, while, do while. 

*/
let arr = [0,1,2,3,4];

// for(let i = 0; i < 5 ; i = i + 1){
//   if(i === 4){
//     continue;
//   }
//   //console.log("Olá mundo " + i);
// }

let contador = 0;

// do {
//   console.log("Olá mundo " + contador);
//   contador++;
// } while(false)

/* 
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: 
A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) 
sejam mostrados os números das repetições no console.
*/



// for (let i = 1; i <= 10;i = i++){
//   if(i % 2 != 0){
//     console.log(i);
//   }
  
// }


/*
  Crie uma tabuada utilizando o for. Dica: 
  Para essa tarefa você irá precisar utilizar dois loops (for).
*/

// for(let i = 1; i < 10 ; i++){
//   console.log(`Tabuada de ${i} \n`);
//   for(let j = 1;j< 10;j++){
//     //console.log(i + "x" + j + " = " + (i*j));
//     console.log(`${i} x ${j} = ${i*j}`);
//   }
//   console.log('\n');
// }


let arrTexto = ["texto1" , "texto2" , "texto3"];
function converterArrayParaMaisculo(array){

  for(let i = 0; i< arrTexto.length;i++){
    array[i] = array[i].toUpperCase();
  }
  console.log(array);
}

converterArrayParaMaisculo(arrTexto);



