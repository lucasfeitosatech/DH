//Aula 15 -> JSON e Objetos
// JSON -> (J)ava(S)cript (O)bject (N)otation
// JSON -> Notação de objetos do Javascript

// Json serve como padrão para troca de dados entre
// diferentes linguagens

let altura = 1.8;
let peso = 80;
let nome = "Lucas";

// Objetos -> São representações do mundo real
// dentro da linguagem de programação
/*

Propriedades: Caracteristicas quantitativas do objeto

Metódos: Ações dentro do objeto

*/

/*
  Objeto: Carro

  placa:
  chassi:
  cor:
  tanque:

  freiar()
  acelerar()


    Objeto Motor:
       potencia:
       torque:
       cilindrada:
       combustivel:
          Objeto TurboCompressor: 
            ...
            ...
            ...
            ...
       


*/

/*
  Objeto Lista: 

  tamanho;
  primeiroElemento;
  ultimoElemento;

  adicionar()
  remover()



*/
// {} -> Objeto Vazio
let pessoa = {
  nome: "Lucas",
  sobrenome: "Feitosa",
  altura: 1.8,
  peso: 70,
  imc() {
    console.log("IMC");
  },
  documento:{
    cpf:'',
    rg:'',
    cnh:''
  }
};

// Para acessar as propriedades de um objeto
// utilizamos a . (dot) notation

console.log(`Nome: ${pessoa.nome} ${pessoa.sobrenome}`);
console.log(pessoa.nome,pessoa.sobrenome)
