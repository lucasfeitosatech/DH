/*
  Aula 10 
    If ternário
    Strings
    Arrays
*/

// If Ternário 

/*
  Possui uma notação mais simplificada
  ele retorna um valor para alguma variável
*/

let media = 7;
// let resultado = '';
// if(media > 7){
//   resultado = 'Aprovado';
// } else if(media > 5 && media <= 7) {
//   resultado = 'Recuperação';
// } else {
//   resultado = 'Reprovado';
// } 

let resultado = media >= 7 ? 'Aprovado' : 
media > 5 && media < 7 ? 'Recuperação' :
media == 8 ? 'Reprovado' : '';


//Strings 

/*
  Strings possuem o comportamento parecido com um objeto 

  Métódos e propriedades que podemos usar para facilitar o nosso trabalho
  
  Propriedades -> Caracteriscas da string 

  Métodos -> Açõees que podem ou não retornar algum valor ou nova informação

  */
// 0123...8
// Meu texto
let texto = 'Meu texto';
texto.length; // 9
texto.includes('&'); // true \ false
texto.substring(0,5); //Meu t
texto.split('@');
//Meu 
// texto

console.log(texto.substring(0,5));


let email = '1@1';

if(email.includes('@') && email.length >= 3){
  console.log('Email valido');
}else  {
  console.log('Email Inválido')
}

// M -> 0
// e -> 1
// u -> 2
// ...
// o -> 8 -> tamanho - 1


/*
  Arrays -> 
    Coleção dados indexadas e sequenciais que podem ser unidimensionais ou de mais dimensões

    Bidimensionais -> Matrizes

    No javascript os tipos dentro do array podem ser diferentes -> Array Heterogeneo

*/
//                     0      1      2      3        4          5 = listaVeiculos.length - 1
let listaVeiculos = ['Bmw','Fusca','Uno','Civic','Brasilia','Carroça'];
let frutas = ['abacaxi','laranja','melão'];
let notas = [6.7,8.9,10];
let arrayBaguncado = [5,[],'Teste',true,null,Math.PI,function(){}];
let matriz = [
  [frutas,listaVeiculos,notas],
  [-3,4,0,1],
  [5,1,-4,2],
];

matriz[0][0][0] // abacaxi


// Escola -> Turmas -> Alunos -> Materias -> Professores

let numeros = []; // Array vazio
console.log(numeros.length);

// push -> Adicionar elementos no final do array;
numeros.push(1,3,5);

// unshift -> Adicionar elementos no inicio do array;

numeros.unshift(1000,999);
console.table(numeros);

let valorRemovido = numeros.pop(); // 5 vai ser removido
valorRemovido = numeros.shift(); // 1000 vai ser removido

numeros.push(76);
console.table(numeros);
// pop -> Remover o ultimo elemento
// shift -> Remover o primeiro elemento

