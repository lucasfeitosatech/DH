/* Você deve criar uma função chamada 
propriedadeUnica que recebe uma array de 
objetos como parâmetro e uma string.  
Você deve devolver um novo array de objetos, 
tendo apenas a propriedade que foi passada como string.   */


const banco = require('../Aula_17/exercicio');
console.log(banco.clientes);



function propriedadeUnica(arrayDeObjetos,chave){
  let novoArray = [];
  // Percorreu a lista
  for(let objeto of arrayDeObjetos){
    // Verifica se o para cada objeto no array, temos a chave especificada
    if(objeto[chave]){
      const novoObjeto = {};
      novoObjeto[chave] = objeto[chave];
      novoArray.push(novoObjeto);
    }
  }
  return novoArray;
}

console.log(propriedadeUnica(banco.clientes,'prop1'));