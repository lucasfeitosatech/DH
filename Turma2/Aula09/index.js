let texto = "           abc213 213 123 123 s              ";
// console.log(texto.replaceAll(" ","").replace("abc213","Lucas"));

let numeros = [1, 2, 3, 4, 5];
let alfabeto = ["a", "b", "c", "d", "e"];
let cores = ["azul"];
let cruzado = [numeros, alfabeto];

// console.log(cores);
// cores.push("laranja");
// cores.push("branco");
// console.log(cores);
const cor = cores.shift();
console.log(cores);
cores.unshift("amarelo", "laranja", "branco");
console.log(cores);
console.log(removeAt(cores, "laranja"));
console.log(cores);
// console.log(coresNovas);

//removeAt()
function removeAt(array, element) {
  return array.splice(array.indexOf(element), 1);
}
