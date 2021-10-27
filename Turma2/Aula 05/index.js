
//Declaração da função
function comprarComida(quantidade = 0){
  // const preco = quantidade * 12;
  return quantidade * 12;
  //Após o return a função é encerrada e nenhum após o mesmo será executado
  console.log("");
}

function darDesconto(preco){
  return preco * 0.7;
}

//Chamndo ou invocando a função
const retornoPreco = comprarComida(2);
console.log("Preco inicial: R$ " 
+ retornoPreco + 
" Preco com desconto: R$ " + darDesconto(retornoPreco).toFixed(2) 
);