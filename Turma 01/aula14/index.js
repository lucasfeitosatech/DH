
let nome = 'Teste';
let idade = 60;
console.log(" O seu nome é: " + nome + " e a idade é: " + idade);
// Template strings
console.log(`O seu nome é ${nome} e a idade é: ${idade}`);

// Dados a serem recebidos do back-end 
let nomes = ["Fulano", "Ciclano", "Beltrano", "Lucas", "Teste"];

let html = `
  <h1> Minha lista de nomes </h1>
  <ol>
`;

for(let i = 0;i < nomes.length; i++){
  // i = 0 ; nomes[i] = "Fulano" -> 
  // i = 1 ; nomes[i] = "Ciclano" ->
  // i = 2 ; nomes[i] = "Beltrano" -> 
  // i = 3 ; nomes[i] = "Lucas" -> 
  // i = 4 ; nomes[i] = "Teste" -> 
  // i = 5 ; 5 < 5  - > Encerra o loop 
  const nome = nomes[i];
  html = html + '<li>' + nome + '</li>'; 
}


// Enquanto isso for verdadeiro faca alguma coisa 
let i = 0;
// Enquanto a minha variavel i for menor do que 5 
while(i < 5){
  const nome = nomes[i];
  html = html + '<li>' + nome + '</li>'; 
  i++;
}

i = 0;
// Do while - Vai executar pelo menos uma 
// vez tudo que estiver no bloco de código

// Faca enquanto o critério de parada não for falso
do {
  console.log("Executou pelo menos uma vez");
} while(false)


//

html = html + '</ol>';

console.log(html);




