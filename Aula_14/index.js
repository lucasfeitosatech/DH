/*

  Aula 14 - Objetos Literais 
  Objetos
*/

/*
  string ou texto
  number -> númerico
  booleano -> lógico 
*/

const nome = "Lucas"; //
const idade = 18; // -> Informações de uma pessoa ou de um usuário
const peso = 69.9; //

/*
  Objetos Literais -> São estruturas de dados complexas que nos permitem 
  criar no JavaScript repesentações do mundo Real 
  {} -> Um objeto vazio 

  Esse objeto não possui nenhuma propriedade e metódos 

  propriedades -> São informações que dão sentido/descrevem este objeto

  nome -> Lucas
  idade -> 18
  peso -> 69.9
  ... N propriedades

  chave:valor
  chave2:valor2
  chave3:valor3 

  nome:'Lucas',
  idade:18,
  peso:69.9
  nome-sobrenome: 'Lucas Feitosa'
*/

const lucas = {
  nome: "Lucas",
  idade: 18,
  peso: 69.9,
  "nome-sobrenome": "Lucas Feitosa",
};
/*
  Ao utilizar chaves que não possuem nomes simples 
  temos que ao invés da dot notation 
  utilizar a notação [] pasando o nome da chave entre "" dentro dos []

*/
lucas["nome-sobrenome"]; // -> 'Lucas Feitosa'
lucas["nome"] === lucas.nome;

const fulano = {
  nome: "Fulano De Tal",
  idade: 19,
  peso: 90.2,
};

// Como acessar as propriedades de um objeto
/*
  Para acessar as propriedades de um objeto 

  utilizamos a notação de ponto (dot notation)
  pessoa.nome
  pessoa.idade
  pessoa.peso
*/

lucas.nome;
fulano.nome;

/*
  Metódos -> São funções que pertencem a um objeto e realizam alguma ação,
*/

const objetoDeFora = {
  prop1: "Teste",
};

const carro = {
  marca: "Porsche",
  modelo: "911 GT",
  ano: 2015,
  cor: "Azul",
  motor: {
    potencia: 700,
    torque: 40.5,
    turbo: {
      turbinas: 2,
      ligarTurbina() {
        //
        this.turbinas;
      },
    },
  },
  // ligar: function(){
  //   console.log("O carro ligou");
  // },
  ligar() {
    console.log("O carro ligou");
  },
  acelerar(aceleracao) {
    this.marca === carro.marca;
    objetoDeFora.prop1;
    /*
      this -> A referência do objeto o qual estamos trabalhando

    */
    console.log("Acelerando a: ", aceleracao, " km/h");
  },
};

carro.motor.turbo.turbinas; // -> 2
carro.ligar();
carro.acelerar(15);

// JSON -> (J)ava(S)cript (O)bject (N)otation -> Notação de objetos do Javascript
// JSON -> É um padrão que utilizamos para representar objetos entre várias
// linguagens de programação -> O padrão utilizado nas API's para troca de dados

const casa = {
  chave: "valor1",
  chave2: "valor",
};

// JSON -> A notação do objetos do Javascript
const response = {
  message: "TFA Auth needs to be verified",
  tempSecret:
    "NNTUYZL3GNAEUQSJIJ4CGNCBFEYWCMRKONDWCUCFLNZTGZKJKMQTS2Z4N5KGWP2EJASSKUDEOISHCURMGJWSCNCNJFBDUTRKNUSWW3Y",
  dataURL:
    "data:image/png;base64,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",
  tfaURL:
    "otpauth://totp/SecretKey?secret=NNTUYZL3GNAEUQSJIJ4CGNCBFEYWCMRKONDWCUCFLNZTGZKJKMQTS2Z4N5KGWP2EJASSKUDEOISHCURMGJWSCNCNJFBDUTRKNUSWW3Y",
};

const usuarioGithub = {
  login: "lucasfeitosatech",
  id: 53050297,
  node_id: "MDQ6VXNlcjUzMDUwMjk3",
  avatar_url: "https://avatars.githubusercontent.com/u/53050297?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/lucasfeitosatech",
  html_url: "https://github.com/lucasfeitosatech",
  followers_url: "https://api.github.com/users/lucasfeitosatech/followers",
  following_url:
    "https://api.github.com/users/lucasfeitosatech/following{/other_user}",
  gists_url: "https://api.github.com/users/lucasfeitosatech/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/lucasfeitosatech/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/lucasfeitosatech/subscriptions",
  organizations_url: "https://api.github.com/users/lucasfeitosatech/orgs",
  repos_url: "https://api.github.com/users/lucasfeitosatech/repos",
  events_url: "https://api.github.com/users/lucasfeitosatech/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/lucasfeitosatech/received_events",
  type: "User",
  site_admin: false,
  name: "Lucas Feitosa",
  company: "@KLineApps",
  blog: "lucasfeitosa.tech",
  location: "São Paulo",
  email: null,
  hireable: null,
  bio: "Computer Engineer bachelor with a solid background in developing complex Android and iOS apps. I am passionate about the mobile marketing and have knowledge abo",
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 178,
  following: 3,
  created_at: "2019-07-18T14:15:58Z",
  updated_at: "2023-03-01T01:20:59Z",
};
// JSON -> Notação de Objetos do Javascript


/*
  Banco de Dados 
        Tabela Usuario  id, nome      , endereco, rg          
linha                   1    Fulano 1 , Rua Tal , 000
                        2 ,  Fulano 2 , Rua X   , 111
                        3 ,  Fulano 3 , Rua Y   , 222
                        4 ,  Fulano 4 , Rua Z   , 333
                        5 ,   Fulano 5, Rua P  ,  555
*/

const usuarios = [
  {
   id:1,
   nome:'Fulano 1',
   endereco: 'Rua Tal',
   rg: '000' 
  },
  {
    id:2,
    nome:'Fulano 2',
    endereco: 'Rua X',
    rg: '111' 
   }
]

//  INSERT INTO USUARIO ('Fulano 4', 'Rua Z', 333);

function cadastrar(){
  // Obter informações do DOM dos inputs

  const usuario = {
    nome:'Lucas',
    endereco: 'Rua P',
    rg: '555',
  }

  // Enviar este objeto para uma API 


}


function receberCadastro(usuario){
  const nome = usuario.nome;
  const endereco = usuario.endereco;
  const rg = usuario.rg;

  // INSERTO INTO USUARIO (nome,endereco,rg)
}

function obterUsuarios(){
  const usuarios = 'SELECT * from Usuario'

  return usuarios 
}





