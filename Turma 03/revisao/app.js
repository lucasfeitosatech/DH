// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas.

// Função construtora -> Nos possibilitar realizar a criação desses objetos de forma simplificada

// Planta da casa
function Pessoa(nome, altura, sexo) {
  this.nome = nome;
  this.altura = altura;
  this.sexo = sexo;

  this.minhaFuncao = function(){
    console.log("Teste")
  }

  this.outraFuncao = function(){

  }
}

const pessoa1 = new Pessoa('',1.8,'F');
pessoa1.minhaFuncao();

// Prover uma orientação ao objeto
// a média de altura das mulheres;
// o número de homens.

let grupo = {
  pessoas:[],
  adicionarPessoa(nome,altura,sexo){
    const pessoa = new Pessoa(nome,altura,sexo);
    this.pessoas.push(pessoa);

  },
  maiorEMenorAltura(){
    let menorPessoa = this.pessoas[0]; // Primeira posição
    let maiorPessoa = this.pessoas[0];
    for(let i = 1;i<this.pessoas.length;i++){
      // i = 1 -> pessoa.altura = 2.0 
      const pessoa = this.pessoas[i];
      // 2.0 > 1.8
      if(pessoa.altura > maiorPessoa.altura){
        maiorPessoa = pessoa;
      } 
      if(pessoa.altura < menorPessoa.altura){
        menorPessoa = pessoa;
      }
    }
    
    // this.pessoas.sort(function (a, b) {
    //   if (a.altura > b.altura) {
    //     return 1;
    //   }
    //   if (a.altura < b.altura) {
    //     return -1;
    //   }
    //   return 0;
    // });
    // let menorPessoa = this.pessoas[0]; // Primeira posição
    // let maiorPessoa = this.pessoas[this.pessoas.length - 1];// última posição do array
    // console.log("A maior pessoa é: ",maiorPessoa,"\nA menor pesssoa é :",menorPessoa);
  },
  mediaDeAlturaDasMulheres(){
    let somaAlturas = 0;
    let qtdMulheres = 0;
    for(let i = 0;i<this.pessoas.length;i++){
      const pessoa = this.pessoas[i];
      if(pessoa.sexo == 'F'){
        somaAlturas += pessoa.altura;
        qtdMulheres++;
      }
    }
    return somaAlturas/qtdMulheres;
  },
  numeroDeHomens(){
    let qtdHomens = 0;
    for(let i = 0;i<this.pessoas.length;i++){

    }
    return qtdHomens;
  }
}

/* [
  Pessoa { nome: 'Fulano 1', altura: 1.8, sexo: 'F' },
  Pessoa { nome: 'Fulano 2', altura: 1.73, sexo: 'M' },
  Pessoa { nome: 'Fulano 3', altura: 1.82, sexo: 'M' },
  Pessoa { nome: 'Fulano 4', altura: 1.97, sexo: 'F' },
  Pessoa { nome: 'Fulano 5', altura: 1.54, sexo: 'M' },
  Pessoa { nome: 'Fulano 6', altura: 1.62, sexo: 'F' }
] */

grupo.adicionarPessoa('Fulano 1',1.8,'F');
grupo.adicionarPessoa('Fulano 2',1.73,'M');
grupo.adicionarPessoa('Fulano 3',1.82,'M');
grupo.adicionarPessoa('Fulano 4',1.97,'F');
grupo.adicionarPessoa('Fulano 5',1.54,'M');
grupo.adicionarPessoa('Fulano 6',1.62,'F');
// console.log(grupo.pessoas);

grupo.maiorEMenorAltura();

