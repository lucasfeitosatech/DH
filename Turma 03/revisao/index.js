/* 
1) Crie uma função que receba um array composto por números e 
retorna uma nova matriz (array) com todos os valores 
divididos pela soma de toda a matriz, usando map() e reduce().
[1,2,3] 
soma = 1 + 2 + 3 = 6
[1/6,2/6,3/6];
*/

let numeros = [4, 9, 10, 12, 15];
let soma = numeros.reduce(function (acc, numero) {
  return acc + numero;
});
console.log(soma);

let numerosDivido = numeros.map(function (num) {
  return num / soma;
});

// console.log(numeros);
// console.log(numerosDivido);

/*
2) Crie uma função que receba um array de palavras e um número, 
e que retorna uma matriz (array) com apenas as palavras que 
têm mais do que uma quantidade de letras maior do que o número 
informado. (verifique como funciona o método filter ())
*/

let palavras = [
  "lorem",
  "ipsum",
  "recebe",
  "ovo",
  "uva",
  "bola",
  "maca",
  "dois",
  "paralelepido",
  "palavra",
];

// function filtrarArray(palavras,tamanho,texto = ''){
//   return palavras.filter(function(palavra){
//     return palavra.length > tamanho && palavra.includes(texto);
//   })
// }

// console.log(filtrarArray(palavras, 3, "pa"));

let produto = {
  descricao: "Placa de vídeo",
  preco: "R$ 2299,00",
  img: "https://teste.com.br/teste.png",
};

let produto2 = {
  descricao: "Cadeira gamer",
  preco: "R$ 799,00",
  img: "https://teste.com.br/teste.png",
};

let produto3 = {
  descricao: "Galaxy A70",
  preco: "R$ 1399,00",
  img: "https://teste.com.br/teste.png",
};

let produtos = [produto, produto2, produto3];

function filtrarArray(produtos, texto = "") {
  return produtos.filter(function (produto) {
    return produto.descricao.includes(texto);
  });
}

//console.log(produtos);
// console.log(filtrarArray(produtos,'Galaxy','Cadeira'));
// console.log(filtrarArray(palavras,5));
// console.log(filtrarArray(palavras,6));
// console.log(filtrarArray(palavras,7));

/* Crie um array de objetos literais, onde cada objeto será um aluno e 
terá dois atributos: nome e nota. Crie duas funções que ordenam o array: 
uma ordenará os alunos em ordem alfabética e a outra o fará por nota, 
da mais alta para a mais baixa.  */

let alunos = [
  {
    nome: "Yan",
    nota: 8,
  },
  {
    nome: "Naldo",
    nota: 6,
  },
  {
    nome: "Maria",
    nota: 7,
  },
];

function ordenarNome() {
  return alunos.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

console.log(ordenarNome());

function ordenarNota() {
  return alunos.sort(function (a, b) {
    return b.nota - a.nota;
  });
}

console.log(ordenarNota());



function mostra(texto) {
  console.log(texto);
}


for (let i = 0; i < 100; i+=2) {
  console.log(i);
}
