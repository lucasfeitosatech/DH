// Tem-se um conjunto de dados contendo a altura e o 
// sexo (M ou F) de 15 pessoas. 

function Pessoa(altura_,sexo_,nome_){
  this.altura  = altura_
  this.sexo = sexo_
  this.nome = nome_
}

// let pessoa = {
//   altura:1.80,
//   sexo:'M'
// }
let array = [];
for(let i = 1;i<=100;i++) {
  let numRandom = Math.random();
  let altura = numRandom + 1;
  let nome = 'Pessoa ' + i;
  let sexo = 'F';
  if(numRandom > 0.5){
    sexo = 'M';
  }

  array.push(new Pessoa(Number(altura.toFixed(2)),sexo,nome));

}


module.exports = {
  pessoas:array,
  //// a maior e a menor altura do grupo;
  maiorEMenorAltura:function(){

    let pessoasOrdenadas = this.pessoas.sort(function(primeiraPessoa,segundaPessoa){

      return primeiraPessoa.altura - segundaPessoa.altura;
    });

    // [1,2,3].length = 3 - 1 = 2;
    // 0,1,2

    let menor = pessoasOrdenadas[0];
    let maior = pessoasOrdenadas[pessoasOrdenadas.length - 1];

    console.log(menor);
    console.log(maior);

    // Pessoa { altura: 1.5, sexo: 'M', nome: 'Pessoa 1' },
    // Pessoa { altura: 1.72, sexo: 'M', nome: 'Pessoa 2' },
    // Pessoa { altura: 1.41, sexo: 'F', nome: 'Pessoa 3' },
    // Pessoa { altura: 1.7, sexo: 'M', nome: 'Pessoa 4' },
    // let maiorPessoa = this.pessoas[0];
    // let maiorAltura = maiorPessoa.altura;

    //   for(let i = 1 ; i<this.pessoas.length;i++){
    //     let pessoa = this.pessoas[i];
        
    //     if(pessoa.altura > maiorPessoa.altura){
    //       maiorPessoa = pessoa;
    //       maiorAltura = pessoa.altura;
    //     }

    //   }
  },
  //// a média de altura das mulheres;
  mediaAlturaMulheres:function(){

  },
  //o número de homens.
  qtdHomens:function(){

  }
}



// exports.pessoas = array;
// exports.prop2 = 2;
// exports.myFunc = function(){

// }


