// Três soluções possíveis

// Switch case - if/else

/*
  Banco de dados do microondas: 

  Microondas 
    id, marca,modelo, potencia, 
      Registros: 
        1, 'Eltrolux','JP42','1000W'
  Alimento
    id, nome, tempoPadrao
    1 - pipoca - 10s
    2 - macarrão - 8s
    3 - feijão - 12s
    4 - carne - 15s
    5 - brigadeiro - 8s


/*

/*
  1 - pipoca - 10s
  2 - macarrão - 8s
  3 - feijão - 12s
  4 - carne - 15s
  5 - brigadeiro - 8s
  Default: Prato inexistente

  se 2x maior que tempo padrao -> Queimava
  se 3x maior que tempo padrao -> Kabuuum
  se menor que tempo padrao -> Tempo insuficiente

  Ao final de cada execucao, prato pronto, bom apetite


*/

// JSON - Javascript Object Notation -> Notação de objetos do javascript

// JSON é um padrão de notação para troca de dados entre diferentes aplicações




let microondas = {
  alimentos: [
    {
      id: 1,
      nome: "Pipoca",
      tempoPadrao: 8,
    },
    {
      id: 2,
      nome: "Pipoca",
      tempoPadrao: 8,
    },
    {
      id: 3,
      nome: "Pipoca",
      tempoPadrao: 8,
    },
    {
      id: 4,
      nome: "Pipoca",
      tempoPadrao: 8,
    },
    { id: 5, nome: "Pipoca", tempoPadrao: 8 },
  ],
};

function microondas(opcao, tempo) {
  let tempoPadrao = 0;
  switch (opcao) {
    //'pipoca' ou '1' também servem
    case 1:
      tempoPadrao = 10;
      break;
    case 2:
      tempoPadrao = 8;
      break;
    case 3:
      tempoPadrao = 12;
      break;
    case 4:
      tempoPadrao = 15;
      break;
    case 5:
      tempoPadrao = 8;
      break;
    default:
      console.log("Prato Inexistente");
      return;
  }

  if (tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3) {
    console.log("Queimar");
  } else if (tempo >= tempoPadrao * 3) {
    console.log("Kabuuum");
  } else if (tempo < tempoPadrao) {
    console.log("Tempo insuficiente");
  }

  console.log("Prato pronto, bom apetite");
}

microondas(1, 30);

// if/else

function microondas2(opcao, tempo) {
  console.log("Prato pronto, bom apetite");

  let tempoPadrao = 0;
  if (opcao === 1) tempoPadrao = 10;
  else if (opcao === 2) tempoPadrao = 8;
  else if (opcao === 3) tempoPadrao = 12;
  else if (opcao === 4) tempoPadrao = 15;
  else if (opcao === 5) tempoPadrao = 8;
  else {
    console.log("Prato Inexistente");
    return;
  }

  if (tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3)
    console.log("Queimar");
  else if (tempo >= tempoPadrao * 3) console.log("Kabuuum");
  else if (tempo < tempoPadrao) console.log("Tempo insuficiente");
}

//ternário

function microondas3(opcao, tempo) {
  let tempoPadrao =
    opcao === 1
      ? 10
      : opcao === 2
      ? 8
      : opcao === 3
      ? 12
      : opcao === 4
      ? 15
      : opcao === 5
      ? 8
      : -1;

  if (tempo < -1) {
    console.log("Prato Inexistente");
    return;
  }

  let ternario =
    tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3
      ? console.log("Queimar")
      : tempo >= tempoPadrao * 3
      ? console.log("Kabuuum")
      : tempo < tempoPadrao
      ? console.log("Tempo insuficiente")
      : null;

  console.log("Prato pronto, bom apetite");
}

function microondas4() {}
