function Pessoa(nome,altura,sexo){
  this.nome = nome;
  this.altura = altura;
  this.sexo = sexo;
}

const pessoa1 = new Pessoa('Pessoa1',1.8,'H');
const pessoa2 = new Pessoa('Pessoa2',1.6,'H');
const pessoa3 = new Pessoa('Pessoa3',1.75,'M');
const pessoa4 = new Pessoa('Pessoa4',1.73,'M');
const pessoa5 = new Pessoa('Pessoa5',1.55,'M');



module.exports = {
  novaPessoa:function(nome,altura,sexo){
    const pessoa = new Pessoa(nome,altura,sexo);
    this.pessoas.push(pessoa);
  },
  pessoas:[pessoa1,pessoa2,pessoa3,pessoa4,pessoa5],
  //a maior e a menor altura do grupo;
  maiorEmenorAltura:function(){
    // for(let i = 0;i<this.pessoas.length;i++){
    //   const pessoa = this.pessoas[i];
    // } 
    let pessoaComMaiorAltura = this.pessoas[0];
    let pessoaComMenorAltura = this.pessoas[0];
    
    for(let pessoa of this.pessoas){
      if(pessoa.altura > pessoaComMaiorAltura.altura){
        pessoaComMaiorAltura = pessoa;
      }

      if(pessoa.altura < pessoaComMenorAltura.altura){
        pessoaComMenorAltura = pessoa;
      }
    }

    console.log("Pessoa com menor altura: ",pessoaComMenorAltura);
    console.log("Pessoa com maior altura: ",pessoaComMaiorAltura);
  },
  dd
}