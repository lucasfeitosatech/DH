// Modulos Nativos
// Modulos Externos
// Como criar os nossos modulos


/*

  Você deve criar uma função chamada propriedadeUnica 
  que recebe um array de objetos como parâmetro e uma string.  
  Você deve devolver um novo array de objetos, 
  tendo apenas a propriedade que foi passada como string.  

*/

let meusObjetos = [
  {
    id:1,
    nome:'teste'
  },
  {
    id:2,
    nome:'teste2'
  }
] 

function propriedadeUnica(arrayDeObjetos,propriedade){
  let array = [];
  for(let objeto of arrayDeObjetos){
    let obj = {};
    obj[propriedade] = objeto[propriedade];
    array.push(obj);
  }
  console.log(array);
};

propriedadeUnica(meusObjetos,'nome');

/*
let meusObjetos = [
  {
    id:1,
  },
  {
    id:2,
  }
] 


*/


