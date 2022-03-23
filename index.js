let modulesRegistered = [1,2,3];

function removeFeature(item) {
  const index = modulesRegistered.indexOf(item);
  if (index > -1) {
    modulesRegistered.splice(index, 1); // 2nd parameter means remove one item only
  }
  console.log(modulesRegistered);
}

removeFeature(2);


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compara (a, b) {
  let comparando = []
  for (let i = 0; i < a.length; i++) {
    comparando.push(a[i] == b[i] ? "iguais" : "diferentes")
  }
  return comparando;
}

console.log(compara(asiaScores, euroScores))

for(let i = 1 ; i< 10; i++){
  console.log(`\nTabuada do ${i}:
  `);
  for(let j = 0;j<10;j++){
    console.log(`${i} x ${j} = ${i*j}`); 
  }
}