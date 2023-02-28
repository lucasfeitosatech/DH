/*
  Variável -> É um espaço na memória que possui alguma informação

  var -> Palavrada reservada do JS e indica que vamos criar uma variável

  possui uma visibilidade global
*/

// Declaração de variável
var idade = 18; // valor -> 18
var altura = 1.85; // valor -> 1.85

// = -> Atribuição
// nome = 'Lucas';
// nome = 'João'
// nome = 'Pedro';

var nome = 5;
var nome = 6;

let nome3 = 'joao';

{
  // let -> possui escopo definido
  let nome = 'pedro';
  console.log(nome);
  {
    let nome2 = 'luana';
    nome2 = 'Carol';
    console.log(nome);
  }
}

/*
  const é uma variável que não pode ter seu valor alterado
*/

const PI = 3.1473128937128937129738921738921973;
PI = 2.143712983728193782193;



let nome = "Lucas"
let idade = 18;
let altura = 20;

console.log(nome,idade,altura);








