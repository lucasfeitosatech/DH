// Tipos de dados primitivos no Javascript 
//Number -> Número -> Inteiro ou Decimal
//Booleano -> Verdadeiro ou falso -> true ou false
// String ou Texto -> Sequencia de caracteres 

//Template strings 
//José
// da Silva
// 27
// 83.5
// 1.70
// Ouro


let nome = 'José';
let sobrenome = 'da Silva';
let idade = 27;
let peso = 83.5;
let altura = 1.7;
let temPlano = true;
let imc = peso/(altura**2); 
//Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx
//console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2));
//Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos e seu indice de massa corporal é de ${imc.toFixed(2)} `);

// Carlos
// de Souza
// 28
// 80.1
// 1.76
// Diamante


nome = 'Carlos';
sobrenome = 'de Souza';
idade = 28;
peso = 80.1;
altura = 1.76;
temPlano = true;
imc = peso/(altura**2); 
//console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2));
//Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos e seu indice de massa corporal é de ${imc.toFixed(2)} `);


