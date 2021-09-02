let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella","filme teste"];
let filmes2 = ["star wars 2", "totoro 2",  "rocky 2", "pulp fiction 2",  "la vida es bella 2","filme teste 2"];


//1.
// function convertirAMayusculas(array){
//   array[0] = array[0].toUpperCase()
//   array[1] = array[1].toUpperCase()
//   array[2] = array[2].toUpperCase()
//   array[3] = array[3].toUpperCase()
//   array[4] = array[4].toUpperCase()
//   return array
// }


function converterMaiusculas(array){
  let arrRetorno = [];
  for(let i = 0;i<array.length;i++){
    arrRetorno[i] = array[i].toUpperCase();
  }
  return arrRetorno;
}

function adicionarA(array){
  let arrRetorno = [];
  for(let i = 0;i<array.length;i++){
    arrRetorno[i] = array[i] + " A";
  }
  return arrRetorno;
}


let arrMaisculo = converterMaiusculas(filmes);
let arrComA = adicionarA(arrMaisculo);
//console.log(arrComA);




//2.
function pasajeDeElementos(array1, array2) { 
  array1.push(array2.pop().  toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
  array1.push(array2.pop(). toUpperCase()) 
 }

 function passarElementosDeUmArrayParaOutro(array1, array2){
   let arr1Upper = converterMaiusculas(array1);
   for(let i = 0; i<array2.length;i++){
      arr1Upper.push(array2[i].toUpperCase()); 
   }
   return arr1Upper;
 }

 let arrUpper = passarElementosDeUmArrayParaOutro(filmes,filmes2);
 //console.table(arrUpper.sort());


 //3.
 const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

// function compararCalificaciones(asia, europa) {
//   let comparacionesAsiaEuropa = []
//   comparacionesAsiaEuropa[0] = asia[0] === europa[0]
//   comparacionesAsiaEuropa[1] = asia[1] === europa[1]
//   comparacionesAsiaEuropa[2] = asia[2] === europa[2]
//   comparacionesAsiaEuropa[3] = asia[3] === europa[3]
// }

function compararValores(asia, europa){
  let comparacoes = [];
  if(asia.length === europa.length){
    for(let i = 0;i<asia.length;i++){
      let comparacao = asia[i] === europa[i];
      comparacoes.push(comparacao);
      //comparacoes[i] = comparacao;
    }
  }

  return comparacoes;
}

let comparacoes = compararValores(asiaScores,euroScores);
console.table(comparacoes);



