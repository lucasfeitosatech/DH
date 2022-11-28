/* COMIDA
  id, nome, quantidade,preco
  1, Ovo,30,0.53,
  2, Hamburguer,15,6,
  3, Cuscuz,3,1.8, 

  Processado por um back-end 


*/

const estoque = {
  alimentos: [],
  cadastrarAlimento(idParam, nomeParam, precoParam, quantidadeParam) {
    // Função construtora
    const novoAlimento = {
      id: idParam,
      nome: nomeParam,
      preco: precoParam,
      quantidade: quantidadeParam
    }
    this.alimentos.push(novoAlimento);
  },
}

estoque.cadastrarAlimento(1, "Ovo", 0.53, 100);
estoque.cadastrarAlimento(2, "Hamburguer", 6, 30);
estoque.cadastrarAlimento(3, "Cuscuz", 1.8, 67);

console.log(estoque);


const comidas = [
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  }, {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  }, {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  }, {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  }, {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  }, {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  }, {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  },
  {
    "id": 1,
    "nome": "Ovo",
    "preco": 0.53,
    "quantidade": 30
  },
  {
    "id": 2,
    "nome": "Hamburguer",
    "preco": 6,
    "quantidade": 15
  },
  {
    "id": 3,
    "nome": "Cuscuz",
    "preco": 1.8,
    "quantidade": 3
  }
]

let lista = '<ul>';
for (let index = 0; index < comidas.length; index++) {
  const comida = comidas[index];
  const itemDaLista = '<li> id: ' + comida.id + ' nome:' + comida.nome + '</li>';
  lista += itemDaLista;
}
lista += '</ul>';



console.log(lista);

