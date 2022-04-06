let readlineSync = require("readline-sync");

while (true) {
  let aInput = readlineSync.question("Qual o coeficiente a: ");
  let bInput = readlineSync.question("Qual o coeficiente b: ");
  let cInput = readlineSync.question("Qual o coeficiente c: ");

  let a = Number(aInput);
  let b = Number(bInput);
  let c = Number(cInput);

  const delta = b ** 2 - 4 * a * c;
  const x1 = (b * -1 + Math.sqrt(delta))/2*a;
  const x2 = (b * -1 - Math.sqrt(delta))/2*a;

  console.log(`

  Equação do segundo grau

  ${a}x2 ${b}x ${c}  = 0

  delta: ${delta}

  x1: ${x1}

  x2: ${x2}


`);
}
