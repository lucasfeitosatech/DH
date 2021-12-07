let callBack = function(){
  console.log("Meu callback a ser executado");
}
setTimeout(callBack,2*1000);



function Participante(nome,notas){
  this.nome = nome;
  this.notas = notas;
  this.pontuacaoMedia = function(){
    let soma = 0;
    for(let nota of this.notas){
      soma += nota;
    }
    return soma/this.notas.length;
  };
  this.pontuacaoMaior = function(){
    let maior = 0;
    for(let nota of this.notas){
      if(nota > maior)
        maior = nota;
    }
    return maior;
  };
}

// Participante A:  5, 8, 4, 9, 5;
// Participante B:  8, 7, 8, 6, 8;
// Participante C:  7, 5, 10, 8, 3.

const p1 = new Participante('Participante A', [5, 8, 4, 9, 5]);
const p2 = new Participante('Participante B', [8, 7, 8, 6, 8] );
const p3 = new Participante('Participante C',[7, 5, 10, 8, 3]);

let concurso = {
  participantes:[p1,p2,p3],
  vencedorPontuacaoMedia:function(){
    let vencedor;
    let maiorMedia = 0; 
    for(let participante of this.participantes){
      if(participante.pontuacaoMedia() > maiorMedia){
        maiorMedia = participante.pontuacaoMedia();
        vencedor = participante;
      }
      console.log("Participante: " + participante.nome + " media: " + participante.pontuacaoMedia());
    }
    console.log("Vencedor: " + vencedor.nome + " media: " + vencedor.pontuacaoMedia());
  },
  vencedorPontuacaoMaior:function(){
    
  }
}

concurso.vencedorPontuacaoMedia();
