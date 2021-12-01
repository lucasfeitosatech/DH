function Pessoa(nome,altura,sexo){
  this.altura = altura;
  this.sexo = sexo;
  this.nome = nome;
}

const pessoa1 = new Pessoa('Pessoa1',1.8,'M');
const pessoa2 = new Pessoa('Pessoa2',1.5,'F');
const pessoa3 = new Pessoa('Pessoa3',1.9,'M');
const pessoa4 = new Pessoa('Pessoa4',1.7,'M');
const pessoa5 = new Pessoa('Pessoa5',1.73,'F');


module.exports = {
  Pessoa:Pessoa,
  novaPessoa:function(nome,altura,sexo){
    const novaPessoa = new Pessoa(nome,altura,sexo);
    this.pessoas.push(novaPessoa);
    return novaPessoa;
  },
  pessoas:[pessoa1,pessoa2,pessoa3,pessoa4,pessoa5],
  numeroDeHomens:function(){
    // for(let i = 0;i<this.pessoas.length;i++){
    //   const pessoa = this.pessoas[i];
    // }
    //Igual ao for de cima porém mais encurtado e simplficado
    let homens = [];
    for(let pessoa of this.pessoas){
      if(pessoa.sexo == 'M')
        homens.push(pessoa);
    }
    return homens;
  }
};
// console.log(module);
