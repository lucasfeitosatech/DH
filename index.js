let aluno = require("./costrutor");
let listaEstudantes = require("./estudantes");

let curso = {
  nomeCurso: "Socorro!!",
  notaMin: 7,
  maxFalta: 4,
  estudantes: listaEstudantes,
  addAluno: function (_nome, _faltas, _notas) {
    let novoAluno = new aluno(_nome, _faltas, _notas);
    return this.estudantes.push(novoAluno);
  },

  aprovar: function (estudante) {
    let escolherAluno;
    let media = 0;
    let falta = 0;
    for (let alunos of this.estudantes) {
      if (alunos.nome === estudante) {
        escolherAluno = alunos;
        media = escolherAluno.mediaAluno();
        falta = escolherAluno.faltas;
      }
    }
    if (
      (media >= this.notaMin && falta < this.maxFalta) ||
      (media >= (this.notaMin * 1, 1) && falta == this.maxFalta)
    ) {
      return true;
    } else {
      return false;
    }
  },

  listaAprovados: function () {
    let listaAlunosAp = this.estudantes.map((alunos) => {
      return this.aprovar(alunos.nome);
    });
    return listaAlunosAp;
  },
};

curso.addAluno("Sandra", 2, [6, 7, 7]);
//console.log(curso.estudantes);
//console.log(curso.aprovar("Pedro"));
//console.log(curso);
