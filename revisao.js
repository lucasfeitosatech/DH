



function MeuObjeto(numeros_,prop2_,prop3){
  this.numeros = numeros_;
  this.prop2 = prop2_;
  this.prop3 = prop3;
  this.func1 = function(){
    const concat = this.prop2 + this.prop3;
    let soma = 0;
    for(let prop of this.numeros){
      //console.log(prop);
      soma = soma + prop;
    }
    return soma;
  }
  this.func2 = function(){
    this.numeros[0] = 1000000;
    console.log(this.numeros);
  }
}

let meuObjeto1 = new MeuObjeto([1,2,3],4,'5');
let meuObjeto2 = new MeuObjeto([4,5,6],4,'5');
let meuObjeto3 = new MeuObjeto([7,8,9],4,'5');

module.exports = {
  MeuObjeto:MeuObjeto,
  listaObjetos:[meuObjeto1,meuObjeto2,meuObjeto3]
}

