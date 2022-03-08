let media = 7.5;
let mensagem = '';

if(media >= 8){
  mensagem = "Aprovado";
} else if(media >= 5 && media < 8) {
  mensagem = "Recuperação"
} else if(media < 5) {
  mensagem = "Reprovado";
}

mensagem = media >= 8 ? "Aprovado" 
: media >= 5 && media < 8 ? "Recuperação"
: media < 5 ? "Reprovado" : ''; 

