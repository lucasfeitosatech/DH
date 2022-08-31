// Participante A:  5, 8, 4, 9, 5
// Participante B:  8, 7, 8, 6, 8
// Participante C:  7, 5, 10, 8, 3

const readlineSync = require('readline-sync');

const concurso = {
  participantes:[],
  adicionarParticipante(nomeDoParticipante,notasDoParticipante){
    
    const novoParticipante = {
      nome:nomeDoParticipante,
      notas:notasDoParticipante,
      pontuacaoMedia(){
        let soma = 0;
        for(let i = 0; i<this.notas.length;i++){
          const nota = this.notas[i];
          soma += nota;
        }
        return soma/this.notas.length;
      },
      pontuacaoMaior(){
        // Inicializamos o maior como sendo a primeira nota
        //[5, 8, 4, 9, 5]
        // maior = 5
        let maior = this.notas[0]; // 9
        for(let i = 1; i<this.notas.length;i++){
          /*  
            i = 1 -> notas[i] = 8
            i = 2 -> notas[i] = 4
            i = 3 -> notas[i] = 9
            i = 4 -> notas[i] = 5
          */
          const nota = this.notas[i]//i = 4 -> 5 ;
          // 9 < 5
          if(maior < nota){
            maior = nota;
          }
          
        }
        return maior;
      }
    }
    this.participantes.push(novoParticipante);
  },
  mediaDosParticipantes(){
    /*Implementar essa função */
  },
  competicao(){
    /* */
  }
}

concurso.adicionarParticipante('Participante A',[5, 8, 4, 9, 5]);
concurso.adicionarParticipante('Participante B',[8, 7, 8, 6, 8]);
concurso.adicionarParticipante('Participante C',[7, 5, 10, 8, 3]);

// Acessando o primeiro participante
concurso.participantes[0].pontuacaoMedia();

for(let i = 0; i< concurso.participantes.length;i++){
  const participante = concurso.participantes[i];
  // participante.pontuacaoMaior();
  console.log(participante.nome,':',participante.pontuacaoMedia());
}


// while(1){
//   console.log(`
//     Bem-vindo ao concurso de participantes

//     Nesse concurso possuimos duas modalidades: 

//     - Melhor média (a maior pontuação média entre os concorrentes)
//     - Maior e-tip(a maior pontuação entre as 5 notas de cada participante)

//     1 - Adicionar Participante
//       1 - Para adicionar nome
//       2 - Para adicionar nota
//     2 - Para alguma coisa...
//     3
//     100 - Sair


//   `);

//   const op = readlineSync.question('Qual sua opção?');

//   if(op === 100)
//     break;


// }



/* 5, 8, 4, 9, 5
  maior = 5;
  5 < 8 -> maior = 8;
  8 < 4 -> maior = 8;
  8 < 9 -> maior = 9
  9 < 5 -> maior = 9
  ...

  maior = 9;
  

*/