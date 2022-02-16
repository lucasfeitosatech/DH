// José
// da Silva
// 27
// 83.5
// 1.70
// Ouro
// Ctrl + /
//Alt + Shift + A

//Declaração de função
//Nos () colocamos os parametros que podem ser opcionais e também podem infinitos. 
//Podendo passar quantos parametros eu quiser
// 0 ... N
var minhaFuncao;
function soma(num1,num2,num3){
  return num1 + num2 + num3;
    /*Return encerra a função e retorna o valor especificado para quem está 
      chamando a função.
    */
  const x = 0;
}


//Hoisting

var x = 0;

console.log(minhaFuncao);



var minhaFuncao = function(nome = "") {
  // nome = Lucas
  // Escopo da função
  //Bloco de código a ser executado
  // const soma = soma(1,2,3);//6
  console.log("Olá, seu nome é: " + nome);
} 

minhaFuncao();



//Chamda ou invocação da função
// minhaFuncao("Fulano");

// Function = Execucao de um bloco de código

// function imc(sexo,idade,peso,altura){
//   const calculo1 = peso/altura**2;
//   const cacula2 = Math.sin(calculo1);

//   return calculo1/calcula2;
// }
// let imc2 = imc("Masculino",27,83.5,1.7);
// imc2 = imc("Masculino",25,83.2,1.65);
// const imc3 = imc("Masculino",27,93.5,1.9);
// console.log(imc2);









