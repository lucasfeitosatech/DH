let nomes = [];
for(let i = 1;i<= 100;i++){
  nomes.push("Nome " + i);
}
console.log(nomes);

let html = '<ul>';

let soma = 0 ;//numeros[0] + numeros[1] + numeros[2] + numeros[3];
for(let i = 0;i < nomes.length;i = i + 1){
  html = html + '<li>' + nomes[i] + '</li>';
}

html = html + '</ul>';
console.log(html);

