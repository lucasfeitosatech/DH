/* Cada espectador de um cinema respondeu a um questionário no qual 
constava sua idade e a sua opinião em relação ao filme: 
ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a
 opinião de 15 espectadores, calcule e imprima:
a média das idades das pessoas que responderam ótimo;
a quantidade de pessoas que responderam regular;
a porcentagem de pessoas que responderam bom entre 
todos os espectadores analisados.
 */

const grupo = {
  espectadores:[],
  adicionarEspectador(idade,opiniao){
    const espectador = {
      idade,
      opiniao,
    }
    this.espectadores.push(espectador);
  },
  mediaOtimo(){
    let qtdOtimo = 0,somaOtimo = 0;
    for(let espectador of this.espectadores){
      if(espectador.opiniao === 3){
        qtdOtimo++;
        somaOtimo += espectador.idade;
      }
    }
    console.log(`A idade média dos que responderam ótimo foi de: ${somaOtimo/qtdOtimo} `)
  },
  qtdPessoasRegular(){
    let qtdRegular = 0
    for(let espectador of this.espectadores){
      if(espectador.opiniao === 1){
        qtdRegular++;
      }
    }
    console.log(`Quantidade de pessoas que responderam regular foi de: ${qtdRegular} `)
  },
  porcentagemBom(){
    let qtdBom = 0
    for(let espectador of this.espectadores){
      if(espectador.opiniao === 2){
        qtdBom++;
      }
    }
    const porcentagem = (qtdBom/this.espectadores.length)*100;
    console.log(`A porcentagem das pessoas que responderam bom foi de: ${porcentagem} `)
  }
}

grupo.adicionarEspectador(22,1)
grupo.adicionarEspectador(45,2)//
grupo.adicionarEspectador(38,3)
grupo.adicionarEspectador(29,1)
grupo.adicionarEspectador(18,2)//
grupo.adicionarEspectador(23,3)
grupo.adicionarEspectador(65,1)
grupo.adicionarEspectador(54,2)//
grupo.adicionarEspectador(53,3)
grupo.adicionarEspectador(43,1)
grupo.adicionarEspectador(27,2)//
console.table(grupo.espectadores);
grupo.mediaOtimo();



