let clientes = [
  { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' },
  { id: 2, nome: 'Fulano2', cpf: '098.312.876-00' },
  { id: 3, nome: 'Fulano3', cpf: '000.111.222-33' },
];

const cliente = { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' };

//   //<tr>
//      <td>cliente.id</td>
//      <td>cliente.nome</td>
//      <td>cliente.cpf</td>
//    </tr>


// const client1 = clientes[0];
// const id = client1.id;
// const cpf = client1.cpf;

for (let index = 0; index < clientes.length; index++) {
  /*
    index = 0 -> cliente = { id: 1, nome: 'Fulano1', cpf: '123.323.411-00' }
    index = 1 -> cliente 
    ...
    index = 30 -> cliente = { id: 10, nome: 'Fulano3', cpf: '000.111.222-33' },

  */
  const cliente = clientes[index];

}

// DOM -> Document Objet Model 


// for of -> Exclusivo para arrays 
let html = '';
for (let cliente of clientes) {
  //   <tr>
  //      <td>cliente.id</td>
  //      <td>cliente.nome</td>
  //      <td>cliente.cpf</td>
//    </tr>

  let tr = '<tr>'
  const tdId ='<td>' + cliente.id + '</td>';
  tr += tdId;
  const tdNome = '<td>' + cliente.nome + '</td>';
  tr += tdNome;
  const tdCpf = '<td>' + cliente.cpf + '</td>';
  tr += tdCpf;
  tr += '</tr>';

  html += tr;
}

console.log(html);

