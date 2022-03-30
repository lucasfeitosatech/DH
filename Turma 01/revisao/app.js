let numeros = [1,2,3,5,6];
for(let i = 0;i<numeros.length;i++){
  let numero = numeros[i];
  //console.log(numero);
}

// for in -> Recebe os indices do array 0...1...2..3...n - 1
for(let i in numeros){
  let numero = numeros[i];
  //console.log(numero);
}

numeros.forEach( elemento => console.log(`Elemento ${elemento}`));
let filmes = ["filme1","filme2","filme3"];
const filmesMaisculos = filmes.map(filme => filme.toUpperCase());
console.log(filmesMaisculos);
// for of -> Recebe os elementos em cada posição de forma direta
// for(let linha of numeros){
//   console.log(`Elementos da linha ${linha}`)
//   for( let elemento of linha){
//     console.log(`Elemento: ${elemento}`);
//   }
// }



// Declaração de forma direta
function soma(a,b){
  return a + b;
}

function quadrado(n){
  return n**2;
}

// Arrow Function 
let soma2 = (a,b) => a + b;
let quadrado2 = n => n**2;

// Callback -> Forma de passar uma função dentro da outra 
// Callback -> Chamar de volta 
//1s = 1000ms

function login(usuario,senha){

}


function callback() {
  console.log("Passou 5 segundos");
}

setTimeout(callback,5000)

function calculadora(num1,num2,operacao) {
  return operacao(num1,num2);
}

let subratrair = (a,b) => a - b; 

calculadora(5,6,soma2)

console.log("Fim da aplicação");


// Arrow Function 
