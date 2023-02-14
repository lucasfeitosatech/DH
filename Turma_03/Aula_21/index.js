/***
 * Passo 1 (1,5 pontos)
 * Crie uma função construtora ou Classe Aluno que tenha como atributos: nome
 * (string), quantidade de faltas (number) e notas (array de números). 
 * 
 * Passo 2 (1,5 pontos)
 * Na função construtora crie o método calcularMedia que retorna a média de suas
 * notas. Também terá um método chamado faltas, que simplesmente aumenta o número de
 * faltas em 1. Crie alguns alunos para testar a sua função construtora
 * 
 * /**
 * Passo 3 (1,5 pontos)
 * crie o objeto literal curso que tem como atributos: nome do curso (string), nota de
 * aprovação (number), faltas máximas (number) e uma lista de estudantes (um array
 * composto pelos alunos criados no passo 2).
 * 
 * Passo 4 (1,5 pontos)
 * Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
 * chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
 * propriedade lista de estudantes do objeto curso.
 * 
 * Passo 5 (2 pontos)
 * Crie um método para o objeto curso que receba um aluno (como parâmetro) e
 * retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
 * aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
 * faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
 * 
 * Passo 6 (2 pontos)
 * Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
 * array de booleanos com os resultados se os alunos aprovaram ou não.
 * 
 * */

class Aluno{
  constructor(nome, qtdfaltas, notas){
      this.nome = nome;
      this.qtdfaltas = qtdfaltas;
      this.notas = notas;
  }
}

let curso = {
  nomedoCurso: 'Programação Imperativa',
  notaAprovacao: 7.0,
  faltasMaximas: 5,
  estudantes: [],
  adicionarEstudante(nome, qtdfaltas, notas) {
      let novoAluno = new Aluno(nome, qtdfaltas, notas);
      this.estudantes.push(novoAluno);
  },
  consultarEstudante(nome) {
      for (i = 0; i < curso.estudantes.length; i++){
          achou = false;
          if (curso.estudantes[i].nome == nome) {
              achou = true;
              return i;
          }
      }
      if (achou == false) {
          return 'Estudante não encontrado!';
      }
  },
  calcularMedia(notas) {
      let soma = 0;
      for (i = 0; i < notas.length; i++){
          soma += notas[i];
      }
      return (soma / notas.length).toFixed(2);
  },
  adicionarFalta(indice) {
      curso.estudantes[indice].qtdfaltas++;
  },
  consultarSituacao(nome) {
      if (this.consultarEstudante(nome) != 'Estudante não encontrado!') {
          if (this.estudantes[this.consultarEstudante(nome)].qtdfaltas < this.faltasMaximas) {
              if (this.calcularMedia(this.estudantes[this.consultarEstudante(nome)].notas) >= this.notaAprovacao) {
                  return true;
              } else {
                  return false;
              }
          } else if (this.estudantes[this.consultarEstudante(nome)].qtdfaltas == this.faltasMaximas) {
              if (this.calcularMedia(this.estudantes[this.consultarEstudante(nome)].notas) >= (this.notaAprovacao * 1.1) ) {
                  return true;
              } else {
                  return false;
              }
          }
      } else {
          this.consultarEstudante(nome);
      }
  },
  criarResultado() {
      let resultado = [];
      for (let i = 0; i < this.estudantes.length; i++){
          resultado.push(this.consultarSituacao(this.estudantes[i].nome));
      }
      return resultado;
  }
}

curso.adicionarEstudante('Aluno 01', 0, [10.0, 10.0, 10.0, 10.0, 10.0]);
curso.adicionarEstudante('Aluno 02', 4, [5.0, 5.0, 5.0, 5.0, 5.0]);
curso.adicionarEstudante('Aluno 03', 4, [10.0, 10.0, 10.0, 10.0, 10.0]);
curso.adicionarEstudante('Aluno 04', 5, [7.0, 7.0, 7.0, 7.0, 7.0]);
curso.adicionarEstudante('Aluno 05', 5, [7.5, 7.5, 8.0, 8.0, 8.0]);

/*
console.log(curso.estudantes[4]);
console.log('Média do aluno: ' + curso.calcularMedia(curso.estudantes[4].notas));
curso.adicionarFalta(0);
console.log('Inserindo 1 falta para o aluno exibido anteriormente');
console.log(curso.estudantes[0]);
console.log('Procurando por estudante: Aluno 05...');
console.log(curso.consultarEstudante('Aluno 05'));
console.log('Consultando a situação do estudante: Aluno 01...');
console.log(curso.consultarSituacao('Aluno 01'));
console.log('Consultando a situação do estudante: Aluno 02...');
console.log(curso.consultarSituacao('Aluno 02'));
console.log('Consultando a situação do estudante: Aluno 03...');
console.log(curso.consultarSituacao('Aluno 03'));
console.log('Consultando a situação do estudante: Aluno 04...');
console.log(curso.consultarSituacao('Aluno 04'));
console.log('Consultando a situação do estudante: Aluno 05...');
console.log(curso.consultarSituacao('Aluno 05'));
*/

console.log(curso.criarResultado());