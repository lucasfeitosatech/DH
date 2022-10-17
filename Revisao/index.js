// 1- Crie uma função construtora Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).
function Aluno(nome, qtdFaltas, notas) {
  (this.nome = nome),
    (this.qtdFaltas = qtdFaltas),
    (this.notas = notas),
    // 2- Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.
    (this.calcularMedia = function () {
      let soma = 0;
      let media = 0;
      for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
      }
      media = soma / this.notas.length;
      console.log(`A média do aluno é: ${media}`);
    });

  this.faltas = function () {
    let faltas = this.qtdFaltas + 1;
    console.log(`A quantidade de faltas do aluno é: ${faltas}`);
  };
}
const aluno1 = new Aluno("Pedrao", 2, [6, 7, 8, 9]);
console.log(aluno1);
const aluno2 = new Aluno("Pepes", 1, [6, 7, 10, 9]);
console.log(aluno2);
console.log(aluno1.calcularMedia());
console.log(aluno2.calcularMedia());
console.log(aluno1.faltas());
console.log(aluno2.faltas());

// 3- crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
const curso = {
  nomeCurso: "pepes&nenes",
  notaAprovacao: 8,
  faltasMaximas: 6,
  listaEstudantes: [aluno1, aluno2],
  // 4- Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
  adcAlunos(nome, qtdFaltas, notas) {
    const alunoN = new Aluno(nome, qtdFaltas, notas);
    console.log(alunoN);
    console.log(alunoN.calcularMedia());
    console.log(alunoN.faltas());
    curso.listaEstudantes.push(alunoN);
  },
};
curso.adcAlunos("pedrinho", 3, [6, 7, 7, 7]);
// 5- Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
resultadoFinal = function () {
  let media = curso.listaEstudantes[Aluno].calcularMedia();
  let falta = curso.listaEstudantes[Aluno].faltas();
  if (media >= curso.notaAprovacao && falta < curso.faltasMaximas) {
    return curso.listaEstudantes[Aluno].nome + "esta aprovado";
  } else if (
    falta == curso.faltasMaximas &&
    curso.notaAprovacao * 10.1 < media
  ) {
    return curso.listaEstudantes[Aluno].nome + "esta aprovado";
  } else {
    return curso.listaEstudantes[Aluno]["nome"] + "esta reprovado";
  }
};
// 6- Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.
resultadosAlunos = function () {
  let aprovados = [];
  for (let i = 0; i < this.listaEstudantes.length; i++) {
    let media = this.listaEstudantes[i].calcularMedia();
    let falta = this.listaEstudantes[i].faltas();
    if (media >= this.notaAprovacao && falta < this.faltasMaximas) {
      aprovados.push(this.listaEstudantes[i].nome + " " + "is" + " " + true);
    } else if (
      falta == this.faltasMaximas &&
      this.notaAprovacao * 10.1 < media
    ) {
      aprovados.push(this.listaEstudantes[i].nome + " " + "is" + " " + true);
    } else {
      aprovados.push(
        this.listaEstudantes[i]["nome"] + " " + "is" + " " + false
      );
    }
  }
  return aprovados;
};

console.log(resultadoFinal());
