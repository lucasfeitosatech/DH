const imprimir = texto => console.log(texto);
const imprimir4 = (texto,texto2,texto3) => {
  const concat = texto + texto2 + texto3;
  console.log("Concatenacao da arrow:" + concat);
  return concat;
}; 


const imprimir2 = function (texto) {
  console.log(texto);
}

if(true)
  console.log("")
else
  console.log("");

const teste = {
  imprimir: function(){
  },
  imprimir2: () => {
    
  }
}


// console.log("Concatenacao da chamada: " + );
// for(let i = 1;i<=10;i++){
//   setTimeout(() => {
//     console.log("Estamos no segundo:" + i );
//   }, i*1000 );
// }


const imprimir5 = texto => {
  console.log(texto);
}

const soma = function(numA, numB, callback){
  const soma = numA + numB;
  callback(soma);

}

// soma(5,6,imprimir5);

//Exercicio de Calcula Perimetro da Lista (Tipo e Perimetro)
const calculaPerimetro = (lado1,lado2,lado3,callback) => {
  const perimetro = lado1 + lado2 + lado3;
  return {
    tipo: callback(lado1,lado2,lado3),
    perimetro:perimetro
  };
}

const tipoTriangulo = (lado1,lado2,lado3) => {
  if(lado1 == lado2  && lado1 == lado3){
    //console.log("Equilatero");
    return "Equilatero";
  } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    //console.log("Isoceles");
    return "Isoceles";
  } else {
    //console.log("Escaleno");
    return "Escaleno";
  }
}

const perimetro = calculaPerimetro(5,4,5,tipoTriangulo);

console.log(perimetro);





//setTimeout( imprimir4("1","2","3") , 1000);
// setTimeout(() => {console.log("this is the second message")}, 2000);
// setTimeout(() => {console.log("this is the third message")}, 3000);
  
