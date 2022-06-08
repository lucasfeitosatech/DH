// Aula 16 - Continuação de objetos
// Objeto Literal


// Foi criado de forma literal
let pessoa = {
  nome:'Fulano de Tal',
  altura:1.8,
  peso:80,
  imc(){
    // this -> Referência do meu objeto raiz
    // this -> Engloba todo o escopo do objeto
    return this.peso/this.altura**2;
  }
}




// Função Construtora 1
function PessoaLiteral(nome, altura, peso) {
  return {
    nome:nome,
    altura: altura,
    peso: peso,
    imc() {
      // this -> Referência do meu objeto raiz
      // this -> Engloba todo o escopo do objeto
      return this.peso / this.altura ** 2;
    },
  };
}

function Pessoa(valorNome,valorAltura,valorPeso){
  // this -> Instancia do objeto raiz criado
  // this = {}
  // this.algo -> O nome da propriedade do objeto
  // e o que vem depois do = é o valor
  // Criando uma propriedade nome no objeto
  this.nome = valorNome; 
  //Criadno uma propriedade altura no objeto
  this.altura = valorAltura;
  // Craindo uma propriedade peso no objeto 
  this.peso = valorPeso;

  this.imc = function () {
    const imc = this.peso/this.altura**2;
    this.imcValor = imc;
    return imc;
  }
}

// Foi criado através da função construtora literal
const pessoa1 = PessoaLiteral('Fulano De Tal',1.8,80);
// Quando a função construtora for criado pelo this devemos colocar o new antes
// da chamada da função
const pessoa2 = new Pessoa('Fulano De Tal 2',1.7,80);
const pessoa3 = new Pessoa('Fulano De Tal 3',1.6,70);
const pessoa4 = new Pessoa('Fulano De Tal 4 ',1.5,60);
const pessoa5 = new Pessoa('Fulano De Tal 5',1.4,50);

let pessoas = [];
for(let i = 1;i<10000;i++){
  const pessoa = new Pessoa(`Fulano ${i}`,i,i);
  pessoas.push(pessoa);
}

pessoa3.imc();
console.log(pessoa3);

// . (dot notation)
// console.log(lucas.idade,lucas['Content-Type']);
// Na notação de [], caso a chave não existe o valor será
// undefined
// lucas['teste'];

// lucas.cpf = '000.000.000-00';
// lucas['rg'] = '0.000.000';


