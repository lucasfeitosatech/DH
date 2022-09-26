/* Tem-se um conjunto de dados contendo 
a altura e o sexo (M ou F) de 6 pessoas. 
Faça um programa que calcule e escreva:	
a maior e a menor altura do grupo;
a média de altura das mulheres;
o número de homens. */

const grupo = {
  pessoas:[],
  adicionarPessoa(nome,altura,sexo){
    // utilizaremos o this para acessar propriedades do objeto
    const pessoa = {
      nome, // Permite criar uma propridade contendo o nome da variavel e o seu valor
      altura,
      sexo
    }
    this.pessoas.push(pessoa);
  },
  maiorEMenorAltura(){
    let menorPessoa = this.pessoas[0];
    let maiorPessoa = this.pessoas[0];
    for(let i = 1 ; i < this.pessoas.length;i++){
      const pessoa = this.pessoas[i];
      if(pessoa.altura < menorPessoa.altura){
        menorPessoa = pessoa;
      }
      if(pessoa.altura > maiorPessoa.altura){
        maiorPessoa = pessoa;
      }
    }
    console.log(`Maior altura: ${maiorPessoa.altura} Menor altura: ${menorPessoa.altura}`)
  },
  mediaMulheres(){
    const qtdMulheres = this.pessoas.reduce((acc,pessoa,index) => pessoa.sexo === 'F' ? acc + 1 : 0 );
    const somaAlturas = this.pessoas.reduce((acc,pessoa,index) => pessoa.sexo === 'F' ? acc + pessoa.altura : 0);
    // const obj = this.pessoas.reduce((acc,pessoa,index) => {
    //   const novoAcc = pessoa.sexo === 'F' ? {
    //     qtd: acc.qtd + 1,
    //     soma: acc.soma + pessoa.altura
    //   } : {
    //     qtd:acc.qtd,
    //     soma:acc.soma
    //   }
    //   return novoAcc
    // },{
    //   qtd:0,
    //   soma:0
    // });
    const media = somaAlturas/qtdMulheres;
    console.log(`A média de altura das mulheres é de: ${media.toFixed(2)}`);
  },
  numeroHomens(){
    let qtdHomens = 0;
    for(let i = 0 ; i < this.pessoas.length;i++){
      const pessoa = this.pessoas[i];
      pessoa.sexo === 'M' ? qtdHomens++ : null;
    }
    console.log(`A quantidade de homens é de: ${qtdHomens}`);
  }
}

grupo.adicionarPessoa('Fulano 1',1.8,'M');
grupo.adicionarPessoa('Fulano 2',1.65,'F');
grupo.adicionarPessoa('Fulano 3',1.87,'M');
grupo.adicionarPessoa('Fulano 4',1.54,'F');
grupo.adicionarPessoa('Fulano 5',1.65,'M');
grupo.adicionarPessoa('Fulano 6',1.92,'F');
console.table(grupo.pessoas);
grupo.maiorEMenorAltura();
grupo.mediaMulheres();
grupo.numeroHomens();






