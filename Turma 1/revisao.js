let minhaImportacao = require('./aula19/meubanco');

for(let i = 0;i<minhaImportacao.pessoas.length - 1;i++){
  let pessoa = minhaImportacao.pessoas[i];
  let contador = 0 ; 
  let soma = 0;

  if(pessoa.altura < 1.80){
    contador++;
    soma += pessoa.idade;
  }

  console.log(soma/contador);

}

minhaImportacao.pessoas.forEach(pessoa => {

})

for(let pessoa of minhaImportacao.pessoas ){

}


//APenas o Index
for(let index in minhaImportacao.pessoas){
  let pessoa = minhaImportacao.pessoas[index];
}


