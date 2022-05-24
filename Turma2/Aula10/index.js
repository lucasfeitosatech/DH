// Strings -> Cadeia de caracteres ou uma sequencia de caracteres
// Uma string pode considerada um objeto ou assume algumas propriedades dos objetos
/*
  let texto = "Minha string"

  Propriedades -> Algumas caracteriscas referentes a string de fato
  length -> tamanho  -> Descreve a quantidade de caracteres na nossa string
  para acessar as propriedades dentro de um objeto, nós podemos utilizar
  uma notação que se chama "dot" .

  Métodos -> Funções que vão representar comportamentos e 
  ações dentro do nosso objeto

*/
//           0123456789...
// M -> 0
// I -> 1
// N -> 2
//...
// G -> 11
let texto = "MINHA STRING";
// ToUpperCase() -> Converter a minha string para letras maisculas
// ToLowerCase() -> Converter a string para letras minusculas
console.log(texto.toLowerCase());

// includes() -> Verifica se o texto especificado entre () existe na string
let email = "teste@teste.com";
if(email.includes("@") && email.includes(".com")){
  console.log("É um email válido");
} else {
  console.log("É um email inválido");
}



let senha = "1234";
if(senha.length < 4){
  console.log("Por favor, preencha uma senha com mais de 4 caracteres")
} else {
  console.log("Senha válida");
}

let texto2 = "teste a minha string & teste ooutro & & & & & & & & &"
console.log( texto2.replace('&','E comercial') );



