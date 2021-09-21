//map, reduce 
let meuBanco = require("./banco");

let numeros = [1,2,3,4,5,6];

let numerosDobro = numeros.map(function(elemento,indice){

  return `${elemento}`;

});

// let soma = 0;
// for(let i = 0; i<numeros.length;i++){
//   soma += numeros[i];
// }

let soma2 = numeros.reduce(function(acumulador,elemento,indice){
    return acumulador + ' - ' + elemento;
});

console.log(soma2);


let table = `
    <table>
      <tr>
        <th>Número</th>
        <th>Saldo</th>
        <th>Titular</th>
      </tr>`;

for(let cliente of meuBanco.banco.clientes){
  table += `
  <tr> 
      <td>${cliente.numero}</td>
      <td>R$ ${cliente.saldo}</td>
      <td>${cliente.titular}</td>
  </tr>`;
}

table += `
</table>`;







//console.log(table);