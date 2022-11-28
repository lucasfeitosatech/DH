/*
  Aula 15 - JSON e Objetos

*/

/*
  COMIDA
  id, nome, gramatura,preco
  1, Ovo,100,0.53,
  2, Hamburguer,180,6,
  3, Cuscuz,500,1.8,

  JSON -> (J)ava(S)script (O)bject (N)otation
  JSON -> Notação de objetos do JavaScript

  Back-end -> É uma aplicação responsável por manipular os dados do sistema
  A comunicação com o banco de dados 

  SELECT * FROM COMIDA;

  Back-end envia no padrão JSON para as outras aplicações 

*/

/*
  Objeto -> Representações do mundo real na linguagem de programação

  tipos primitivos: 

  string -> texto
  number -> número
  boolean -> true/false

  Vão ser composiçoes dos tipos primitivos

  chave:valor

  chave -> string qualquer 
  valor -> pode ser qualquer coisa 

  o conjunto chave:valor é definido como propriedade 

  propriedades -> São informaçoes que descrevem o objeto

  1, Ovo,100,0.53,

  id:1
  nome: Ovo
  gramatura:100
  preco:0.53
*/

// 1, Ovo,100,0.53,

/*
  É um objeto vazio por não conter nenhum propriedade
*/
const ovo = {
  id:1,
  nome:'Ovo',
  preco:0.53,
  quantidade:30,
  'minha chave':10,
  /*
    Metódos -> Funções que pertencem a um objeto e realizam alguma ação
  */
  valorFinal(){
    // this -> referencia do proprio objeto
    return this.preco * this.quantidade;
  }

}; // Objeto vazio

// dot notation -> Notação de ponto 
// nos permite acessar os valores das propriedades do objeto

console.log(ovo.nome); // 'Ovo'
console.log(ovo['nome']); // 'Ovo'
ovo["minha chave"]

// notação de array

let numeros = [1,2,3,4,5];
numeros[0] // 1


let carro = {
  marca:'GM - Chevrolet',
  modelo:'Celta',
  cor:'Preto',
  anoFabricao:2010,
  anoModelo:2011,
  numChassi:'XPTO123',
  motor:{
    torque:20,
    potencia:70,
    cilindros:3,
    turbo:{
      prop1:'valor1',
      prop2:'valor2',
    }
  }
}

carro.motor.turbo.prop1








