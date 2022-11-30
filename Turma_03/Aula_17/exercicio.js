const conta = {
  //... propriedades
}


// Número da conta (somente números)
// Tipo de conta (conta corrente ou poupança em $)
// Saldo em $ (valor apenas)
// Titular da conta (nome completo)

function Conta(conta,tipo,saldo,titular){
  // ... criar a funcão construtura
}

class Conta {
  constructor(conta,tipo,saldo,titular){
// ... montagem do objeto
  }

  // metódos...
}

const banco = {
  clientes:[],
  adicionarCliente(conta,tipo,saldo,titular){
    const novaConta = new Conta()
    // ...
  }
}




let i = 0;

function media(array){
    let soma = 0;
    while (i < array.length) {
      soma += array[i];
      i++;
    }
    media = soma/array.length
    return media;
};

function maior(array){
  let a = 0;
  let b = 0;
  let i = 0;
  while (i < array.length) {
    a = array[i];
    if (a > b) {
      b = a
    }
    i++;
  }
  maior = b
  return maior;
};

console.log(`A média mais o maior valor do participante A é ${maior(participanteA) + media(participanteA)}`);
console.log(`A média mais o maior valor do participante B é ${maior(participanteB) + media(participanteB)}`); 
console.log(`A média mais o maior valor do participante C é ${maior(participanteC) + media(participanteC)}`);