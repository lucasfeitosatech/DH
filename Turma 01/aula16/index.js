// JSON , Objetos e Função Construtora 


// Tipos primitivos de dados 
let string = "Texto";
let numero = 2;
let flutuante = 2.5;
let bool = true//false;
let numeros = [1,2,3,'4'];

// Aluno (id,matricula,nome,sobrenome,nota,email,endereco,turma) - Função construtora

// Aluno (1 , 1,'Lucas','Feitosa',5,t@t.com,...) - Objeto;


// Carro - Representação de um carro na linguagem de programação 
// aluno 
//escola 
// cadeira 
// pessoa

// Objetos - Trazer representações / abstrações do mundo 
// real para a linguagem de programação
// Propriedades - Descrever as caracteristicas do nosso objeto
// Métodos - Dar uma ação/interação para o nosso objeto

// JSON - Javascript Object Notation - Notação de Objetos do Javascript

// {} -> Objeto vazio porque não possui propriedades e métodos  
// Aluno (id,matricula,nome,sobrenome,nota,email,endereco,turma) - Função construtora

// Aluno (1 , 1,'Lucas','Feitosa',5,t@t.com,...) - Objeto;

// Objeto literal
let aluno1 = {
  id:2,
  matricula:'123456',
  nome:'Fulano',
  sobrenome:'Ciclano',
  notas:[5.6,7.8,9.3],

}

// Objeto Literal
let escola = {
  nome:'DH',
  endereco:"Rua tal",
  alunos:[aluno1],
  filial: {
    nome:'',
    endereco:{
      bairro:'',
      logradouro:'',
      numero:'',
      complemente:''
    }
  },
  //this = escola
  buscarAluno:function(matricula){
    for(let i = 0; i < this.alunos.length ; i++){
      const aluno = this.alunos[i];
      if(matricula == aluno.matricula){
        console.log("Achei o meu aluno");
        return aluno;
      }
    }
  }
}

let input1  = '';
let input2 = '';
let input3 = '';

let player = {
  score:input1,
  inimigos:[],
  skin:input2,
  cash:input3,
  nickname: '',
}

// enviar(player);

player.skin = 'Skin de fogo';

let carro = {
  potencia:500,
  torque:20,
  cor: 'vermelho',
  marca:'Ferrari',
  modelo:'F1',
  acelerar:function(){
    console.log("Acelerando...");
  },
  freiar:function(){
    console.log("Freiando...")
  }
}

carro.acelerar();
carro.freiar();




