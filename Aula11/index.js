const fs = require('fs');
/*
  Aula 11

  Estruturas de repetição

  - Realizam tarefas repetidas em masa 
  - Evitam trabalhos manuais 

  - for 
  - while
  - do while

*/

// for 
// para um criterio inicial até um determinado critério de parada faca alguma coisa
/*
  Critério inicial -> contador = 0;
  Critério de parada -> contador < 1000;
  Incremento ou Passo -> contador++
*/
//                       0 < 1000
/*
  continue -> Ignorar a repetição atual e vai para a proxima iteração;
  break -> Encerra o loop;

*/
for(let contador = 0; contador < 1000; contador++) {
  if(contador % 2 !==  0){
    continue;
  }
  //console.log(contador);
}

// Enquanto alguma condição for verdadeira faca alguma coisa

let contador = 0;
while(contador < 1000){
  //console.log(contador);
  contador++;
}

// do while
/*
  No do while, algo sempre vai ser executado pelo menos uma vez 
*/

// faca algo enquanto alguma condicao for verdadeira
do {
  //console.log('Executou pelo menos uma vez');
} while(false);



// let soma = 0;
// //       0   + 1 = 1
// soma = soma + 1;
// soma += 1;//
// soma++; // Só vai servir para somar 1 na variavel
// ++soma;



/*
  Utilizar as estruturas de repetição para percorrer arrays;
*/
//                0         1         2
let frutas = ['abacaxi','laranja','limão'];
frutas[3];// undefined
for(let i = 0;i < frutas.length;i++){
  /*  
    i = 0; frutas[i] = abacaxi ; fruta = abacaxi
    
    i++ -> 1 < frutas.length (3) -> 1 < 3 -> true

    i = 1; frutas[i] = laranja; fruta = laranja

    i++ -> 2 < frutas.length (3) -> 2 < 3 -> true

    i = 2; frutas[i] = limão; fruta = limão

    i++ -> 3 < frutas.length (3) -> 3 < 3 -> false

    Loop Encerado

  */
  const fruta = frutas[i];
  //console.log(fruta);

}



// Estou obtendo a minha lista de dados de outro arquivo
const data = require('./data');

let html = '<ul>';



for(let i = 0;i<1000;i++){
  const item = data[i];
  html += `<li>${item}</li>`;
}
// Jogar o conteudo da variavel html no arquivo index.html
html += '</ul>';
fs.writeFileSync('./index.html',html);





