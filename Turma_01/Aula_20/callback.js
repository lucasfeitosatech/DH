// Callbacks -> É a possibilidade de passar uma função 
// como parametro de outra função 

function minhaFuncao(param1,param2,param3,param4){
  console.log(param1,param2,param3);
  param4(16);
  /*
  param4 = msg => console.log(msg)
  */
}

minhaFuncao([1,2,3],{name:''},1,n => console.log(n**2));


const quadrado = n => n**2;
// Executa algum código após algum tempo decorrido
// Callback - nos permite executar algum código qualquer, após alguma ação
setTimeout(() => {
  console.log(quadrado(2));
},3*1000); // 1000ms = 1s 



const numeros = [1,2,3];
numeros.map(n => n * 2); // [2,4,6];
numeros.forEach(elemento => console.log(elemento));