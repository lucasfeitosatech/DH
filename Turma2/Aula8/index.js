function soma(x,y){
  return x + y;
}

function subtracao(x,y){
  return x - y;
}

function multiplicacao(x,y){
  return x * y;
}

function divisao(x,y){
  return x / y;
}

function quadrado(x){
  return multiplicacao(x,x); //5*5 = 25;
}

function mediaDeTres(prova1,prova2,prova3){
  const soma1 = soma(prova1,prova2);
  const soma2 = soma(soma1,prova3);
  const media = divisao(soma2,3);
  if(media >= 7){
    console.log("Aluno aprovado");
  } else if (media >= 5 && media < 7) {
    console.log("Aluno de recuperação");
  } else {
    console.log("Aluno reprovado");
  }
}


//1 - Frango
//2 - Peixe
//3 - Carne

function menu(opcao){
  switch(operacao){
    case 1:
      console.log("Frango");
      break;
    case 2:
      console.log("Peixe");
      break;
    case 3:
      console.log("Carne");
      break;
    default:
      console.log("Opção inexistente");
  }

  if(opcao == 1){
    console.log("Frango");
  } else if(opcao == 2){
    console.log("Peixe");
  } else if(opcao == 3){
    console.log("Carne");
  } else {
    console.log("Opção inexistente");
  }

  const ternario = opcao == 1 ? 'Frango' 
  : opcao == 2 ? 'Peixe' 
  : opcao == 3 ? 'Carne' 
  : 'Opção inexistente';
  console.log(ternario);

}

function calculadora(x,y,operacao){
  return operacao == '+' ? soma(x,y) 
  : operacao == '-' ? subtracao(x,y) 
  : operacao == '*' ? multiplicacao(x,y) 
  : operacao == '/' ? divisao(x,y) : NaN

  if(operacao == '+')
    return soma(x,y);
  else if (operacao == '-')
    return subtracao(x,y);
  else if (operacao == '*')
    return multiplicacao(x,y);
  else if (operacao == '/')
    return divisao(x,y);
  else
    return NaN;

  switch(operacao){
    case '+':
      return soma(x,y);
    case '-':
      return subtracao(x,y);
    case '*':
      return multiplicacao(x,y);
    case '/':
      return divisao(x,y);
    default:
      return NaN;
  }

  
}

console.log(calculadora(5,3,'/'));