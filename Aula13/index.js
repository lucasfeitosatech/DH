// Aula 13

/*
  - Correção do checkpoint
  - Mesa de trabalho da Aula 11 (Proxima Aula)
  - Mesa de trabalho da Aula 12 (Proxima Aula)
  - Objetos e JSON 
    Objetos vão nos ser útil para criarmos representações do mundo 
    real dentro da programação

    Em um objeto nós temos 

    Propriedades -> Caracteriscas que descrevem os objetos

    Métodos -> Ações que os objetos podem realizar
*/

// Carro
/*
  marca: 'Ferrari'
  modelo: 'F50',
  cor: 'Vermelho',
  potencia: '600cv',

  // Motor
    // Turbocompressor
      // ... 



  ...

  acelerar:
  freiar:
  limparVidros:
  abrirPortas
  alertar:
  ...

*/

// {} -> Objeto vazio -> Pois não possui método e propriedades
/*
  As propriedadas são separadas por vírgula
  {
    nome_propriedade:valor_propriedade, 
  }

*/
let concessionaria = {
  carros: [
    {
      marca: "Ferrari",
      modelo: "F50",
      acelerar(velocidade) {
        console.log("Acelerando a " + velocidade + "km/h");
      },
    },
  ],
};


let carro = {
  marca: "Ferrari",
  modelo: "F50",
  acelerar(velocidade) {
    console.log("Acelerando a " + velocidade + "km/h");
  },
  motor: {
    potencia:100,
    valvulas:2,
    partidaAFrio:false,
    turbo: {
      eDeAr:true
    }
  }
};

carro.motor.turbo.eDeAr

carro.marca = "Volkswagen";
carro.modelo = "Gol G1";

const arr = [];
arr;

// Dot notation -> Notação de ponto
console.log(carro.marca);
carro.acelerar(10.5);

// Notação de array
carro["marca"]; // Igual a carro.marca;

let usuario = {
  login: "user_123",
  senha: "teste@123",
  validarSenha() {},
};

let pessoa = {
  peso: 70,
  altura: 1.9,
  imc() {},
};

// Moto
// Casa
// Alimento
// Microondas


let lucas = {
  "login": "lucasfeitosatech",
  "id": 53050297,
  "node_id": "MDQ6VXNlcjUzMDUwMjk3",
  "avatar_url": "https://avatars.githubusercontent.com/u/53050297?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lucasfeitosatech",
  "html_url": "https://github.com/lucasfeitosatech",
  "followers_url": "https://api.github.com/users/lucasfeitosatech/followers",
  "following_url": "https://api.github.com/users/lucasfeitosatech/following{/other_user}",
  "gists_url": "https://api.github.com/users/lucasfeitosatech/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lucasfeitosatech/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lucasfeitosatech/subscriptions",
  "organizations_url": "https://api.github.com/users/lucasfeitosatech/orgs",
  "repos_url": "https://api.github.com/users/lucasfeitosatech/repos",
  "events_url": "https://api.github.com/users/lucasfeitosatech/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lucasfeitosatech/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Lucas Feitosa",
  "company": "@KLineApps",
  "blog": "lucasfeitosa.tech",
  "location": "São Paulo",
  "email": null,
  "hireable": null,
  "bio": "Computer Engineer bachelor with a solid background in developing complex Android and iOS apps. I am passionate about the mobile marketing and have knowledge abo",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 141,
  "following": 3,
  "created_at": "2019-07-18T14:15:58Z",
  "updated_at": "2022-08-01T17:08:51Z"
}



let dadosUsuario = {
  email:'teste',
  senha:'Teste',
  nome:'teste'
}


// BD -> API -> Aplicações

function enviarDadosServidor(){
  //...
}