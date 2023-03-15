/*
  Aula 11 - String e Arrays 

  Introdução a objetos 

  Metódos de Strings 

  - replace
  - replaceAll
  - trim
  - toLowerCase
  - toUpperCase

  Propriedades de Strings 

   - length 


   Array -> Definição 

   Metódos e propriedades de Arrays

*/

/*
  Objeto -> Uma representação qualquer que possui 
  algumas propriedades -> Caractériscas 

  Metódos -> Comportamentos 

  Funções que estão vinculados a um objeto

  Acessar os metódos e as propriedades 

  Notação dot notation - Notação de ponto (.)

*/

/*
  Pessoa
    Propriedades
      idade:18
      peso: 70
      nome: Lucas
    Metódos
      andar
      falar
      comer
*/

const meuTexto = '123';
// length -> Indica o tamanho de caracteres da string;
meuTexto.length // 3 

const senha = '123';
if(senha.length < 4){
  console.log("Senha inválida");
}

const email = 'teste@teste';
// includes -> Verifica se a string possui algum texto;
if(email.includes("@")){
  console.log("Email válido");
}

// substring -> Obtém uma parcela da string
//            012345678910
const data = '14/03/2023 15:20:16';
data.substring(0,10); // 14/03/2023;

// 0123456789 -> A indexação nas linguagens de programação
// são  normalmente iniciadas no índice 0
const alfabeto = 'abcdefghij';
// charAt -> Obtém o caratér que está no indíce informdo
alfabeto.charAt(0) // a
alfabeto.charAt(1) // b
// Notação de colchetes -> [] -> Nos possibilita acessar algum elemento pelo índice
alfabeto[0] // a -> Acesso direto
alfabeto[1] // 
console.log("Teste");
console.log(alfabeto[0],'Teste');

alfabeto[9] // j
alfabeto[alfabeto.length - 2] // j

/*
  Indexação

  0 -> Primeiro caracter ou elemento
        10  - 1 = 9 
  alfabeto.lenth - alfabeto.length = 0 -> Primeiro elemento
        ...
  alfebeto.lenth - 2 -> Pnúltimo
  alfabeto.length - 1 -> Último elemento


*/


/*
  Arrays -> Lista
  Lista
  //              0      1         2          3         4
  Array Alunos (Lucas,Fulano 87, Fulano 34, Fulano 28, Fulano --3.14...,)

  Array -> Uma coleção de dados sequenciais 
*/

// Declaração de um array
// let,const ou var
// [] => Colchetes Indicam um array vazio (Sem elementos)
// Dentro dos [], cada elemento é separado por vírgula(,)
//                 0         1           2           3
// Possui o mesmo tipo de dados 
// Array de strings
let alunos = ['Fulano 38'];
// Array de números
//               0   1   2   3   4
const numeros = [56,98,-20,3.14,15];
// Array Mistos
const arrayMisto = ['teste',1,true,null,NaN,function(){},[1,2,3]]

// Propriedades 
// 0 
alunos.length // Indica a quantidade de elementos do array 

// Metódos 
// push -> Adicionar um elemento no final do array
alunos.push('Lucas');
// ['Lucas']; 
alunos.push('Fulano 56');
// ['Lucas','Fulano 56']
console.table(alunos);

//Notação de colchetes -> [] -> Nos possibilita acessar algum elemento pelo índice

alunos[1] // -> Lucas

// pop -> 

alunos.pop(); // Removeu o último elemento
console.table(alunos);

// shift -> Remove o primeiro elemento

alunos.shift();
console.table(alunos);

// unshift -> Adicionar um elemento no começo do array

alunos.unshift('Fulano 98','Fulano 34','Fulano 28');
console.table(alunos);
console.table(alunos.reverse());

// alunos = [];

//


/*
  Como aplicar isso em uma estrutura de repetição

*/













