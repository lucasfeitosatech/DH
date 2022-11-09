/*
  Aula 10 - Strings e Arrays

  Propriedades -> Caracteristicas do objeto
    length -> Indica a quantidade caracteres da string
  Metódos -> Ações do objeto

*/
const senha = "";
senha.length // 6
// Validação de senha  
if (senha.length > 3) {
  //console.log("Senha válida");
}

const email = "teste@gmail.com";
if (email.includes("@") && email.includes(".")) {
  //console.log("Email válido");
} else {
  //console.log("Email inválido");
}

const nome = "        Lucas Feitosa         ";
//console.log(nome.trim());

// @ - a 
// & - b
// * - p 
//                             0123                             
const mensagemCriptografada = "abcd";
//console.log('Mensagem decodificada', mensagemCriptografada.replaceAll("@", "a").replaceAll("&", "b").replaceAll("*", "p"));

// [indice] -> Utilizamos os colchetes para buscar o indice de algum dado 
// indice -> vai ser um valor onde o inteiro (0,1,2,3,4...n);
// 0 -> equivale a primeira posição
//console.log(mensagemCriptografada.indexOf('f')); // -1 -> Não possui um indice válido


const nome2 = "Lucas";
const sobrenome = "Feitosa";
const nomeCompleto = `${nome2} ${sobrenome}`;

//console.log(nome2 + sobrenome);




/*
  Arrays -> Lista 

  Array -> Uma variável que armazena dados indexados em apenas uma variável

  Lista de notas 
  Lista de nomes
  Lista de carros
  ...


*/
//              0    1    2
const notas = [7.5, 9, 6.4,];
const media = (notas[0] + notas[1] + notas[2]) / 3;
const tamanho = notas.length// -> Retorna a quantiade de elementos no array -> 3
// O último elemento do array vai ser sempre o tamanho - 1
const ultimaNota = notas[tamanho - 1] // 6.4;

const arrayMisto = [0, true, NaN, undefined, "thddiuasshdiuasadhsu", function () { }];
//                 0                1
const matriz = [['a','b','c'],['w','y','z']];

//console.log(matriz[1][2]);

const nomes = []; // Array vazio -> Lista de nomes vazia

// push -> Adiciona um novo elemento no final do array
nomes.push("Pedro");
nomes.push("Abel");


// unshift -> Adiciona um novo elemento no inicio do array
nomes.unshift("Luana");


// pop -> Remove o último elemento do array

const ultimoRemovido = nomes.pop() //retorna O elemento que foi removido;

// shift -> Remove o primeiro elemento do array

const primeiroRemovido = nomes.shift();


console.table(nomes);

















