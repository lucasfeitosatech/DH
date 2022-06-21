let calculadora = require('../../Modulos/Calculadora/index');
calculadora.soma(2,5,5);
/*
  Módulos Nativos do Node.JS 
  Módulos Externos de outras pessoas
  Nossos Módulos
*/

/*
  Possibilidade de reutilizar os códigos

  Centralizar a lógica dos nossos códigos

  Facilidade de alteração

  Uma vez alterado no arquivo principal, as mudanças são nos demais arquivos o qual o módulo foi importado 

*/

//Módulos Externos de outras pessoas
let readlineSync = require("readline-sync");
// let nome = readlineSync.question('Qual o seu nome?');

// Módulos Nativos do Node.JS

let fs = require("fs");
// Sync ->
// Async
// console.log('Processando Primeiro arquivo');
//fs.writeFileSync("programming.txt", 'Criando um arquivo sincrono');
// console.log('Processou Primeiro arquivo');

const data = fs.readFileSync("./turma2.csv", {
  encoding: "utf-8",
});

let linhas = data.split("\r\n");
let html = `<table>`;
for (let i in linhas) {
  const linha = linhas[i];
  let dados = linha.split(",");
  const carimbo = dados[0];
  const email = dados[1];
  const nome = dados[2];
  if (i == 0) {
    html += `<tr>
        <th>${carimbo}</th>
        <th>${email}</th>
        <th>${nome}</th>
      </tr>
    `;
  } else {
    html += `<tr>
    <td>${carimbo}</td>
    <td>${email}</td>
    <td>${nome}</td>
  </tr>
`;
  }
}

html += `</table>`;
// console.log(html);

fs.writeFileSync("index.html", `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${html}
</body>
</html>

`);
