/*  
    Aula 05 - Funções 
      - Declaração
      - Chamada/Invocação
      - Valor de Retorno
      - Parametro opcional
      - função expressa
       -> Quando declaramos a função dentro de uma variável

    -> Reutilização 

    OBS: Sempre que tivermos alta repetição no código, podemos pensar em alguma solução
    com funçôs para reutilização de código
*/
const retornoDaPrimeiraFuncao = minhaPrimeiraFuncao();
console.log(retornoDaPrimeiraFuncao);


const nome = "José";
const sobrenome = "da Silva";
const idade = 27;
const peso = 83.5;
const altura = 1.7; 
const temPlano = true;
const imc = peso/(altura*altura)
const msg = nome + ' ' + sobrenome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2);
console.log(msg);
// Template strings 
const msg2 = `${nome} ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc.toFixed(2)}`; 
console.log(msg2);

/*
  Declaração de função
  
  palavra reservada function 
  nome da função -> seguindo as regras de nomeclatura
  () -> Abertura e fechamento dos () -> Espaço reservado para criação de parametros
  {} -> Bloco de código a ser executado -> Implementação da função
  return -> Palavra reservada return -> Que indica o que a nossa função retornar/devolver

  OBS: Caso o return não seja colocado, automaticamente será retornado para nós o valor de undefined;
  OBS2: Após o return, nada será execudo pois o mesmo encerra a função 
  OBS3: As funções possuem uma visibilidade global 
  parecida com o var, podendo ser executadas antes da sua declaração visual

*/

function minhaPrimeiraFuncao() {
  return 1000000003712983721893712893;
}
/*
  Chamada/Execução/Invocação de função

  chamar a função pelo nome que foi dado 
  seguido dos ()

*/


/*
  Os parametros -> São variaveis recebidas na hora da chamda da função 

*/
console.log(retornoSoma)
const retornoSoma = soma();
function soma(num1 = 0,num2 = 0){
  console.log(num1  + num2);
  return num1 + num2;
}

soma(3,5);


