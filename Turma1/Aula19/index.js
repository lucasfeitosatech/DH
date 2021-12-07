// //Tradicional
// // soma(5,5);
// // function soma(a,b){
// //  console.log("Soma : " + (a + b) ); 
// // }
// //Forma expressa
// // soma2(5,5);
// let soma2 = function(a,b){
//   console.log("Soma2 : " + (a + b) ); 
// }
// soma2(5,3);

// let soma3 = (a,b) => {
//   console.log("Soma3 : " + (a + b) ); 
// }  

// function dobro(x){
//   return 2*x;
// }

// let dobro2 = x => 2*x;  

// soma3(1,1);
// console.log(dobro(2));
// console.log(dobro2(5));

// let carro = {
//   nome:"Carro X",
//   marca:"Marca X",
//   nomeEMarca:() => {
//     console.log("nome: " + carro.nome + " marca: " + carro.marca);
//   },
//   nomeEMarca2:function(){
//     console.log("nome: " + this.nome + " marca: " + this.marca);
//   }
// }

// const numeros = [1,2,3,4,5];

// for(let i = 0;i<numeros.length;i++){
//   const numero = numeros[i];
// }

// for(let i in numeros){
//   const numero = numeros[i];
// }

// for(let numero of numeros){

// }

// numeros.indexOf(2)
// const meuCallBack = (numero,i) => {
//   console.log("Valor no index: " + i+ " = " +numero);
//   if(numero %2 == 0){
//     console.log("é par");
//   }
// }
// numeros.forEach(meuCallBack);


// function callBack(){
//   console.log("Passou 5 segundos");
// }
// //1ms = 1/1000 de segunudo
// const UM_SEGUNDO = 1000;

// console.log("Vai passar 5 segundos")
// setTimeout(callBack,5000)
// callBack();

// const token = "ABC";
// const sessao_expira = 5*UM_SEGUNDO;
// const logarNovamente = () => {
//   console.log("Logar novamente");
// }
// setTimeout(logarNovamente,sessao_expira);



// const dobros = numeros2.map((numero,indice) => {
//   console.log("numero: " + numero + " indice:" + indice);
//   return numero*2;
// });

// dobros.forEach((dobro,indice) => {
//   console.log("valor:  " + dobro + " indice:" + indice);
// });

// let carro2 = {
//   nome:"Carro 2",
//   marca:"Marca X"
// }

// let carro3 = {
//   nome:"Carro 3",
//   marca:"Marca Y"
// }

let carros = [carro2,carro3];
let html = `
  <table>
    <tr>
      <th>Nome</th>
      <th>Marca</th>
    </tr>
    ${
      carros.map(valor => {
        return `
          <tr>
            <td>${carro.nome}</td>
            <td>${carro.marca}</td>
          </tr>
        `;
      }).join("")
    }
  </table>
`;



// console.log(html);
// // carro.nomeEMarca();
// // carro.nomeEMarca2();


const numeros2 = [5,4,3,2,1];

const soma = numeros2.reduce((valorAnterior, proximoValor) => {
  return valorAnterior*proximoValor;
});
console.log("Soma de todos os elementos: " + soma);

