

function MeuObjeto(prop1_,prop2_,prop3_){
  this.prop1 = prop1_;
  this.prop2 = prop2_;
  this.numeros = prop3_;
  this.func1 = function(){
    console.log(this.numeros);
  }
  this.func2 = function() {
    let soma = 0;
    // let soma =  this.numeros.reduce(function(elementoAnterior,proximoElmento){
    //     // [1,2,3,4];
    //   return elementoAnterior + proximoElmento;

    // });
    for(let numero of this.numeros){
      soma = soma + numero;
    }
    
    return soma;
  }
    
  

}


let meubObjeto1 = new MeuObjeto(2,'2',[5,6,7,8]);

let meubObjeto2 = new MeuObjeto(1,'1',[1,2,3,4]);
// console.log(meubObjeto2);
// meubObjeto2.func2();
// console.log(meubObjeto2);

let listaObjetos = [meubObjeto1,meubObjeto2]


module.exports = {
  construtor:MeuObjeto,
  lista:listaObjetos
}






