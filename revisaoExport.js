let meuObjeto = require('./revisao');
//console.log(meuObjeto);

// let teste = function (){

// }

// console.log(teste);

let meuObjeto4 = new meuObjeto.MeuObjeto([0,-1,1],4,'5');
meuObjeto.listaObjetos.push(meuObjeto4);

let meuObjetoPai = {
  listaObjetos:meuObjeto.listaObjetos,
  func3:function(){
    for(let objeto of this.listaObjetos){
      const soma = objeto.func1();
      console.log('Objeto: ' + objeto.numeros + ' soma: ' + soma);
    }
  }
}

meuObjetoPai.func3();