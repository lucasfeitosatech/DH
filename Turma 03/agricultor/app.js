let readlineSync = require("readline-sync");
function Produto(nome, preco, quantidade) {
  this.nome = nome;
  this.preco = preco;
  this.quantidade = quantidade;
}

let loja = {
  produtos: [
    { nome: "Alface", preco: 5, quantidade: 50 },
    { nome: "Tomate", preco: 9, quantidade: 20 },
  ],
  calcularLucroTotal() {
    let lucroTotal = 0;
    for(let i = 0; i<this.produtos.length;i++){
      const produto = this.produtos[i]; // Acessando cada produto dentro da minha lista individualmente
      const lucroProduto = produto.preco * produto.quantidade;
      lucroTotal += lucroProduto
    }
    console.log(`\nO Lucro total é de : R$ ${lucroTotal}`)
  },
  pesquisarProduto() {},
  valorMaior() {},
  classificarProdutos() {},
  mudarValor() {},
  lucroImposto() {},
};

console.log(`

  Bem vindo ao Agro App 

  1 - Adicionar Produto
  2 - Calcular o lucro total de todos os produtos;
  3 - Pesquisar um produto pelo nome e calcular seu lucro total;
  4 - Receber um valor e indicar todos os produtos que venderam mais que esse valor;
  5 - Classifique todos os produtos pela quantidade de dinheiro que geraram.
  6 - Encontre um produto e atribua a ele um novo valor
  7 - Calcule o lucro total após pagar 45% do lucro em impostos.

`);

while (true) {
  const opcao = readlineSync.question("\nQual opção você vai escolher: ");
  if (opcao == "1") {
    console.log(
      "\nPara cadastrar um novo produto entre com as seguintes informações do produto"
    );
    const nome = readlineSync.question("Digite o nome: ");
    const preco = readlineSync.question("Digite o preco: ");
    const quantidade = readlineSync.question("Digite a quantidade: ");
    loja.produtos.push(new Produto(nome, Number(preco), Number(quantidade)));
    //Requisicao para o back-end // Salvar no banco de dados 
  } else if (opcao == 2){
    loja.calcularLucroTotal();
  }
}
