//Aula 10 - Strings e Arrays 
//\n - quebra de linha
let mensagem = "    Olá Olá Olá muNDO           ";
let busca = "a"

mensagem.toLowerCase();


if(mensagem.includes("Olá")){}

if(busca.toLowerCase() == mensagem.toLowerCase()){
  //Achou um a 
}
busca.toLowerCase();



console.log(mensagem.length);
//Propriedade do tipo String que realiza a contagem de caracteres
mensagem.length

//Métodos - São funções que vão realizar alguma ação na sua variavel ou objeto

//replace - Substitui 
mensagem = mensagem.replaceAll("Olá" , "XXx");
console.log(mensagem);

//toUpperCase - Converte a mensagem original para letras Maisculas
console.log(mensagem.toUpperCase());
//toLowerCase - Converte a mensagem original para letras Minusculas
console.log(mensagem.toLowerCase());

mensagem = "1234 2567 0987 5674";

console.log("****" + " ****"+  " **** " + mensagem.substring(mensagem.length - 4,mensagem.length))

let cpf = "510.197.860-43";

//Substring - Pega uma subtring da string original de acordo com indices especificados
console.log(cpf.substring(0,3) + ".***.***-**");

const email = "teste@gmail.com"

if(email.includes("@") && email.includes(".com")){
  console.log("Email válido");
} else {
  console.log("Email inválido")
}

const senha = "123456";

if(senha.length < 4){
  console.log("Senha inválida");
} else {
  logar();
}

function logar(){

}