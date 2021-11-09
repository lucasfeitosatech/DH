function soma(x = 0, y = 0, z = 0) {
  let soma = x + y + z;
  return soma;
}

function subtracao(x, y) {
  return x - y;
}

function multiplicacao(x, y) {
  return x * y;
}

function divisao(x, y) {
  return x / y;
}

function quadrado(x) {
  const quadrado = multiplicacao(x, x);
  return multiplicacao(x, quadrado);
}

//Nível 2;
// console.log(soma(5,6));
// console.log(subtracao(3,5));
// console.log(multiplicacao(10,20));
// console.log(divisao(10,0));

function mediaDeTres(p1, p2, p3) {
  const sum = soma(p1, p2, p3);
  const media = divisao(sum, 3);
  if (media >= 7) {
    console.log("Aluno aprovado");
  } else if (media >= 5 && media < 7) {
    console.log("Aluno de recuperação");
  } else {
    console.log("Aluno reprovado");
  }

  return media;
}

function menu(opcao) {
  switch (opcao) {
    case 1:
      return "Salada";
    case 2:
      return "Refrigerante";
    case 3:
      return "Filé";
    // default:
    //   return "Opção inválida";
  }

  if (typeof opcao != "number") {
    return "Opção inválida";
  }

  if (opcao == 1) return "Salada";
  else if (opcao == 2) return "Refrigerante";
  else if (opcao == 3) return "Filé";
  // return "Opção inválida";
  else
    return opcao == 1
      ? "Salada"
      : opcao == 2
      ? "Refrigerante"
      : opcao == 3
      ? "Filé"
      : "Opção inválida";
}

function calculadora(x, y, operacao) {
  if (operacao == "+") {
    return soma(x, y);
  }
  else if (operacao == "-"){
    return subtracao(x, y);
  }  
  else if (operacao == "*") {
    return multiplicacao(x, y);
  }
  else if (operacao == "/") {
    return divisao(x, y);
  } else {
    return "Operação inválida";
  }

  return operacao == "+" ? soma(x,y)
  : operacao == "-" ? subtracao(x,y)
  : operacao == "*" ? multiplicacao(x,y)
  : operacao == "/" ? divisao(x,y) 
  : "Operação inválida";
    
}

console.log(calculadora(5,3,"/"));
