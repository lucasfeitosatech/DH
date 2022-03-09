// José
// da Silva
// 27
// 83.5
// 1.70
// Ouro
// Ctrl + D = Seleção multipla
// Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx
// const nome = "José";
// const sobrenome = "da Silva";
// const idade = 27;
// const peso = 83.5;
// const altura = 1.7;
// const temPlano = true; // true = Tem plano , false = não tem
// const imc = peso/(altura**2);
// console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos' + ' e seu índice de massa corporal é de ' + imc.toFixed(2));
// console.log(`${nome} ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de: ${imc.toFixed(2)}`);

//Função = Bloco de código que vai ser executado toda vez que nós invocarmos ou chamarmos essa função
/*
  function - Palavra reservada
  nomeclatura 
  () - Poder passar parametros 
  {} - Inicio e Fim do bloco de código a ser executado
*/

//Declaração de função
function minhaFuncao() {
  //Onde vai a implementação da nossa função
  console.log("Minha função sendo executada");
}

//Chamando,Executando,Invocando a minha função
// minhaFuncao();
// minhaFuncao();
// minhaFuncao();

// Parametros são váriaveis que vamos passar na hora de executar a nossa função 
function imc(sexo,idade,altura,peso){
  const imc = peso/(altura**2);
  // return - Finaliza a funcão e devolve alguma informação para quem está chamando a função 
  // return - Nenhum código após o return vai ser executado
  return `Seu IMC é de ${imc.toFixed(2)} kg/m2.`;
}

//Obter a referencia do elemento aqui no JS e mostrar ele na tela 
console.log(imc("Masculino",28,1.90,83.5));
console.log(imc("Masculino",29,1.85,82.5));
console.log(imc("Masculino",30,1.62,81.5));
console.log(imc("Masculino",31,1.75,80.5));
// imc("Carlos de Souza",28,1.76,80.1);


