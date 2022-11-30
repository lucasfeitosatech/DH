let i = 0;
const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

function media(array) {
  let soma = 0;
  while (i < array.length) {
    soma += array[i];
    i++;
  }
  let media = soma / array.length
  return media;
};

function maior(array) {
  let a = 0;
  let b = 0;
  let i = 0;
  while (i < array.length) {
    a = array[i];
    if (a > b) {
      b = a
    }
    i++;
  }
  return b;
};

console.log(`A média mais o maior valor do participante A é ${maior(participanteA) + media(participanteA)}`);
console.log(`A média mais o maior valor do participante B é ${maior(participanteB) + media(participanteB)}`);
console.log(`A média mais o maior valor do participante C é ${maior(participanteC) + media(participanteC)}`);