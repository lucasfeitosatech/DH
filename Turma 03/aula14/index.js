// Objetos
// Tipos primitivos
let numero = 5.6;
let strings = "abc";
let booleanos = true;
// Objetos servem para representar abastrações do mundo real no JS
// JSON - JavaScript Object Notation - Notação para objetos do JavaScri

// CREATE TABLE USUARIOS
//USUARIOS(id,nome,dataNascimento,cpf,senha)
// INSER INTO USUARIOS VALUES
// Propriedades -> Caracteristicas que descrevem o objeto
// Métodos -> Ações que o objeto pode fazer

strings.length; // Propriedades que descreve o tamanho da string
strings.toLowerCase(); // Método -> Realiza uma ação no objeto


// O this só pode ser usado dentro de objetos 
// e signigca acessar a raiz do objeto. 
let usuario = {
  id: 1,
  nome:'fulano',
  cpf:'111.111.111-00',
  senha:'!@456',
  altura:1.8,
  peso:70,
  valor:500,
  imprimirDados(){
    console.log(`Nome: ${this.nome} CPF: ${this.cpf}`);
  },
  deposito(valorADepositar){
    this.valor += valorADepositar;
  },
  saque: function(valorSaque){
    this.valor -= valorSaque;
  }

}; // Objeto vazio -> Sem valor

console.log(usuario.valor);
usuario.imprimirDados();
usuario.deposito(500);
console.log(usuario.valor);
usuario.saque(200);
console.log(usuario.valor);



let carro = {
  modelo:'Uno',
  marca: 'Fiat',
  temEscada: false,
  motor: {
    potencia: 80,
    torque:20,
    cilindradas: 1000,
    qtdValvulas: 16, 
    turbina: {
      prop1:1,
      prop2:2,
      compressor: {

      }
    }
  },
  roda: {
    aro: 20,
    ligaLeve: false
  }

}


// Objeto literal 
let usuario2 = {
  id: 2,
  name: 'teste',
  idade:18,
  altura:1.8,
  peso:70,
  imc(){
    console.log(`O IMC é de: ${peso/altura**2}`);
  }
};

//Função construtora -> Serve para 
//criar um modelo único e também para a criação de objetos em massa

// Um modelo para o objetos criado posteriormente 

function Usuario(valorId, valorName,valorIdade,valorAltura,valorPeso){
  this.id = valorId;
  this.name = valorName;
  this.idade = valorIdade;
  this.altura = valorAltura;
  this.peso = valorPeso;
  this.imc = function (){
    console.log(`O IMC é de ${this.name}: ${(this.peso/this.altura**2).toFixed(2)}`);
  }
}

const joao = new Usuario(1,"João",18,1.9,87);
joao.imc();
const jose = new Usuario(2,"José",19,1.8,77);
jose.imc();

const usuarios = [joao,jose];
for(let i = 0; i<usuarios.length;i++){
  const usuario = usuarios[i];
  if(usuario.name == 'João'){
    console.log(`Achou o usuario`,usuario);
  }
}







