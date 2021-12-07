// function solution(N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   //Transform N into string;
//   const sN = String(N);
//   //Transform String into an Array of Digits
//   const digitsN = Array.from(sN);
//   //Sum all chars
//   const sumN = digitsN.reduce((el, acc) => {
//     return Number(el) + Number(acc);
//   });
//   for (let i = N + 1; true; i++) {
//     const s = String(i);
//     const digits = Array.from(s);
//     const sum = digits.reduce((el, acc) => {
//       return Number(el) + Number(acc);
//     });
//     if (sum / 2 == sumN) {
//       return i;
//     }
//   }
// }

// function solution(cars) {
//   let results = [];
//   for (let i in cars) {
//     results[i] = 0;
//     const car = Array.from(cars[i]);
//     //For to compare one car with all another, but itself.
//     for (let j in cars) {
//       if (i == j) continue;
//       const carCompare = Array.from(cars[j]);
//       let counDifferences = 0;
//       //For each feature of car with another car
//       for(let k = 0;k<carCompare.length;k++){
//         if(car[k] != carCompare[k]) counDifferences++;
//         if(counDifferences > 1) break;
//       }
//       if(!(counDifferences > 1)) results[i] += 1
//     }
//   }
//   return results;
// }

// console.log(solution(['0011', '0111', '0111', '0110', '0000']));

// function solution(S){
//   let dict = {};
//   let chars = Array.from(S);
//   //Create an Object to count occurencies of each letter
//   for(let c of chars ){
//     //if char do not exist so it is first occurence otherwhise add one to count
//     if(dict[c] == null)
//       dict[c] = 1;
//     else
//       dict[c] += 1;
//   }
//   let countRemoved = 0;
//   //Get All pair key:value as Array and Verify wich one is odd and should be removed
//   for(let [key,value] of Object.entries(dict)){
//     if (value % 2 != 0)
//       countRemoved++;
//   }
//   return countRemoved;
// }



function propriedadeUnica(array,prop){
  const arrayReturn = [];
  for(let elemento of array){
    const obj = {};
    obj[prop] = elemento[prop];
    arrayReturn.push(obj);
  }
  console.log(arrayReturn);
  return arrayReturn;
}
let array = [ { nome: "Lean", idade: 27 }, { nome: "Eze", idade: 49} ]
propriedadeUnica(array,'nome');