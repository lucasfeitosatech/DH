/*
  Módulos 

    Um conjunto de código que foi encapsulado e pode ser reutilizado/reaproveitado
    onde seja necessário
  
    Internos ou nativos do NodeJS - Já vem instaldos com o próprio node
      fs -> File System -> Permite a manipulação (Escrita ou Leitura) de arquivos


    Externos ou da Comunidade -> 
      readline-sync -> Serve para obter entradas através do terminal 
      ReactJS (Facebook) -> Serve para criação de interfaces (Biblioteca)
      ReactNative -> Serve para criação de interfaces mobile
      Express -> Serve para criação de servidores (back-end e API's);
      AngularJS (Gogle) -> Serve para criação de interface (Framework);
      VueJS -> 
      VanillaJS (JavaScript Puro)

      HTML,JS,CSS

      Framework -> Mais robusta, já vem com uma arquitetura pré-definida 
        clientHttp -> Para realizar chamadas REST 

      Biblioteca -> Aglomerado de funções de funcionalidades que podemos utilizar
        Axios 
        fetch



  

    Próprios

*/
// Uma importacão de código de outro lugar
// CommonJS Modules -> module.exports (Exportar) e require(Importar)
// ES6 Modules export (Exportar) e Import (Importar)
//           require -> Recebendo o código de módulo fs e armazenando variável
const fs = require('fs');
fs.appendFileSync // Adicionar conteúdo em arquivos
fs.writeFileSync // Realizar escrita em arquivos
fs.readFileSync // Realiza realiza letirua de arquivos

const readlineSync = require('readline-sync');

// Wait for user's response.
// const userName = readlineSync.question('Qual seu o nome? ');
// console.log('Olá ' + userName + '!');

const express = require('express')
const app = express()

app.get('/users', function (req, res) {
  res.json([
    {
      name:'Lucas',
      idade:18,
    },
    {
      name:'Fulano1',
      idade:19
    }
  ])
})

// app.listen(3000);
// O require trás o valor que está contido dentro de module.exports
const calculadora = require('../../modulos/calculadora/index');


calculadora.PI
calculadora.soma(1,2);
calculadora.subtracao(1,2,5);
calculadora.multiplcao(6,7,8);

// Desestruturação
const {} = require('../../modulos/calculadora/index');



//soma(2,5)


const obj = {
  nome:'Lucas',
  idade:18,
  peso:90,
}

// const nome = obj.nome; // Lucas
// const idade = obj.idade; // idade

const {nome,idade,peso} = obj;


const numeros = [0,1];


// const elemento0 = numeros[0];
// const elemento1 = numeros[1];

const [elemento0,elemento1] = numeros;


