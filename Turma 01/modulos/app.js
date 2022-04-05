// Módulos externos e Módulo criados por nós

// Módulos externos - Módulos desenvolvidos pela comunidade
// NPM - Node Pack Manager - Gerenciador de Pacotes do Node 

let readlineSync = require('readline-sync');
let calculadora = require('../../modulos/calculadora/app.js');
calculadora.p




let usuarios = [];
function Usuario(nome,id){
  this.nome = nome;
  this.id = id;
}
for(let i = 0;i<10;i++){
  const nome = readlineSync.question('Qual o seu nome? ');
  const id = readlineSync.question('Qual o seu id? ');
  usuarios.push(new Usuario(nome,id));
}
console.log(usuarios);