// Forma tradicional ou declarativa 


function soma(num1,num2){
  return num1 + num2;
}
// Forma expressa

let soma2 = function(num1,num2){
  return num1 + num2;
}
soma2(5,6);

// Arrow functions 
let soma3 = (num1,num2) => {
  return num1 + num2;
}; 

//console.log(soma3(5,6));


// Dentro da arrow function não conseguimos 
// obter a referencia do objeto principal utiliando o this
let meuObjeto = {
  prop1:1,
  prop2:2,
  func1: () => {
    meuObjeto.prop1
    meuObjeto.prop2
  },
  func2: function(){
    this.prop1;
    this.prop2;
  } 
}

// Quando temos só um parametro na minha função os () podem sem omitidos 
// Quando temos um retorno apenas de uma linha, 
// o mesmo também ser colocado sem as {} e a palavra return
let quadrado = num => num**2;

// console.log(quadrado(2));

let notas = [7.6,8.6,9.3];
let letras = ['a','b','c'];


for(let i = 0; i< notas.length; i++){
  console.log(notas[i]);
  if(notas[i] == 7.6){
    break;
  }
}

// callback -> chamar de volta 
// callback -> Passar uma função com parametro para que ela possa ser chamada
// em algum momento especifico; 
function callback(elemento,index){
  console.log(elemento,index);
}
notas.forEach((nota) => {});
letras.forEach(callback)


let somaNotas = notas.reduce(function(acumulador,nota){
  return acumulador + nota;
});

let somaLetras = letras.reduce(function(acumulador,letra){
  return acumulador + letra;
})
// Media
 console.log(somaNotas/notas.length);
 console.log(somaLetras);

 let numeros = [1,2,3,4,5];
 let numerosQuadrados = numeros.map(function(valorAtual,index){
  return `<h1>${valorAtual}</h1>`;
 })

 console.log(numerosQuadrados.join(''));


