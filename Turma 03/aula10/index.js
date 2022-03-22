// Aula 10 - Strings e Arrays

let nome = "TEstE ";
// string - cadeira de caracteres
// posicao 0 = M
// posicao 1 = e
// posicao 2 = u
// posicao 3 = ""
// ultima posicao = "g" // length - 1;

let busca = "teste";
let textoGerado =
  "Lorem & ipsum, & dolor @ sit @ amet @ consectetur adipisicing elit. Repellat, porro eaque? Optio ducimus debitis labore eius rerum laborum ab ad ratione cumque! Autem officiis consectetur rerum. Incidunt autem officiis nesciunt.";

  textoGerado = `Essa texto ${busca}`
// Replace - Substituir o texto da esquerda pelo texto da direita apenas uma vez
// console.log(textoGerado.replace("&" , "Teste"));
console.log(textoGerado.replaceAll(" " , `${busca}`));




// toLowerCase() -> Transformar todos os caracteres para minusculo
let nomeMinusculo = nome.toLowerCase();
// toUpperCase() -> Transformar todos os caracteres para maisculo
let nomeMaiusculo = nome.toUpperCase();

// console.log(nome);
// console.log(nomeMinusculo);
// console.log(nomeMaiusculo);


// length - Retornar o tamanho da string
console.log("O tamanho da minha string gerada é de: " + textoGerado.length);

const email = "teste@teste.com";
if(email.includes("@") && email.length > 2){
  console.log("Email válido");
} else {
  console.log("Email inválido");
}

const senha = "123!@#";

if(senha.length > 4){
  console.log("Senha válida");
}




