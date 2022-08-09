/* 
1 - Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
*/
function polegadasEmCm(polegadas = 0){
  return polegadas*2.54;
}

const retorno = polegadasEmCm(700.6);
console.log(retorno);

/* 
2 - Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br" */

function converterStringEmUrl(string){
  return `http://www.${string}.com.br`;
}

const url = converterStringEmUrl('digitalhouse');
console.log(url);
