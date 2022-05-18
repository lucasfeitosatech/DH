 // Maior
 5 > 3 // -> Verdadeiro 
 
 //Menior
 2 < 1 // -> Falso

 // Maior igual 
 5 >= 5 // -> Verdadeiro
 
 // Menor igual

 5 <= 2

 // Igualdade 

// == -> Comparação por valor
// ===  -> Comparação por tipo e valor
console.log( 5 == '5') // Verdadeiro
console.log( 5 === '5') // Falso

// Desigualdade 
// Diferente
// != -> Comparação por valor
// !==  -> Comparação por tipo e valor
console.log( 5 != '5') // Falso
console.log( 5 !== '5') // True

// AND, OR, NOT
// AND -> E -> &&

       
console.log(5 < 2 && 6 > 3 && 10 > 8);


// Para que a expresão seja verdadeiro, tudo tem que ser verdadeiro
let a = 'Hoje vai chover'
// E
let b = 'Hoje vai ter aula';

// Tamanho da senha > 6 && senha possui Letras
// Se a minha expressão for falsa, não entra no sistema
    // Se não posui letra ->  Uma mensagem
    // Se senha muito curta -> Outra mensagem 
// Se for verdadeiro então autentica usuário


// Para que seja verdadeiro pelo menos uma tem que ser verdadeira
// Somente será falso se todas foram falsas
 a = 'Hoje vai chover'
// OU -> OR -> ||
 b = 'Hoje vai ter aula';


 let corSemaforo = 'Verde';
 // Se verde ou Amarelo -> Pode passar
 console.log(corSemaforo === 'Verde' || corSemaforo === 'Amarelo' );


 let alunoAprovado = false;

 // Se alunoAprovado === false
 // Se !alunoAprovado -> Mostra algum erro


 let numero = 0 // -> false;
 let numero2 = 1// -> true;
 
 undefined // falso
 null // falso 
 Infinity // true
 NaN // falso
 let myObj = {} // Objeto vazio -> falso
 let outroObh = {
   nome:5
 } // verdadeiro
 const meuArray = [] // Array vazio -> falso
 const numeros = [1] // Array com dados -> verdadeiro

 // Truthy e Falshy 
 let str = '' // -> false 
 let msg = 'haha!' // -> true
 let eBonito = 'false' // -> true

 console.log(false)




