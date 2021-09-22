//Map, Reduce
let meuBanco = require("./banco");


let table = `
    <table> 
      <tr>
        <th>Número</th>
        <th>Titular</th>
        <th>Saldo</th>
        <th>Tipo</th>
      </tr>
      ${meuBanco.banco.clientes.map(cliente => 
        `<tr>
          <td>${cliente.numero}</td>
          <td>${cliente.titular}</td>
          <td>R$ ${cliente.saldo.toLocaleString('pt-br',{minimumFractionDigits:2})}</td>
          <td>${cliente.tipo}</td>
        </tr>
        `  
      ).sort((primeiroCliente,segundoCliente) => primeiroCliente.numero - segundoCliente.numero).join("")}
    </table>
`;

//Html dinamico por for of

// let table = `
//     <table> 
//       <tr>
//         <th>Número</th>
//         <th>Titular</th>
//         <th>Saldo</th>
//         <th>Tipo</th>
//       </tr>`;

// for (let cliente of meuBanco.banco.clientes){
//   table += `<tr>
//           <td>${cliente.numero}</td>
//           <td>${cliente.titular}</td>
//           <td>R$ ${cliente.saldo.toLocaleString('pt-br',{minimumFractionDigits:2})}</td>
//           <td>${cliente.tipo}</td>
//         </tr>`;
// }

// table += `
//   </table>
// `;

function injetarConteudoNaDiv(id,conteudo){

}

injetarConteudoNaDiv("minhaDiv",table)

console.log(table);




let numeros = [1,2,3,4,5,6];

let palavras = ['a','b','c','d','e','f'];

let numerosDobro = numeros.map(elemento => elemento*2);
let palavrasUpper = palavras.map(palavra => palavra.toUpperCase());

//console.log(palavrasUpper);

/* 
Crie um array de números e utilize a 
função .reduce() para devolver uma 
string com os números formatados.
*/

let soma = 0;
// for(let i = 0;i<numeros.length;i++){
//   soma += numeros[i];
// }

/* 
Crie um array de números e utilize a 
função .reduce() para devolver uma 
string com os números formatados.

Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
*/
let concatenacao = numeros.reduce(function(acumulador,elemento){
  return acumulador + ' - ' + elemento;
});

console.log(concatenacao);