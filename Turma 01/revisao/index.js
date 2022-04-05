// Tem-se um conjunto de dados contendo a altura e o sexo 
// (M ou F) de 5 pessoas. 

function Pessoa(nome,altura,sexo){
  this.nome = nome;
  this.altura = altura;
  this.sexo = sexo;
}

const pessoa1 = new Pessoa("Fulano 1",1.6,"F");
const pessoa2 = new Pessoa("Fulano 2",1.93,"M");
const pessoa3 = new Pessoa("Fulano 3",1.75,"F");
const pessoa4 = new Pessoa("Fulano 4",1.85,"F");
const pessoa5 = new Pessoa("Fulano 5",1.34,"M");

// soma/quantidade
(1.6 + 1.75 + 1.85)/3 // 1.73


//Faça um programa que calcule e escreva:	
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

// this = grupo -> Referência do objeto raiz 
let grupo = {
  pessoas:[pessoa1,pessoa2,pessoa3,pessoa4,pessoa5],
  maiorAltura:function(){
    let maiorPessoa = this.pessoas[0];
    for(let i = 1 ; i<this.pessoas.length;i++){
      if(this.pessoas[i].altura > maiorPessoa.altura){
        maiorPessoa = this.pessoas[i];
      }
    }
    return maiorPessoa.altura
  },
  menorAltura:function() {
    let menorPessoa = this.pessoas[0];
    for(let i = 1 ; i<this.pessoas.length;i++){
      if(this.pessoas[i].altura < menorPessoa.altura){
        menorPessoa = this.pessoas[i];
      }
    }
    return menorPessoa.altura
  },
  mediaAlturaMulheres: function(){
    let somaAltura = 0;//5.2
    let qtdMulheres = 0;//3
    for(let pessoa of this.pessoas){
      if(pessoa.sexo == "F"){
        qtdMulheres++;// Achei uma mulher e adicionei um na variável
        somaAltura += pessoa.altura
        // 0 + 1.6 = 1.6
        // 1.6 + 1.75 = 3.35
        // 3.35 + 1.85 = 5.2
      }
    }

    //5.2/3
    return somaAltura/qtdMulheres;
  },
  // o número de homens.
  numeroDeHomens: function(){
    let qtdHomens = 0;//3
    for(let pessoa of this.pessoas){
      if(pessoa.sexo == "M"){
        qtdHomens++;// Achei um homem e adicionei um na variável
      }
    }
    return qtdHomens;
  }
}

console.log(grupo.maiorAltura());
console.log(grupo.menorAltura());
console.log(grupo.mediaAlturaMulheres());
