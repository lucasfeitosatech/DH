// Estruturas de repetição
// -> while -> enquanto
// -> for -> para
// -> percorrendo arrays

// enquanto alguma condicao for verdadeiro executar o bloco de código abaixo
// Loop Infinito, ou seja, o programa nunca para

let contador = 10000;
while(contador >= 0){
  //console.log(contador);

  // Incremento
  // Quatro formas diferentes de incrementar uma variavel
  //contador++;
  //++contador;
  //contador += 1;
  //contador = contador + 1;

  //Decrementar 
  contador--;
  //--contador;
  //contador -= 1;
  //contador = contador - 1;
  
}

// Para i de 0 ate 1000 faca alguma coisa 
/*
  Primeiro:  definir a variavel inicial com um valor 
  Segundo: Definir o critério de parada do laço 
  Terceiro: Definir o passo da variavel inicial 

*/
// Para i de 0 até 20 faca alguma coisa
for(let i = 0;i <= 20; i++){
  //console.log(i);
}

//for of
//for in
//forEach
//             0


function somarArray(array,inicio,fim){
  let soma = 0;
  for(let i = inicio; i <= fim; i++){
    // i = 0 -> elemento = 5 -> soma = 5
    // i = 1 -> elemento = 10 -> soma = 15
    const elemento = array[i];
    soma += elemento;
  }
  return soma;
}

console.log(   somarArray([3,4,6,1,100],0,2)   );






