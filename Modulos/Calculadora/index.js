// module -> Variável oculta que possui informações do arquivo
// exports -> Variável que vamos utilizar para passar
// informações para outros arquivos

/*
  Criamos um objeto literal para armazenar todas as nossas funções
*/

/*



*/


const calculadora = {
  adicionar(numero1, numero2, numero3 = 0,numero4 = 0) {
    return numero1 + numero2 + numero3 + numero4;
  },
  subtrair(numero1, numero2) {
    return numero1 - numero2;
  },
  dividir(numero1, numero2) {
    return numero1 / numero2;
  },
  multiplicar(numero1, numero2) {
    return numero1 * numero2;
  },
  PI: 3.1412321321321321321789371298739012468127654378126378215478512784,
  zero: 0,
};

// Estou definindo que essas informações dentro de calculadora, vão ser exportadas
module.exports = calculadora
