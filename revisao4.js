//Carcteristicas da pessoa: Nome,Altura,Peso
//Função construtora - Um modelo único com as
//mesmas propriedades, para criação vários objetos com valores diferentes.
// let pessoa = {
//   nome:"Lucas",
//   prop2:1.80,
//   prop3:70,
// }
// pessoa.prop2

function Pessoa(nomeParam, alturaParam, pesoParam) {
  this.nome = nomeParam;
  this.altura = alturaParam;
  this.peso = pesoParam;
  this.imc = function(){
    const resultado = (this.peso)/(this.altura*this.altura);
    if(resultado < 18.5){
      return 'Abaixo do peso';
    }
    else if (resultado >= 18.5 && resultado < 24.9)
      return 'Peso normal';
    else 
      return 'Obeso'
  }
}

const pessoa1 = new Pessoa("Lucas", 1.7, 80);
const pessoa2 = new Pessoa("Fulano",1.60,90);
const pessoa3 = new Pessoa("Ciclano",1.50,60);
console.log(pessoa1.imc());
console.log(pessoa2.imc());
console.log(pessoa3.imc());


const grupo = {
  nome:"DH",
  pessoas:[pessoa1,pessoa2,pessoa3],
  maiorAltura:function(){
    let maior = 0;
    for(let i = 0;i<this.pessoas.length;i++){
      const pessoa = this.pessoas[i];
      if(pessoa.altura > maior){
        maior = pessoa.altura;
      }
    }
    return maior;
  }
}

console.log(grupo.maiorAltura());


