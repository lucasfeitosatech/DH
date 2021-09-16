const imprimirTeste = (texto = "") => {
  console.log(texto);
}
imprimirTeste();

const UM_SEGUNDO = 1000;

const soma = (num1 = 0,num2 = 0,callback = () => {}) => {
 
  callback(num1+num2);
  return num1 + num2;
}

function imprimir2(texto){
  console.log(texto);
}


//soma();
console.log(soma());

// const myObj = {
//   imprimir1:function(){
    
//   },
//   imprimir2:function(){
//     this.imprimir1();
//   },
//   imprimir3:() => {
//     myObj
//   }
// }

setTimeout(imprimirTeste,1*UM_SEGUNDO);



