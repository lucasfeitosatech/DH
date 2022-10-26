/*
  const -> a partir de 2017
  let -> 
    - Não podemos acessar a variável antes da sua inicialização
    - A variável só existe no escopo o qual ela declarada
  var -> 
    - Pode ser acessado fora do escopo de declaração
    - Possui visibilidade global, ou seja, ele fica no topo do escopo
*/


{
  // escopo -> Onde as variaveis estão visíveis 
  console.log(x); // undefined
  var x = 5;

}

{
  x = 8;
}
console.log(x);
