/*
  Aula 08 -> 

  Arrow Functions 

  Controle de fluxo

  if/else 
  switch case
  ternário 
*/
// Forma tradicional 
soma(5,3);
// var, let e
function soma(num1,num2){
  return num1 + num2;
}
// Forma expressa -> Atribuir uma função a uma variável
// função sem nome é também chamada de função anonima

let soma2 = function (num1,num2){
  return num1 + num2;
}
soma2(num1,num2);


const soma3 = (num1,num2) => num1 + num2;
const resultado = soma3(5,6);


// Arrow function

/*
  Arrow function -> Notação de flecha 
  -> Função de flexa

  (param1,param2) -> Recebimento dos parametros
  = > -> Símbolo da flecha

  Quando temos apenas uma linha na função e essa é o retorno, podemos omitir as {} e 
  a palavra reservada return

  Quando temos apenas um parametro -> podemos remover os ()
*/
function quadradoDoNumero(n){
  return n*n;
}
const quadradoDoNumero2 = n => n*n;