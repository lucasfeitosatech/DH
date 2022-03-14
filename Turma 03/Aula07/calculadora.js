
//Calculadora nível 1 
function adicionar(num1,num2){
  return num1 + num2;
} 

function subtrair(num1,num2){
  return num1 - num2;
}

function multiplicar(num1, num2){
  return num1 * num2;
}

function dividir(num1, num2){
  return num1 / num2;
}

//Calculadora nível 2
console.log( adicionar(5,10) );
console.log( subtrair(20,13) );
console.log( multiplicar(5,9) );
console.log( dividir(10,5) );


//Calculadora nível 3

// Crie uma função chamada quadradoDoNumero, 
// que recebe um número como parâmetro e deve retornar 
// esse número multiplicado por ele mesmo, ou seja, ao quadrado.

function quadradoDoNumero(num){
  return multiplicar(num,num);
}
quadradoDoNumero(5);
// Crie a função mediaDeTresNumeros, 
// ela deve calcular a média de 3 números, 
// que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() 
// você precisará usar algumas funções criadas 
// anteriormente em nossa calculadora.

function mediaDeTresNumeros(num1,num2,num3){
  const soma = adicionar(num1,num2);
  const soma2 = adicionar(soma,num3);
  return dividir(soma2,3);
}

console.log("Media de tres:");
console.log(mediaDeTresNumeros(8.5,6,9));

// Crie a função calculaPorcentagem, 
// que receberá dois parâmetros: 
// o número total e a porcentagem que deseja calcular, 
// e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  
// (deve retornar 45, pois é 15% de 300). 

function calculaPorcentagem(totalPorcentagem,porcentagem){
  const multiplicao = multiplicar(totalPorcentagem,porcentagem);
  return dividir(multiplicao,100);
  //return totalPorcentagem*porcentagem/100;
}

console.log( calculaPorcentagem(300,15) );

// Crie uma função geradorDePorcentagem 
// que leva dois parâmetros, e 
// que deverá retornar a porcentagem do 
// primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200)
//  (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(percentual,total){
  return multiplicar(dividir(percentual,total),100); 
}

console.log( geradorDePorcentagem(2,200) + "%");


