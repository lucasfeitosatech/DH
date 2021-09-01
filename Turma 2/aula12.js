let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let filmes2 = ["star wars2", "totoro2",  "rocky2", "pulp fiction2",  "la vida es bella2"];

//1.

function convertirAMayusculas(array){
  array[0] = array[0].toUpperCase()
  array[1] = array[1].toUpperCase()
  array[2] = array[2].toUpperCase()
  array[3] = array[3].toUpperCase()
  array[4] = array[4].toUpperCase()
  return array
}

function converterMaiusculas(array){
  for(let i = 0;i < array.length;i++){
    array[i] = array[i].toUpperCase()
  }
  console.log(array);
}

//1converterMaiusculas(filmes);


//2.
function pasajeDeElementos(array1, array2) { 
  array1.push(array2.pop().  toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
 }

 function concatenarArrays(array1,array2){
   for(let i = 0; i < array2.length;i++){
      array1.push(array2[i]);
   }
   console.log(array1);
 }

 //concatenarArrays(filmes,filmes2);




 //4.
 const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  comparacionesAsiaEuropa[0] = asia[0] === europa[0]
  comparacionesAsiaEuropa[1] = asia[1] === europa[1]
  comparacionesAsiaEuropa[2] = asia[2] === europa[2]
  comparacionesAsiaEuropa[3] = asia[3] === europa[3]
}

function comparacaoEntreArrays(asia,europa){
  let comparacoes = [];
  if(asia.length === europa.length){
    for(let i = 0;i<asia.length;i++){
      comparacoes[i] = asia[i] === europa[i];
    }
  }
  console.log(comparacoes);
}

comparacaoEntreArrays(asiaScores,euroScores);