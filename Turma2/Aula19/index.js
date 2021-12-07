//Forma tradicional
somar(5, 3);
//Forma tradicional
function somar(a, b) {
  console.log(a + b + " somar1");
}
// soma2(4,4);
//Forma expressa
let soma2 = function (a, b) {
  console.log(a + b + " somar2");
};
//Arrow functions
// let soma3 = a => dobro(a);

// function dobro(x){
//   return x*2;
// }
// let dobro = x => 2*x;

let escola = {
  alunos: ["Aluno 1", "Aluno 2"],
  nome: "Escola X",
  nomeEscola: () => {
    console.log(escola.nome);
  },
  nomeEscola2: function () {
    console.log(this.nome);
  },
};

for (let i = 0; i < escola.alunos.length; i++) {
  const aluno = escola.alunos[i];
}

for (let i in escola.alunos) {
  const aluno = escola.alunos[i];
}

for (let aluno of escola.alunos) {
}

escola.alunos.forEach((aluno, index) => {
  console.log(aluno, index);
});

function calculadora(numero1, numero2, operacao) {
  operacao(numero1, numero2);
}

calculadora(5, 4, (a, b) => {
  console.log(a + b);
});

// calculadora(5,4, () => {
//   console.log(a - b);
// })

// calculadora(5,4, () => {
//   console.log(a * b);
// })

escola.nomeEscola();
escola.nomeEscola2();

console.log("Contando 5 segundos");
let logarNovamente = () => {
  console.log("Fazer chamda no backend");
};
//1millisegundo = 1/1000 segundo
const UM_SEGUNDO = 1000;
const UM_MINUTO = 60 * UM_SEGUNDO;
const UMA_HORA = 60 * UM_MINUTO;

const expires_in = 10 * UM_SEGUNDO;
setTimeout(logarNovamente, expires_in);

const numeros = [5, 4, 3, 2, 1];
const soma = numeros.reduce((numero1, numero2) => numero1 * numero2);
console.log(soma);

const dobro = numeros.map((numero) => {
  return numero*2;
});
console.log(dobro);

function Aluno(nome,idade){
  this.nome = nome;
  this.idade = idade;
}

const alunos = [new Aluno("Aluno 1",20),new Aluno("Aluno 2",23)];
let html = `
  <table>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
    ${
      alunos.map(aluno => {
        return `
          <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
          </tr>
        `;
      }).join("")
    }
  </table>

`;
console.log(html);

// somar(5,3);
// soma2(4,4);
// soma3(1);
