/*
  Aula 16

  Revisão de Objetos

  Função construtora

  Exercícios 

*/

// Um objeto sem nada (propriedades e metódos é considerado um objeto vazio)
// Objeto literal
const pessoa = {
  nome:'Fulano de Tal',
  dataDeNascimento:'25/09/1993',
  idade:29,
  peso:87,
  altura:2.00,
  imc(){
    // dot notation 
    // pessoa.peso
    // pessoa.altura
    // // notacao de arrays
    // pessoa['peso'] === pessoa.peso
    // pessoa['altura'] === pessoa.altura
    // // Metódo -> Função que pertence a algum objeto 
    // // this -> É uma referência do proprio objeto que estamos construindo
    // this.peso === pessoa.peso 
    // this.altura === pessoa.altura
    return (this.peso)/this.altura**2;
  },
}

// Função construtora 

function Produto(codigo,quantidade,nome,preco){
  this.codigo = codigo;
  this.quantidade = quantidade;
  this.nome = nome;
  this.preco = preco;
  this.imc = function(){

  }
}
// new -> vai criar uma nova referência e vai retornar um objeto montado
// 





const estoque = {
  produtos:[],
  adicionarProduto(codigo,quantidade,nome,preco){
    const novoProduto = new Produto(codigo,quantidade,nome,preco);
    this.produtos.push(novoProduto);
  },
  buscarPorCodigo(codigoDeBusca){
    // codigoDeBusca === '02';
    for(let produto of this.produtos){
      if(codigoDeBusca === produto.codigo){
        return produto;
      }
    }
  },
  buscarPorNome(valorDeBusca){
    const arrayDeEncontrados = [];
    for(let produto of this.produtos){
      if(produto.nome.includes(valorDeBusca)){
        arrayDeEncontrados.push(produto);
      }
    }
    return arrayDeEncontrados;
  },
  removeProduto(codigoProduto){},
  atualizarPreco(codigo,novoPreco){},


}

estoque.adicionarProduto('01',30,'Arroz 5kg',20.45);
estoque.adicionarProduto('02',25,'Feijão 1kg',7.29);
//estoque.buscarProduto('02');

const nome = "Arroz @";
nome.includes("@") // true/false


// console.log(estoque.produtos);