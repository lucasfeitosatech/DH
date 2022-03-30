// Modúlos Internos do NODeJS 

// Require - Requerindo o módulo File System para utilizar os seus métodos 
const fs = require('fs');

const data = fs.readFileSync('./dados.csv',
            {encoding:'utf8', flag:'r'});

const linhas = data.split('\r\n');
console.log(linhas);
let html = `
  <table>
`
for(let i in linhas){
  const linha = linhas[i];
  const dados = linha.split(',');
  const nome = dados[0];
  const nota = dados[1];
  if(i == 0){
    html += `
      <tr>
        <th>${nome}</th>
        <th>${nota}</th>
      </tr>
    `
  } else {
    html += `
      <tr>
        <td>${nome}</td>
        <td>${nota}</td>
      </tr>
    `
  }  
  // const nota 
}

html += '</table>';

console.log(html);