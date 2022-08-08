// Diferença entre let e var
// Hoisting
// var minhaVariavel = undefined;
// var x;


// escopo -> o espaço onde as variaveis são visiveis

// console.log(minhaVariavel); // o valor dessa variavel neste exato momento não foi definido
let minhaVariavel = 'meu texto';
console.log(minhaVariavel);

{
  console.log(x);
  var x = 5;
  //console.log(x);

}
console.log(x);