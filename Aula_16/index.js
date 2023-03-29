/*
  Revisão Objetos literais e JSON
  Classes e função construtora -> Aula 16
*/

// {} -> As chaves sem nada dentro, representam um objeto vazio
// {} -> Objeto vazio, pois não possui propriedades e metódos
/*
  JSON -> Javascript Object Notation 
  JSON -> A notação de objetos do javascript

  propriedades -> Características do objeto
  metódos -> Representam ações -> Uma função que pertence a um objeto
*/

function cadastrar(){
  
  const usuario = criarObjetoUsuario();
  

}

// Função construtora -> É uma função que facilita a criação dos objetos
function criarObjetoUsuario() {
  // Obter do DOM os dados dos inputs 
  // DOM -> Document Object Model 
  const nome = 'Usuário X'
  const email = 'teste@teste.com'
  const cpf = '000.123.456-18'

  const usuario = {
    nome,
    email,
    cpf,
  };

  return usuario;
}
// Função construtora
function Usuario(nome,email,cpf,id){
  return {
    nome,
    email,
    cpf,
    id
  }
}

const usuario1 = Usuario('Fulano 1','t1@t.com','01',1);
const usuario2 = Usuario('Fulano 2','t2@t.com','02',2);
const usuario3 = Usuario('Fulano 3','t3@t.com','03',3);

// Classes -> Vai servir de modelo para a criação de objetos
// Classes -> Modelagem de um banco de dados 

// Tabela Usuário -> id,nome,email, cpf -> Classe Usuário 
//                    1, 'X', 'Y', '01' -> Objetos
/*
  Classe -> Carro
    propriedades: 
      marca: string;
      modelo: string;
      cor: string;
  
  novo Objeto do Tipo Carro contendo as propriedades solicitadas
  novo Carro -> 
    marca: 'Fiat',
    modelo: 'Uno',
    cor: 'Prata'

  novo Carro -> 
    marca: 'GM - Chevrolet',
    mode: 'Onix LT',
    cor: 'Vermelho'
*/

// const Uno =  {
//   marca:'Fiat',
//   modelo:'Uno',
//   cor:'Prata'
// }

const Onix = {
  marca:'GM - Chevrolet',
  modelo: 'Onix LT',
  cor:'Vermelho',
  acelerar(){
    
  }
}


class Carro {
  constructor(a,b,c){
    // this -> {} 
    // No inicio do construtor o this equivale a um objeto vazio
    // constructor -> Construtor 
    // o constructor será o responsável pela criação dos objetos
    // 
    // this -> a instancia do objeto que está sendo criado ou objeto utilizado
    this.marca = a;
    this.modelo = b;
    this.cor = c;
    this.x = 2;
    this.y = 3;
  }

  acelerar(){
    this -> onix
    console.log("Acelerando...")
  }
}
// new -> novo -> indica que um novo objeto será criado
const uno = new Carro('Fiat','Uno','Prata');
uno.y // 3 
uno.acelerar();
const onix = new Carro('GM - Chevrolet','Onix LT','Preto');
onix.acelerar();


const conta = 'Minha conta'





