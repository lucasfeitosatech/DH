/*
  Revisão Objetos -
*/

const array = [];
/*
  Quando temos apenas as {} (chaves) vazias 
  o objeto é vazio -> Pois não possui propriedades e metódos 

  Os objetos seguem uma estrutura 
  chave:valor,
  chave1:valor2

  metódos 
  pode seguir a estrutura chave valor
  metódos -> Uma função que pertence a um objeto 

  Objetos -> Representam alguma coisa do mundo real 
*/
const meuObj = {
  chave1_ok: 1,
  chave2_teste: 2,
  andar: function () {},
  falar() {},
};

class Usuario {
  /*
    Agrupar tudo que é comum entre 
    vários objetos e faz um modelo para a criação dos mesmos

    reaproveitamento de código

    constructor() -> Metódo especial das classes que realiza a 
    construção de fato do objeto
  */
  constructor(id,email,nome,cpf) {
    // this -> Ao entrar no construturo um novo this é criado {}
    this.id = id;
    this.email = email;
    this.nome = nome;
    this.cpf = cpf;
  }

  login() {
    console.log(this.nome,"está fazendo login agora...");
  }
}
//                  new -> novo
const novoUsuario = new Usuario(1,'teste@teste.com','Fulano Teste 1','001');
console.log(novoUsuario);
novoUsuario.login()

const novoUsuario2 = new Usuario(2,'teste2@teste.com','Fulano Teste 2','002');
console.log(novoUsuario2);
novoUsuario2.login();
// const novoUsuario2 = new Usuario();


const usuario = {
  id: 1,
  email: "teste@teste.com",
  nome: "Fulano de Tal",
  cpf: "001",
  login() {
    console.log("Usuário está fazendo login...");
  },
};

// usuario.login();

const usuario2 = {
  id: 2,
  email: "teste2@teste.com",
  nome: "Fulano 2",
  cpf: "001",
  login() {
    console.log("Usuário está fazendo login...");
  },
};

const usuario3 = {
  id: 3,
  email: "teste3@teste.com",
  nome: "Fulano 3",
  cpf: "001",
  login() {
    console.log("Usuário está fazendo login...");
  },
};

const usuario4 = {
  id: 4,
  email: "teste4@teste.com",
  nome: "Fulano 4",
  cpf: "001",
  login() {
    console.log("Usuário está fazendo login...");
  },
};
