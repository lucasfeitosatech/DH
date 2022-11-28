
// Um modelo para a criação de objetos
// function Pessoa(nome,idade,peso,altura){
//   // novo this -> {} -> Objeto vazio 
//   // Propriedades
//   this.nome = nome;
//   this.idade = idade;
//   this.peso = peso;
//   this.altura = altura;
//   // Metódos
//   this.imc = function(){
//     return this.peso/(this.altura**2);
//   }
// }
// Representação
class Pessoa {
  // Construção do objeto de fato
  constructor(nome,idade,peso,altura){
    // novo this -> {} -> Objeto vazio 
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  imc(){
    return this.peso/(this.altura**2);
  }
}
// Criação dos objetos
const fulano = new Pessoa('Fulano de Tal',28,83.4,1.83);
console.log(fulano);

fulano.altura // 1.83
fulano.imc(); // xx
console.log(fulano.imc());



const fulano2 = new Pessoa('Fulano 2',23,75.4,1.78);

// Orientação a objetos