// function Pessoa(nome,altura,sexo){
//   this.nome = nome;
//   this.altura = altura;
//   this.sexo = sexo;
// }

// const p1 = new Pessoa('Pessoa 1',1.8,'H');
// const p2 = new Pessoa('Pessoa 2',1.2,'H');
// const p3 = new Pessoa('Pessoa 3',1.76,'M');
// const p4 = new Pessoa('Pessoa 4',1.77,'H');

// let grupo = {
//   pessoas:[p1,p2,p3,p4],
//   numeroHomens:function(){
//     let qtdHomens = 0;
//     for(let i = 0;i<this.pessoas.length;i++){
//       if(this.pessoas[i].sexo == 'H'){
//         qtdHomens++;
//       }
//     }
//     return qtdHomens;
//   },
//   mediaAlturaMulheres:function(){
//     let qtdMulheres = 0;
//     let somaDasAlturas = 0;
//     for(let i = 0;i<this.pessoas.length;i++){
//       if(this.pessoas[i].sexo == 'M'){
//         qtdMulheres++;
//         somaDasAlturas += this.pessoas[i].altura;
//       }
//     }
//     return somaDasAlturas/qtdMulheres;
//   },
//   maiorEmenorAltura:function(){

//     let maiorAltura = this.pessoas[0].altura;
//     let menorAltura = this.pessoas[0].altura;
//     for(let i = 1; i< this.pessoas.length;i++){
//       if(this.pessoas[i].altura > maiorAltura){
//         maiorAltura = this.pessoas[i].altura;
//       }

//       if(this.pessoas[i].altura < menorAltura){
//         menorAltura = this.pessoas[i].altura;
//       }
//     }

//     return [maiorAltura,menorAltura];
//   }
// }

// console.log(`
//   Número de homens: ${grupo.numeroHomens()}

//   Média de altura das mulheres: ${grupo.mediaAlturaMulheres()}

//   Maior e menor altura: ${grupo.maiorEmenorAltura()}

// `);

function Pessoa(nome, altura, sexo) {
  this.nome = nome;
  this.altura = altura;
  this.sexo = sexo;
}

const pessoa = new Pessoa("João", 1.75, "M");

const pessoa1 = new Pessoa("Leo", 1.9, "M");

const pessoa2 = new Pessoa("Goku", 1.8, "M");

const pessoa3 = new Pessoa("Gabi", 1.6, "F");

const pessoa4 = new Pessoa("Lais", 1.85, "F");

const pessoa5 = new Pessoa("Babi", 1.55, "M");

let programa = {
  lista: [pessoa, pessoa1, pessoa2, pessoa3, pessoa4, pessoa5],

  maiorAltura: function () {
    let maior = 0;
    for (i = 1; i < this.lista.length; i++) {
      if (this.lista[i].altura > maior) {
        maior = this.lista[i].altura;
      }
    }

    return maior;
  },
};

console.log(programa.maiorAltura());
