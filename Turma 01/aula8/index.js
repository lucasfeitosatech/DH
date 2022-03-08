//Controles de Fluxo da aplicação 

//Se (For verd(adeiro, então execute o que tiver dentro das chaves)
const media = (1 + 8 + 10)/3
if(media >= 7){
  console.log("Aluno aprovado");
} else if(media < 7 && media >= 5) {
  console.log("Aluno de recuperação");
} else {
  console.log("Aluno reprovado");
}

 media >= 7 
 ? console.log("Aprovado") 
 : media < 7 && media >= 5
 ? console.log("Aluno de recuperação")
 : console.log("Aluno reprovado")

console.log(`

  Bem-vindo ao meu restaurante: 

  Selecione a opção abaixo desejada: 

  1 - Pizza
  2 - Hamburguer
  3 - Frango
  4 - Carne
  5 - Peixe

`);

const opcao = 1;

switch(opcao){
  case 1:   
    console.log("Pizza");
    break;
  case 2:
    console.log("Hamburguer");
    break;
  case 3:
    console.log("Frango");
    break;
  case 4:
    console.log("Carne");
    break;
  case 5:
    console.log("Peixe");
  default: 
    console.log("Opção inválida");
}

