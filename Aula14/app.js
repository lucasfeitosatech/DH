// - Função Construtora
/*
  Serve basicamente como um molde a ser contruido

  Um modelo que serve para a criação de objetos em massa
*/


// Função constrututora 1 
function criarUsuario(nomeParam,idadeParam,rgParam) {
  // novo objeto literal
  return {
    nome:nomeParam,
    idade:idadeParam,
    rg:rgParam,
    meuMetodo(){
      console.log('teste');
    }
  }
}
let usuario = criarUsuario('Fulano 1',18,'0.000.000')
let usuario2 = criarUsuario('Fulano 2',22,'1.000.000')
let usuario3 = criarUsuario('Fulano 3',25,'2.000.000')
let usuario4 = criarUsuario('Fulano 4',28,'3.000.000')


// Função construtora 2 -> utilizando o this

// Para esse tipo de função construtura a primeira letra é sempre Maiscula 
function Usuario(nomeParam,idadeParam,rgParam){
  //conceito de atribuição e dot notation para criar as propriedades
  // this como sendo o objeto pai de todo mundo 
  // no momento inicial da função construtura
  // this ele é um objeto vazio {
  //   nome:nomeParam
  // }
  this.nome = nomeParam;
  this.idade = idadeParam;
  this.rg = rgParam;
  this.contatos = [];
  this.meuMetodo = function(){
    console.log('Teste');
  }
  this.novoContato = function(nome,email){
    const novoContato = {
      nome,
      email
    }
    this.contatos.push(novoContato);
  }

}
// new -> novo -> Criando um novo objeto através da função construtura

const usuario5 = new Usuario('Fulano 4',28,'3.000.000')
usuario5.novoContato('teste','teste');
console.log(usuario5);

// Class -> Adaptação da função construtura de cima





