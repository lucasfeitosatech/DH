/*
  Como aplicar isso em uma estrutura de repetição

*/

let pessoas = ["Lucas Feitosa","Elton","Soári","Airton","Jhonllenon"];
// for(let numero = 1 ; numero < 100;numero++){
//   const nome = 'Fulano ' + Math.round(Math.random()*100);
//   pessoas.push(nome);
// }
//    
// const indiceAleatorio = Math.round(Math.random()*(pessoas.length - 1));
// console.log("O sorteado valendo um pix foi o: " + pessoas[indiceAleatorio]);                
for(let i = 0; i < pessoas.length ;i++){
  /*  
    pessoas.length = 5
    i = 0 ; 0 < 5 -> true -> pessoas[i] -> pessoas[0] -> 'Lucas' -> i++
    i = 1 ; 1 < 5 -> true -> pessoas[i] -> pessoas[1] -> 'Elton' -> i++
    i = 2 ; 2 < 5 -> true -> pessoas[i] -> pessoas[2] -> 'Sóari' -> i++
    i = 3 ; 3 < 5 -> true -> pessoas[i] -> pessoas[3] -> 'Airton' ->i++
    i = 4 ; 4 < 5 -> true -> pessoas[i] -> pessoas[4] -> 'Jhonllenon' -> i++
    i = 5 ; 5 < 5 -> false -> Encerra o for
  */
 console.log('i =',i,"pessoas[i] =",pessoas[i]);
  //console.log(pessoas[i]); 
}





