
// Criado de forma literal;
let aluno1 = {
  id:1,
  matricula:'123456',
  nome:'Fulano',
  sobrenome:'Ciclano',
  notas: [5.6,7.8],
}

// Função construtora 
// this = a referencia da raiz do objeto

// Função construtora - Um modelo, 
//um modelo para a criação em massa de 
//objetos que possuem as mesmas propriedades
// Planta de uma casa 
// A casa construida

let escola = {
  alunos:[],
  listaAluno: function(){
    for(let i = 0; i < this.alunos.length;i++){
      console.log(this.alunos[i]);
    }
  }
}

function Aluno(a,b,c,d,e){
  this.id = a;
  this.matricula = b;
  this.nome = c;
  this.sobrenome = d;
  this.notas = e;
}
// new - novo/criar objeto
// Criado através da função construtora 
escola.alunos(new Aluno(1,'123456','Fulano','Ciclano',[5.6,7.8]));
