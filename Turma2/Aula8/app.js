let media = 7;
let situacao = '';
if(media >= 7) {
  situacao = 'Aprovado';
  //...




  //...
} else {
  situacao = 'Reprovado';
}

function situacaoAluno(status){
  return status;
}

// Tem uma particularidade de precisar de um valor de retorno
// ? -> Verdadeiro da condição
// : -> falso da condição
//           true/false     true         false
situacao = media >= 7 ? situacaoAluno('Aprovado') : situacaoAluno('Reprovado');

situacao = media >= 7 ? 'Aprovado' 
: media >= 5 && media < 7 ? 'Recuperação'
: 'Reprovado'; 

console.log(situacao);