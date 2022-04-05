// Módulos internos ou nativos do nodeJS -> São bibliotecas internas que
// podemos utilizar para resolver nossos problemas no dia-dia de programadores
// Require -> Faz o requirimento do módulo para que possamos utilizar 
// seus metódos e afins. 
let fs = require('fs');
const numeros = [1,2,4,5,6,7,8,9,10];

//fs.writeFileSync("escrita.txt", "Estou modificando o conteudo do arquivo usando o JS");
//console.log(dadosDoArquivo);
const dados = fs.readFileSync('./notas.csv',{encoding:'utf8', flag:'r'});
const alunos = dados.split("\r\n");

let html = `<table>`;

for(let i = 0;i<alunos.length;i++){
  const aluno = alunos[i].split(',');
  const matricula = aluno[0];
  const nome = aluno[1];
  const cp1 = aluno[2];
  const cp2 = aluno[3];
  if(i == 0){
    html += `
      <tr>
        <th>${matricula}</th>
        <th>${nome}</th>
        <th>${cp1}</th>
        <th>${cp2}</th>
      </tr>
    `
  } else {
    html += `
      <tr>
        <td>${matricula}</td>
        <td>${nome}</td>
        <td>${cp1}</td>
        <td>${cp2}</td>
      </tr>
    `
  }
}

html += '</table>';
// console.log(html);


let listaAlunos = [];
for(let i = 1;i<alunos.length;i++){
  const aluno = alunos[i].split(',');
  const objetoAluno = {
    matricula:aluno[0],
    nome:aluno[1],
    cp1:Number(aluno[2]),
    cp2:Number(aluno[3])
  }
  listaAlunos.push(objetoAluno);
}

function enviarListaParaBackend(lista){
  //...Enviando lista
}

enviarListaParaBackend(listaAlunos)

console.log(listaAlunos);



