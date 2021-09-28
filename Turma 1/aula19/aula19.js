// Tem-se um conjunto de dados contendo a altura e o 
// sexo (M ou F) de 15 pessoas. 

let meubanco = require("./meubanco");
//console.log(meubanco.pessoas);
//meubanco.maiorEMenorAltura();
let media = meubanco.calcularMediaOtimo();
console.log("Media da idade dos que responderam otimo: " + media.toFixed(2));
let qtd = meubanco.qtdPessoasRegular();
console.log("Quantidade de pessoas regular: " + qtd);
let porcentagem = meubanco.porcentagemDosBons();
console.log("A porcentagem dos bons é: " + porcentagem + "%");








//Faça um programa que calcule e escreva:
	
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.
