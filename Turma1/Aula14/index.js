//OBJETOS
//JSON - JavaScript Object Notation (JSON)
const usuario = {
  nome: "Lucas",
  email: "lucas@lucas.com",
  senha: "123456",
  telefone: "(11) 99999-9999",
  termosDeUso: true,
  idade: 99,
};

const carro = {
  marca: "Fiat",
  modelo: "Argo",
  potencia: 102,
  acelerar() {
    console.log("Acelerando...");
  },
  turbinar() {
    this.potencia = this.potencia * 2;
  },
};

// function calculaImc(nome,idade,peso,altura,plano){
//   const alturaEmM = altura/100;
//   const imc = peso/(alturaEmM**2);
//   console.log(nome + ' tem ' + idade + ' anos' + ' e seu índice de massa corporal é de: ' + imc.toFixed(2))
//   return imc;
// }

// calculaImc("Carlos de Souza",28,80.1,174,true);
// calculaImc("Carlos de Souza2",30,85.1,178,true);
// calculaImc("Carlos de Souza3",29,83.1,167,true);
// calculaImc("Carlos de Souza4",20,82.1,170,true);

function Pessoa(nomeParam, pesoParam, alturaParam) {
  this.nome = nomeParam;
  this.peso = pesoParam;
  this.altura = alturaParam;
  this.imc = function () {
    console.log("imc: " + this.peso / (this.altura * this.altura));
  };
}

const lucas = new Pessoa("Lucas", 60, 1.5);
const pedro = new Pessoa("Pedro", 70, 1.7);

// const pessoas = [lucas,pedro];
lucas.imc();
pedro.imc();

function enviarDados() {
  //pegar no html nome
  //pegar no hotml email
  //pegar no html idade
  const usuario = {
    nome: "valor do html",
    email: "valor do html",
    idade: "valor do html",
  };

  enviarDadosServidor(usuario);
}

const usuario = {
  name: "Teste teste 2",
  username: "teste@teste2.com",
  password: "1234",
  roles: "1",
  checked: true,
};

// console.log(pessoas);
