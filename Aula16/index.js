

/*
  Módulos 

  - Módulos externos -> readlineSync: Foi desenvolvido por outra pessoa e 
  não existe nativamente no NodeJS. Fazemos a instalação de módulos através do NPM
  ou de forma manual 
  - Módulos do NodeJS -> São módulos nativos e disponíveis para podermos utilizar
  fileSystem -> Possui metódos que facilitam a manipulação de arquivos
  - Como criar nossos módulos
*/

const fs = require('fs');
const calculadora = require('../Modulos/Calculadora/index.js');
// Esse método cria um arquivo no caminho que você especificar 
fs.writeFileSync('./meuarquivo2.txt','Escrevendo no arquivo 91232019832901',{
  encoding:'utf-8'
})

