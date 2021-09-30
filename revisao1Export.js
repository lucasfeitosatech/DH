let MeuObjeto = require('./revisao1');

let MeuObjeto3 = new MeuObjeto.construtor(3,'3',[6,7,8]);
//console.log(MeuObjeto3);
MeuObjeto.lista.push(MeuObjeto3);
//console.log(MeuObjeto.lista);

let objetoPai = {
  propPai1:1,
  propPai2:2,
  listaObjetos:MeuObjeto.lista,
  funcPai1:function(){
    for(let objeto of this.listaObjetos){
      console.log("objeto: " + objeto.numeros + " soma: " + objeto.func2() );
    }
  },
  funcPai2: () => {
    console.log(objetoPai.propPai1);
  }
}



objetoPai.funcPai1();
objetoPai.funcPai2();

