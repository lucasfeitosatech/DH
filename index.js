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