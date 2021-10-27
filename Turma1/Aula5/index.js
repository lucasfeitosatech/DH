
                      //Valor pré-definido caso o parametro não seja passado
function comprarComida(quantidade = 0){
  let preco = quantidade * 12;
  return preco;
}

comprarComida();
console.log(comprarComida());

function soma(num1 = 0,num2 = 0,num3 = 0){
  const soma = num1 + num2 + num3;
  return soma;
}

soma();





