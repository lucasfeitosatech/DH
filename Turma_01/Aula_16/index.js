/*
  Função construtora 

  Classes

  As classes e a função construtura: 

  São uma representação ou modelo dos objetos que queremos criar 

  Classe Alimento 

  id,nome,preco,quantidade

  Classe -> Representac1ão da Tabela

  Objetos 

  Alimento(1,'Pipoca',1.5,30);
  Alimento(2,'Outro Alimento',2.5,45);

  Dados da Tablea


  Planta -> Modelo (Classes e a função construtora)
  Casa -> Objeto constrúido
*/

// function Alimento(id, nome, preco, quantidade){
//   // construir um objeto vazio
//   // objeto vazio é um objeto que não possui metódos e propriedades
//   //this -> Próprio objeto que estamos criando/manipulando
//   // this -> No inicio da execução o this/objeto a ser criado é um objeto vazio
//   // podemos utilizar o dot notation para criar propriedades nesse novo objeto
//   this.id = id;
//   this.nome = nome;
//   this.preco = preco;
//   this.quantidade = quantidade;

  // Metódos;
  this.valorFinal = function(){
    return this.preco*this.quantidade;
  }

//   this.metodo1 = function (){

//   }

// }

class Alimento {
  constructor(id, nome, preco) {
    //this -> Próprio objeto que estamos criando/manipulando
    // this -> No inicio da execução o this/objeto a ser criado é um objeto vazio
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = 0;
  }
  // Metódos;
  // Uma função que pertence um objeto
  valorFinalDeVenda(){
    return this.preco*this.quantidade;
  }
  aumentarEstoque(){
    this.quantidade++;
  }
  atualizarPreco(novoPreco){
    this.preco = novoPreco;
  }
  precoComDesconto(valorDesconto){
    return this.preco*valorDesconto;
  }
}

const pipoca = new Alimento(1, "Ovo", 0.53, 100);
const pipoca2 = new Alimento(1, "Ovo", 0.53, 100); // 
pipoca.venda
pipoca.
// Quando não temos nada na classe será retornado um objeto vazio
console.log(pipoca);






// classe -> possui mais funcionalidades -> Orientação ao objeto -> Herança, Polimorfismo, Classe Abstrata
// new -> novo -> Constroí um novo objeto propriamente
// const pipoca = new Alimento(1, "Pipoca", 0.53, 100); // undefined -> Não definido
// const hamburguer = new Alimento(2,"Hamburguer",6,30);
//pipoca.valorFinal();




const estoque = {
  alimentos: [],
  cadastrarAlimento(id, nome, preco, quantidade) {
    const novoAlimento = new Alimento(id, nome, preco, quantidade);
    this.alimentos.push(novoAlimento);
  },
  buscarAlimentoPorId(idAserBuscado){
    for(let alimento of this.alimentos){
      if(alimento.id === idAserBuscado ){
        return alimento;
      }
    }

    return "Alimento não encontrado";
  }

}



estoque.cadastrarAlimento(1, "Ovo", 0.53, 100);
estoque.cadastrarAlimento(2, "Hamburguer", 6, 30);
estoque.cadastrarAlimento(3, "Cuscuz", 1.8, 67);
console.log(estoque.buscarAlimentoPorId(5));

// console.log(estoque);

soma(10,3);



