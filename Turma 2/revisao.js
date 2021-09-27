// Cada espectador de um cinema respondeu a um 
// questionário no qual constava sua idade e a 
// sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:


// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let bancoDeDados = require('./aula19/pessoas');

bancoDeDados.mediaDaIdadePessoasOtimo();
let qtd = bancoDeDados.quantidadePessoasRegular();
console.log("Quantidade de pessoas regular:  " + qtd);
qtd = bancoDeDados.porcentagemBom();
console.log("Porcentagem bom:   " + qtd + "%");

