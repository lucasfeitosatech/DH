/*
  Aula 15 - JSON e Objetos

  JSON -> (J)ava(S)cript (O)bject (N)otation -> A notação de objetos do javascript

  JSON -> Se tornou padrão na troca de dados entre diversar linguagens de programação 

  Back-end -> Em java que retorna dados utilizando a notação do JS 
*/

/*
  CLIENTE 
    id,nome,cpf,peso,altura
    1, Fulano1, 123.323.411-00
    2, Fulano2, 098.312.876-00
    ...
    10,Fulano3, 000.111.222-33
*/

/*
  BACK-END -> Se comunicar como banco de dados e vai retornar essa informações via JSON
  SELECT * FROM CLIENTE
*/

let clientes = [
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
  { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },
]
// Objeto literal
let obj = {}; // Objeto Vazio 

/*
  Objetos -> São representações do mundo real no Javascript

  propriedades -> Informações que descrevem o dado que estamos criando

  metódos -> Ações pertinentes ao objeto
    registrar -> Podemos utilizar as informacões do cliente para realizar algum tipo de registro
    calcularImc -> Vai utilizar as propriedades de peso e altura e gerar uma nova informação
*/

/*
  CLIENTE 
    id,nome,cpf,peso,altura
    1, Fulano1, 123.323.411-00
    2, Fulano2, 098.312.876-00
    ...
    10,Fulano3, 000.111.222-33
*/

let cliente1 = {
  /* chave:valor
    chave -> Sempre será uma string
    valor -> Pode ser qualquer coisa

    o conjuntos de chave:valor é separado por ','

    Metódo -> Uma função que pertence a um objeto
  */
  id: 1,
  nome: 'Fulano1',
  cpf: '123.323.411-00',
  // nomeMetodo(){
  //   console.log("Estou executando meu primeiro metódo");
  // },
};

let cliente2 = {
  id: 2,
  nome: 'Fulano2',
  cpf: '098.312.876-00',
  // nomeMetodo(){
  //   console.log("Estou executando meu primeiro metódo");
  // },
}

let cliente3 = {
  id: 10,
  nome: 'Fulano3',
  cpf: '000.111.222-33',
  // nomeMetodo(){
  //   console.log("Estou executando meu primeiro metódo");
  // },
}

clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);

console.log(clientes);



/*
  dot notation -> Notação de ponto 

  nos permite utilizar os metódos e propriedades do objeto

  através do "."
*/

console.log(cliente1.nomeMetodo());

function teste() {
  console.log("oi");
}

teste()


let carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  cor: 'Preto',
  placa: 'XXX1111',
  motor: {
    torque: '20kgf/m',
    potencia: 60,
    turbo: {
      prop1: 'x',
      prop2: 'y'
    }
  }
}

carro.motor.turbo.prop1






