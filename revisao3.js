

function Pessoa(altura,idade,nome,peso){
  this.altura = altura;
  this.idade = idade;
  this.nome = nome;
  this.peso = peso;
  this.imc = function(){
    return (this.peso)/(this.altura*this.altura);
  }
  this.dizerOi = function dizerOi(){
    console.log("Olá meu nome é: " + this.nome);
  }

}

const pessoa1 = new Pessoa(1.72,25,'Lucas',70); 
const pessoa2 = new Pessoa(1.80,35,'Fulano',76.7); 
pessoa1.dizerOi();
pessoa2.dizerOi();
// console.log(pessoa1);
// console.log( pessoa1.imc() );
// console.log( pessoa2.imc() );

let grupo = {
  //
  pessoas:[pessoa1,pessoa2],
  alturaMaior170: function(){
    let contador = 0;
    for(let i = 0;i<this.pessoas.length;i++){
      const pessoa = this.pessoas[i];
      if(pessoa.altura > 1.7){
        contador++;
      }
    }
    return contador;
  }
}

console.log("Pessoas com altura maior que 1.70:  " + grupo.alturaMaior170()  );






