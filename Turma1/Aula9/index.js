let texto = "Esse e um texto para utilizar";
console.log(texto.lastIndexOf('5'));


console.log(texto.replaceAll(" ",""));

console.log(texto.slice(2,10));

let nome = "Zé de Sá";
let nomeESobrenome = nome.split(" ");
console.log(nomeESobrenome);
const primeiroNome = nomeESobrenome[0];
const sobrenome = nomeESobrenome[1];

if(nome.length > 1 && sobrenome != null){
  //cadastrar
} else {
  console.log("Usuário inválido");
}

let numeros = [10,20,30,15];
let nomes = [ 'Zé', 'de', 'Sá' ];

nomes[nomes.length] = "Lucas";
console.log(nomes);
nomes[nomes.length - 1] = "Ultima posição";
console.log(nomes);

console.log(nomes[nomes.length - 1]);
let frutas = ['melancia','abacaxi'];
let arrayMisto = [];
//Adiciona no final
arrayMisto.push(10);
//remove do final
arrayMisto.pop();
//adiciona no inicio
arrayMisto.unshift(10);
//remove do inicio
arrayMisto.shift();

numeros = [1,2,3];
let letras = ['1','b','c'];
console.log(numeros.concat(letras));

if(numeros[0] === letras[0]){
  console.log("Igual");
} else {
  console.log("Não igual");
}









